import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const domain = 'https://water-damage-cleanup-houston.com';
const htmlFiles = readdirSync(root).filter((file) => file.endsWith('.html'));
const failures = [];

function fail(file, message) {
  failures.push(`${file}: ${message}`);
}

function pagePath(file) {
  return file === 'index.html' ? '/' : `/${file.replace(/\.html$/, '')}`;
}

function localAssetExists(file, value) {
  const cleanValue = value.split('#')[0].split('?')[0];
  if (!cleanValue || /^(?:https?:|\/\/|mailto:|tel:|data:|#)/i.test(cleanValue)) return true;
  const assetPath = cleanValue.startsWith('/')
    ? join(root, decodeURIComponent(cleanValue.slice(1)))
    : join(root, decodeURIComponent(cleanValue));
  return existsSync(assetPath) && statSync(assetPath).isFile();
}

for (const file of htmlFiles) {
  const html = readFileSync(join(root, file), 'utf8');
  const indexable = !['404.html', 'thank-you.html'].includes(file);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1].trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)?.[1].trim();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;

  if (!title) fail(file, 'missing a page title');
  if (indexable && (!description || description.length < 50)) fail(file, 'missing or too-short meta description');
  if (indexable && canonical !== `${domain}${pagePath(file)}`) fail(file, `canonical must be ${domain}${pagePath(file)}`);
  if (indexable && h1Count !== 1) fail(file, `expected one H1, found ${h1Count}`);
  if (indexable && /<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) fail(file, 'indexable page is marked noindex');
  if (!indexable && !/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) fail(file, 'utility page must be marked noindex');
  if (/<p\b[^>]*>(?:(?!<\/p>)[\s\S])*?<p\b/i.test(html)) fail(file, 'contains nested paragraph markup');
  if (/<\/p>\s*<\/p>/i.test(html)) fail(file, 'contains duplicate paragraph closing tags');

  for (const match of html.matchAll(/<(?:img|script|link)\b[^>]+?(?:src|href)=["']([^"']+)["']/gi)) {
    if (!localAssetExists(file, match[1])) fail(file, `missing local asset: ${match[1]}`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=["'][^"']*["']/i.test(match[0])) fail(file, 'image is missing an alt attribute');
  }

  for (const match of html.matchAll(/<input\b[^>]*>/gi)) {
    const input = match[0];
    const type = input.match(/\btype=["']([^"']+)["']/i)?.[1].toLowerCase() || 'text';
    const name = input.match(/\bname=["']([^"']+)["']/i)?.[1];
    if (name && !['checkbox', 'hidden', 'range'].includes(type) && name !== 'website' && !/\bplaceholder=["'][^"']+["']/i.test(input)) {
      fail(file, `input ${name} is missing a placeholder`);
    }
    if (type === 'tel') {
      if (!/\bmaxlength=["']14["']/i.test(input)) fail(file, 'phone input must allow the formatted 10-digit number');
      if (!/\binputmode=["']numeric["']/i.test(input)) fail(file, 'phone input must use the numeric keyboard');
      if (!/\bdata-us-phone\b/i.test(input)) fail(file, 'phone input must use the shared U.S. phone formatter');
      if (!/\bplaceholder=["']\(713\) 555-0123["']/i.test(input)) fail(file, 'phone input must show the formatted U.S. phone example');
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href || href === '#') fail(file, 'contains a non-crawlable placeholder link');
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch { fail(file, 'contains invalid JSON-LD'); }
  }
}

const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
if (!/Sitemap:\s*https:\/\/water-damage-cleanup-houston\.com\/sitemap\.xml/i.test(robots)) fail('robots.txt', 'missing the production sitemap declaration');
if (!/Sitemap:\s*https:\/\/water-damage-cleanup-houston\.com\/sitemap-images\.xml/i.test(robots)) fail('robots.txt', 'missing the image sitemap declaration');

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/water-damage-cleanup-houston\.com[^<]*)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = htmlFiles
  .filter((file) => !['404.html', 'thank-you.html'].includes(file))
  .map((file) => `${domain}${pagePath(file)}`);

for (const url of expectedUrls) if (!sitemapUrls.includes(url)) fail('sitemap.xml', `missing indexable page ${url}`);
for (const url of sitemapUrls) if (!expectedUrls.includes(url)) fail('sitemap.xml', `contains non-indexable or missing page ${url}`);
if (new Set(sitemapUrls).size !== sitemapUrls.length) fail('sitemap.xml', 'contains duplicate URLs');

const imageSitemap = readFileSync(join(root, 'sitemap-images.xml'), 'utf8');
const imageUrls = [...imageSitemap.matchAll(/<image:loc>(https:\/\/water-damage-cleanup-houston\.com\/[^<]+)<\/image:loc>/g)].map((match) => match[1]);
if (!imageUrls.length) fail('sitemap-images.xml', 'contains no image URLs');
if (new Set(imageUrls).size !== imageUrls.length) fail('sitemap-images.xml', 'contains duplicate image URLs');
for (const url of imageUrls) {
  const localPath = join(root, decodeURIComponent(url.replace(`${domain}/`, '')));
  if (!existsSync(localPath)) fail('sitemap-images.xml', `references a missing image ${url}`);
}

const homepage = readFileSync(join(root, 'index.html'), 'utf8');
const homepageImages = [...homepage.matchAll(/<img\b[^>]*\bsrc=["'](assets\/[^"']+)["']/gi)].map((match) => `${domain}/${match[1]}`);
for (const url of homepageImages) if (!imageUrls.includes(url)) fail('sitemap-images.xml', `is missing homepage image ${url}`);

const analyticsEvents = readFileSync(join(root, 'assets/js/analytics-events.js'), 'utf8');
const estimateEvents = readFileSync(join(root, 'assets/js/estimate-form.js'), 'utf8');
const mainScript = readFileSync(join(root, 'assets/main.js'), 'utf8');
if (!analyticsEvents.includes('"phone_call_click"')) fail('analytics-events.js', 'missing phone-call tracking event');
if (!estimateEvents.includes('"generate_lead"')) fail('estimate-form.js', 'missing successful form-submission tracking event');
if (!mainScript.includes('analytics-events.js')) fail('assets/main.js', 'does not load analytics event tracking');

const contact = readFileSync(join(root, 'contact.html'), 'utf8');
if (!/data-estimate-form/.test(contact)) fail('contact.html', 'must use the shared estimate form');
if (!/data-form-name="contact_estimate"/.test(contact)) fail('contact.html', 'must identify contact-form leads');
if (!/name="services"\s+type="checkbox"/.test(contact)) fail('contact.html', 'must support multiple service selections');

const llms = readFileSync(join(root, 'llms.txt'), 'utf8');
if (!llms.includes('https://water-damage-cleanup-houston.com/estimate')) fail('llms.txt', 'is missing the estimate URL');
for (const url of llms.match(/https:\/\/water-damage-cleanup-houston\.com\/[^\s)]+/g) || []) {
  if (url.endsWith('.xml')) continue;
  const path = url.replace(domain, '').replace(/^\//, '');
  const file = path ? `${path}.html` : 'index.html';
  if (!existsSync(join(root, file))) fail('llms.txt', `links to a missing page ${url}`);
}

if (failures.length) {
  console.error(`\nSite verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`✓ Verified ${htmlFiles.length} HTML pages, sitemap, robots.txt, structured data, links, assets, and page metadata.`);
}
