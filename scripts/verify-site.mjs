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
      if (!/\bmaxlength=["']10["']/i.test(input)) fail(file, 'phone input must limit entries to 10 digits');
      if (!/\binputmode=["']numeric["']/i.test(input)) fail(file, 'phone input must use the numeric keyboard');
      if (!/\bpattern=["'][^"']*\[2-9\][^"']*\{4\}["']/i.test(input)) fail(file, 'phone input is missing the U.S. 10-digit validation pattern');
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

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/water-damage-cleanup-houston\.com[^<]*)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = htmlFiles
  .filter((file) => !['404.html', 'thank-you.html'].includes(file))
  .map((file) => `${domain}${pagePath(file)}`);

for (const url of expectedUrls) if (!sitemapUrls.includes(url)) fail('sitemap.xml', `missing indexable page ${url}`);
for (const url of sitemapUrls) if (!expectedUrls.includes(url)) fail('sitemap.xml', `contains non-indexable or missing page ${url}`);
if (new Set(sitemapUrls).size !== sitemapUrls.length) fail('sitemap.xml', 'contains duplicate URLs');

if (failures.length) {
  console.error(`\nSite verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`✓ Verified ${htmlFiles.length} HTML pages, sitemap, robots.txt, structured data, links, assets, and page metadata.`);
}
