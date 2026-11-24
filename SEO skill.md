# SEO Skill

# Google Search Essentials

The Google Search Essentials make up the core parts of what makes your web-based content (web pages, images, videos, or other publicly-available material that Google finds on the web) eligible to appear and perform well on Google Search:

- **Technical requirements**: What Google needs from a web page to show it in Google Search.  
- **Spam policies**: The behaviors and tactics that can lead to lower ranking or being completely omitted from Google Search results.  
- **Key best practices**: The main things that can help improve how your site appears in Google Search results.

It doesn't cost any money to appear in Google Search results, no matter what anyone tries to tell you. It's important to note that just because a page meets all of these requirements and best practices, doesn't mean that Google will crawl, index, or serve its content. Learn more about How Search Works.

## Technical requirements

The technical requirements cover the bare minimum that Google Search needs from a web page in order to show it in search results. There are actually very few technical things you need to do to a web page; most sites pass the technical requirements without even realizing it.

## Spam policies

The spam policies detail the behaviors and tactics that can lead to a page or an entire site being ranked lower or completely omitted from Google Search. Sites that focus on providing the best content and experience for people and uphold the spirit of our principles are more likely to do well in Google Search results.

## Key best practices

While there are many things you can do to improve your site's SEO, there are a few core practices that can have the most impact on your web content's ranking and appearance on Google Search:

- Create helpful, reliable, people-first content.  
- Use words that people would use to look for your content, and place those words in prominent locations on the page, such as the title and main heading of a page, and other descriptive locations such as alt text and link text.  
- Make your links crawlable so that Google can find other pages on your site via the links on your page.  
- Tell people about your site. Be active in communities where you can tell like-minded people about your services and products that you mention on your site.  
- If you have other content, such as images, videos, structured data, and JavaScript, make sure you're following those specific best practices so that we can understand those parts of your page too.  
- Enhance how your site appears on Google Search by enabling features that make sense for your site.  
- If you have content that shouldn't be found in search results or you want to opt out entirely, use the appropriate method for controlling how your content appears in Google Search.

# Google Search technical requirements

It costs nothing to get your page in search results, no matter what anyone tries to tell you. As long as your page meets the minimum technical requirements, it's eligible to be indexed by Google Search:

1. Googlebot isn't blocked.  
2. The page works, meaning that Google receives an HTTP `200 (success)` status code.  
3. The page has indexable content.

## Googlebot isn't blocked (it can find and access the page)

Google only indexes pages on the web that are accessible to the public and which don't block our crawler, Googlebot, from crawling them. If a page is made private, such as requiring a log-in to view it, Googlebot will not crawl it. Similarly, if one of the several mechanisms are used to block Google from indexing, the page will not be indexed.

### Check if Googlebot can find and access your page

Pages that are blocked by robots.txt are unlikely to show in Google Search results. To see a list of pages that are inaccessible to Google (but that you would like to see in Search results), use both the Page Indexing report and Crawl Stats report in Search Console. Each report may contain different information about your URLs, so it's a good idea to look at both reports.

To test a specific page, use the URL Inspection tool.

## The page works (it's not an error page)

Google only indexes pages that are served with an HTTP 200 (success) status code. Client and server error pages aren't indexed. You can check the HTTP status code for a given page with the URL Inspection tool.

## The page has indexable content

Once Googlebot can find and access a working page, Google checks the page for indexable content. Indexable content means:

- The textual content is in a file type that Google Search supports.  
- The content doesn't violate our spam policies.

# Spam policies for Google web search

In the context of Google Search, spam refers to techniques used to deceive users or manipulate our Search systems into featuring content prominently, such as attempting to manipulate Search systems into ranking content highly or attempting to manipulate generative AI responses in Google Search. Our spam policies help protect users and improve the quality of Search results. To be eligible to appear in Google web search results, content (web pages, images, videos, news content or other material that Google finds from across the web) shouldn't violate Google Search's overall policies or the spam policies listed on this page. These policies apply to all web search results, including those from Google's own properties.

We detect policy-violating practices both through automated systems and, as needed, human review that can result in a manual action. Sites that violate our policies may rank lower in results or not appear in results at all.

If you believe that a site is violating Google's spam policies, let us know by filing a search quality user report. We're focused on developing scalable and automated solutions to problems, and we'll use these reports to further improve our spam detection systems.

Our policies cover common spam practices, but Google may act against any type of spam practices we detect.

## Cloaking

Cloaking refers to the practice of presenting different content to users and search engines with the intent to manipulate search rankings and mislead users. Examples of cloaking include:

- Showing a page about travel destinations to search engines while showing a page about discount drugs to users  
- Inserting text or keywords into a page only when the user agent that is requesting the page is a search engine, not a human visitor

If your site uses technologies that search engines have difficulty accessing, like JavaScript or images, see our recommendations for making that content accessible to search engines and users without cloaking.

If a site is hacked, it's not uncommon for the hacker to use cloaking to make the hack harder for the site owner to detect. Read more about fixing hacked sites and avoiding being hacked.

If you operate a paywall or a content-gating mechanism, we don't consider this to be cloaking if Google can see the full content of what's behind the paywall just like any person who has access to the gated material and if you follow our Flexible Sampling general guidance.

## Doorway abuse

Doorway abuse is when sites or pages are created to rank for specific, similar search queries. They lead users to intermediate pages that aren't as useful as the final destination. Examples of doorway abuse include:

- Having multiple websites with slight variations to the URL and home page to maximize their reach for any specific query  
- Having multiple domain names or pages targeted at specific regions or cities that funnel users to one page  
- Generating pages to funnel visitors into the actual usable or relevant portion of a site  
- Creating substantially similar pages that are closer to search results than a clearly defined, browseable hierarchy

## Expired domain abuse

Expired domain abuse is where an expired domain name is purchased and repurposed primarily to manipulate search rankings by hosting content that provides little to no value to users. Illustrative examples include, but aren't limited to:

- Affiliate content on a site previously used by a government agency  
- Commercial medical products being sold on a site previously used by a non-profit medical charity  
- Casino-related content on a former elementary school site

## Hacked content

Hacked content is any content placed on a site without permission, due to vulnerabilities in a site's security. Hacked content gives poor search results to our users and can potentially install malicious content on their machines. Examples of hacking include:

- **Code injection**: When hackers gain access to your website, they might try to inject malicious code into existing pages on your site. This often takes the form of malicious JavaScript injected directly into the site, or into iframes.  
- **Page injection**: Sometimes, due to security flaws, hackers are able to add new pages to your site that contain spammy or malicious content. These pages are often meant to manipulate search engines or to attempt phishing. Your existing pages might not show signs of hacking, but these newly-created pages could harm your site's visitors or your site's performance in search results.  
- **Content injection**: Hackers might also try to subtly manipulate existing pages on your site. Their goal is to add content to your site that search engines can see but which may be harder for you and your users to spot. This can involve adding hidden links or hidden text to a page by using CSS or HTML, or it can involve more complex changes like cloaking.  
- **Redirects**: Hackers might inject malicious code to your website that redirects some users to harmful or spammy pages. The kind of redirect sometimes depends on the referrer, user agent, or device. For example, clicking a URL in Google Search results could redirect you to a suspicious page, but there is no redirect when you visit the same URL directly from a browser.

Here are our tips on fixing hacked sites and avoiding being hacked.

## Hidden text and link abuse

Hidden text or link abuse is the practice of placing content on a page in a way solely to manipulate search engines and not to be easily viewable by human visitors. Examples of hidden text or link abuse include:

- Using white text on a white background  
- Hiding text behind an image  
- Using CSS to position text off-screen  
- Setting the font size or opacity to 0  
- Hiding a link by only linking one small character (for example, a hyphen in the middle of a paragraph)

There are many web design elements today that utilize showing and hiding content in a dynamic way to improve user experience; these elements don't violate our policies:

- Accordion or tabbed content that toggle between hiding and showing additional content  
- Slideshow or slider that cycles between several images or text paragraphs  
- Tooltip or similar text that displays additional content when users interact with over an element  
- Text that's only accessible to screen readers and is intended to improve the experience for those using screen readers

## Keyword stuffing

Keyword stuffing refers to the practice of filling a web page with keywords or numbers in an attempt to manipulate rankings in Google Search results. Often these keywords appear in a list or group, unnaturally, or out of context. Examples of keyword stuffing include:

- Lists of phone numbers without substantial added value  
- Blocks of text that list cities and regions that a web page is trying to rank for  
- Repeating the same words or phrases so often that it sounds unnatural. For example:  Unlimited app store credit. There are so many sites that claim to offer app store credit for \$0 but they're all fake and always mess up with users looking for unlimited app store credits. You can get limitless credits for app store right here on this website. Visit our unlimited app store credit page and get it today\!

## Link spam

Link spam is the practice of creating links to or from a site primarily for the purpose of manipulating search rankings. The following are examples of link spam:

- Buying or selling links for ranking purposes. This includes:  
  - Exchanging money for links, or posts that contain links  
  - Exchanging goods or services for links  
  - Sending someone a product in exchange for them writing about it and including a link  
- Excessive link exchanges ("Link to me and I'll link to you") or partner pages exclusively for the sake of cross-linking  
- Using automated programs or services to create links to your site  
- Requiring a link as part of a Terms of Service, contract, or similar arrangement without allowing a third-party content owner the choice of qualifying the outbound link  
- Text advertisements or text links that don't block ranking credit  
- Advertorials or native advertising where payment is received for articles that include links that pass ranking credit, or links with optimized anchor text in articles, guest posts, or press releases distributed on other sites. For example: There are many wedding rings on the market. If you want to have a wedding, you will have to pick the best ring. You will also need to buy flowers and a wedding dress.  
- Low-quality directory or bookmark site links  
- Keyword-rich, hidden, or low-quality links embedded in widgets that are distributed across various sites  
- Widely distributed links in the footers or templates of various sites  
- Forum comments with optimized links in the post or signature, for example: Thanks, that's great info\!  
- Paul paul's pizza san diego pizza best pizza san diego  
- Creating low-value content primarily for the purposes of manipulating linking and ranking signals

Google does understand that buying and selling links is a normal part of the economy of the web for advertising and sponsorship purposes. It's not a violation of our policies to have such links as long as they are qualified with a `rel="nofollow"` or `rel="sponsored"` attribute value to the `<a>` tag.

## Machine-generated traffic

Machine-generated traffic (also called automated traffic) refers to the practice of sending automated queries to Google. This includes scraping results for rank-checking purposes or other types of automated access to Google Search conducted without express permission. Machine-generated traffic consumes resources and interferes with our ability to best serve users. Such activities violate our spam policies and the Google Terms of Service.

## Malicious practices

Malicious practices create a mismatch between user expectations and the actual outcome, leading to a negative and deceptive user experience, or compromised user security or privacy.

The following are common examples of malicious practices:

- Malware is any software or mobile application specifically designed to harm a computer, a mobile device, the software it's running, or its users. Malware exhibits malicious behavior that can include installing software without user consent and installing harmful software such as viruses. Site owners sometimes don't realize that their downloadable files are considered malware, so these binaries might be hosted inadvertently.  
- Unwanted software is an executable file or mobile application that engages in behavior that is deceptive, unexpected, or that negatively affects the user's browsing or computing experience. Examples include software that switches your home page or other browser settings to ones you don't want, or apps that leak private and personal information without proper disclosure. Site owners should make sure they don't violate the Unwanted Software Policy and follow our guidelines.  
- Back button hijacking is when a site interferes with user browser navigation by manipulating the browser history or other functionalities, preventing them from using their back button to immediately get back to the page they came from.

## Misleading functionality

Misleading functionality refers to the practice of intentionally creating sites that trick users into thinking they would be able to access some content or services but in reality can't. Examples of misleading functionality include:

- A site with a fake generator that claims to provide app store credit but doesn't actually provide the credit  
- A site that claims to provide certain functionality (for example, PDF merge, countdown timer, online dictionary service), but intentionally leads users to deceptive ads rather than providing the claimed services

## Scaled content abuse

Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings and not helping users. This abusive practice is typically focused on creating large amounts of unoriginal content that provides little to no value to users, no matter how it's created.

Examples of scaled content abuse include, but aren't limited to:

- Using generative AI tools or other similar tools to generate many pages without adding value for users  
- Scraping feeds, search results, or other content to generate many pages (including through automated transformations like synonymizing, translating, or other obfuscation techniques), where little value is provided to users  
- Stitching or combining content from different web pages without adding value  
- Creating multiple sites with the intent of hiding the scaled nature of the content  
- Creating many pages where the content makes little or no sense to a reader but contains search keywords

If you're hosting such content on your site, exclude it from Search.

## Scraping

Scraping refers to the practice of taking content from other sites, often through automated means, and hosting it with the purpose of manipulating search rankings. Examples of abusive scraping include:

- Republishing content from other sites without adding any original content or value, or even citing the original source  
- Copying content from other sites, modify it only slightly (for example, by substituting synonyms or using automated techniques), and republish it  
- Reproducing content feeds from other sites without providing some type of unique benefit to the user  
- Creating sites dedicated to embedding or compiling content, such as videos, images, or other media from other sites, without substantial added value to the user

## Site reputation policy

The site reputation policy applies where third-party content is published on a host site mainly because of that host's already-established ranking signals, which it has earned primarily from its first-party content. The goal of this tactic is for the content to rank better than it could otherwise on its own. We have made changes applicable to the policy in the European Economic Area (EEA).

Having third-party content alone isn't inconsistent with the site reputation policy; it's only inconsistent if the third-party content is published on a host site mainly because of that host site's already-established ranking signals.

Examples inconsistent with the site reputation policy include, but aren't limited to:

- An educational site hosting a page about sponsored reviews of payday loans written by a third-party that distributes the same page to other sites across the web  
- A medical site hosting a low-quality, third-party advertising page about "best casinos" that isn't integrated with the site, and that's being placed on the site to rank better due to the established site's ranking signals

Examples that are **NOT** considered inconsistent with the site reputation policy include:

- Wire service or press release service sites  
- News publications that have syndicated news content from other news publications  
- Sites designed to allow user-generated content, such as a forum website or comment sections  
- Columns, opinion pieces, articles, and other work of an editorial nature  
- Third-party content (for example, "advertorial" or "native advertising" type pages) where the purpose is to share content directly to readers (such as through promotion within the publication itself), rather than hosting the content to manipulate search rankings  
- Using affiliate links throughout a page, with links treated appropriately, or embedding third-party ad units throughout a page

These examples are non-exhaustive. There will be other instances where we don't take action.

Google generally applies a presumption that individual pages (including new pages) match the overall quality of other pages on the domain. If we detect that a portion of your site may be out of line with this policy, a site will be subject to human review. As part of this review, if the site is found to be inconsistent with the policy, the consequences for the way the site's pages appear in search results will vary depending on the location of users.

- **Outside the EEA:** If a site is found to be out of line with this policy, the relevant pages may be subject to a manual action when they appear in Search results shown to users outside the EEA.  
- **Within the EEA**: When pages appear in Search results shown to users within the EEA, the relevant pages may be categorized as separate from the main domain but won't be subject to the impact of manual action. This will allow the different parts of the site to rank independently of each other, on their own merits. This ensures that content is ranked in a consistent way against other content of the same nature (for example, casino content ranks against other casino content), so that users get the best possible results for their query.

If your site is affected in this way, we will notify you in the Manual actions report and in the Search Console message center. All sites will have the opportunity to address this issue or appeal via a reconsideration request. Eligible sites will, following the reconsideration request, also have the opportunity to bring disputes to mediation.

### More detailed guidance

On the rare occasions where we perform a human review, our overarching goal is to determine whether content on the relevant portion of the site is created with sufficient input, editorial oversight, or contribution from the host site to be considered fully integrated with the main site. This ensures that a page's rank reflects the way it is presented to and understood by users.

This review applies globally and takes into account a number of objective factors, aimed at understanding the degree to which the host domain exercises control over the page content. These may include:

- **How the content is presented**, meaning are the graphic design, formatting, typography and UX features of the content consistent with the host domain?  
- **The quality of the content**, meaning, are there quality issues present on the page that don't appear on the main domain and otherwise suggest a departure from the standard of quality of the main domain?  
- **Its stated or implied authorship**, meaning, is there an explicit acknowledgement of ownership or responsibility for the content? Are there indications that contest the stated authorship of the content?  
- **Does the content appear on multiple other sites in identical or near-identical form**, meaning, the same identical or near-identical content appears on multiple other sites?

Importantly, not one of these factors is either necessary or sufficient on its own to determine whether a given portion of a site is in line with this policy. Based on the particular situation, some factors may be more relevant than others, and other evidence may need to be taken into account (for example, if certain pages on a site are part of third-party marketing material for manipulating Search ranking). Here are some examples of how we might approach this:

1. **Not likely to take action: integrated coupons' deals section** A publisher hosts a coupons and deals section in partnership with a specialist provider, on a different CMS than the main site, under a sub-folder fully integrated in the homepage and in the snippets available in the publisher's articles. The coupons are organized under different categories specific for that publisher (for example, special deals, beauty, home appliances, clothes, local shops), even if some of the codes may be available elsewhere. The commercial communications character is clearly disclosed and the section provides disclaimers identifying the publisher as editorially responsible in collaboration with a partner (for example, provided by the publisher or dedicated editing team of the publisher in cooperation with the partner). Some codes in the section are cross-referred in other editorial content of the publisher or newsletters edited by the publisher, and there has been sufficient curation of the coupons and deals showing that content represents a differentiated, joint editorial effort between the publisher and the commercial partner. The section is easily navigable from the main page or from main sections of the main page (for example, the "Trends" section). Problems with the codes or offers provided can be reported to the publisher through an easily accessible link on the page and are treated in accordance with general publisher's contact standards. Unlikely to take action: even though the section is created in collaboration with a third party, the content — an organized repository of coupons and deals generally available on the market — complements and is integrated in the publication. Users are made aware of the responsible persons for it and a contact point in case of problems, in accordance with the publisher's general editorial standards.  
2. **Likely to take action: unauthored affiliate article not integrated in publication** A globally recognized business publication hosts an article including links to a marketplace selling CBD oils. Neither the author of the article nor the responsible editor is identified, nor are there disclaimers about the commercial character of the content. The article isn't part of any of the thematic sections of the publication, and no links or menu are available to reach the article from the main page or thematic sections of the publication. While the page is made available on a portion of the publisher's main site, there is evidence that the specific article is purely duplicating the same content provided by a third-party digital marketplace illustrating such a product. In this case, and without prejudice to any other policy that may be applicable, because the content is unrelated to the editorial sections of the publisher, and because the presentation, UX features, the quality don't match the business publication, including appropriate disclaimer or marks of commercial character of the content, and authorship and the responsible editor are unclear, but rather content is copied from another site, we would likely take action for search results that appear outside the EEA.  
3. **Unlikely to take action: authored, original, affiliate article from freelancer** A news site branches out to develop a new cooking section, including affiliate links to grocery stores and cookware. The content is produced by a freelancer interviewing international guest celebrity chefs, and there is evidence of editorial oversight by the host publication: for example, the site is branded consistently, contains clear statements of editorial responsibility of the news site, and the freelancer is identified as author. The same freelancer also provides similar content to other publications and publishers, but the selection of interviews or recipes provided is specific to the news site at stake, even if the affiliate links are similar or the same as those appearing in other publications. In this case, even though the content is authored by a third party also working for other websites, it's primarily unique content generated for the host site and its end users. Authorship, editorial responsibility, and affiliate links are clearly marked, and the formatting and presentation of the content are consistent with the rest of the publisher's content. It's unlikely that we'd take action in this case.

### FAQ

#### Will manual action taken outside the EEA affect the ranking of my site within the EEA?

No. Manual actions involving the site reputation policy outside the EEA only affect results shown to users outside the EEA, and not those shown to users within the EEA. The fact that part of a site is subject to a manual action under this policy outside the EEA isn't used as a signal for ranking that content within the EEA.

There's no obligation to apply a `noindex` tag to content that is subject to a manual action outside the EEA and failure to do so isn't taken into account in ranking that content within the EEA. Nor is such failure considered an attempt to evade or circumvent this policy or a repeated violation.

#### A portion of my site was previously subject to manual action under this policy in the EEA. What happens now?

Google will lift all previous manual actions taken under this policy for pages appearing in search results for users in the EEA. This means that those pages will no longer be demoted or subject to any kind of manual penalty in search results shown to users in the EEA.

Going forward, those pages may be categorized as separate from the main domain and ranked on their own merits, but this isn't automatic.

Our systems ensure that pages that were previously subject to a manual action under this policy rank fairly and aren't disadvantaged. The fact that a page was previously subject to a manual action under this policy isn't used as a ranking signal when ranking that page.

#### What happens when a part of my site is categorized as separate from the main domain for being out of line with this policy?

This categorization tells our systems that the presumption that we generally apply globally — which is that individual pages (including new pages) match the overall quality of other pages on the domain — no longer applies.

This doesn't mean that the separate portion of the site immediately loses the ranking signals of the main site. Moreover, over time, our ranking systems learn to rank these parts of a site independently. This may lead to changes in the way that each part of the site ranks, including as a result of improvements in site-wide signals for one part of the site.

The fact that this categorization has been applied isn't used as a ranking signal.

#### What can I do if I disagree with the action taken on the domain?

For websites in the EEA, we have implemented a new reconsideration request process through which we commit to answer requests within a short timeframe and provide more details on the reasoning.

In the EEA, you can also make use of alternative dispute resolution.

## Sneaky redirects

Redirecting is the act of sending a visitor to a different URL than the one they initially requested. Sneaky redirecting is the practice of doing this maliciously in order to either show users and search engines different content or show users unexpected content that doesn't fulfill their original needs. Examples of sneaky redirects include:

- Showing search engines one type of content while redirecting users to something significantly different  
- Showing desktop users a normal page while redirecting mobile users to a completely different spam domain

While sneaky redirection is a type of spam, there are many legitimate, non-spam reasons to redirect one URL to another. Examples of legitimate redirects include:

- Moving your site to a new address  
- Consolidating several pages into one  
- Redirecting users to an internal page once they are logged in

When examining if a redirect is sneaky, consider whether or not the redirect is intended to deceive either the users or search engines. Learn more about how to appropriately employ redirects on your site.

## Thin affiliation

Thin affiliation is the practice of publishing content with product affiliate links where the product descriptions and reviews are copied directly from the original merchant without any original content or added value.

Affiliate pages can be considered thin if they are a part of a program that distributes its content across a network of affiliates without providing additional value. These sites often appear to be cookie-cutter sites or templates with the same or similar content replicated within the same site or across multiple domains or languages. If a Search results page returned several of these sites, all with the same content, thin affiliate pages would create a frustrating user experience.

Not every site that participates in an affiliate program is a thin affiliate. Good affiliate sites add value by offering meaningful content or features. Examples of good affiliate pages include offering additional information about price, original product reviews, rigorous testing and ratings, navigation of products or categories, and product comparisons.

## User-generated spam

User-generated spam is spammy content added to a site by users through a channel intended for user content. Often site owners are unaware of the spammy content. Examples of spammy user-generated content include:

- Spammy accounts on hosting services that anyone can register for  
- Spammy posts on forum threads  
- Comment spam on blogs  
- Spammy files uploaded to file hosting platforms

Here are several tips on how to prevent abuse of your site's public areas. Here are our tips on fixing hacked sites and avoiding being hacked.

## Other practices that can lead to demotion or removal

### Legal removals

When we receive a significant volume of valid copyright removal requests involving a given site, we are able to use that to demote other content from the site in our results. This way, if there is other infringing content, people are less likely to encounter it versus the original content. We apply similar demotion signals to complaints involving defamation, counterfeit goods, and court-ordered removals. In the case of child sexual abuse material (CSAM), we always remove such content when it is identified and we demote all content from sites with a significant proportion of CSAM content.

### Personal information removals

If we process a significant volume of personal information removals involving a site with exploitative removal practices, we demote other content from the site in our results. We also look to see if the same pattern of behavior is happening with other sites and, if so, apply demotions to content on those sites. We may apply similar demotion practices for sites that receive a significant volume of removals of content involving doxxing content, explicit personal imagery created or shared without consent, or explicit non-consensual fake content.

### Policy circumvention

If a site continues to engage in actions intended to bypass our spam policies or content policies for Google Search, we may take appropriate action which may include restricting or removing eligibility for some of our search features (for example, Top Stories, Discover) and taking broader action in Google Search (for example, removing more sections of a site from Search results). Circumvention includes but isn't limited to:

- Using existing or creating new subdomains, subdirectories, or sites with the intention of continuing to violate our policies  
- Using other methods intended to continue distributing content or engaging in a behavior that aims to violate our policies

### Scam and fraud

Scam and fraud come in many forms, including but not limited to impersonating an official business or service through imposter sites, intentionally displaying false information about a business or service, or otherwise attracting users to a site on false pretenses. Using automated systems, Google seeks to identify pages with scammy or fraudulent content and prevent them from showing up in Google Search results. Examples of online scams and fraud include:

- Impersonating a well-known business or service provider to trick users into paying money to the wrong party  
- Creating deceptive sites pretending to provide official customer support on behalf of a legitimate business or provide fake contact information of such business

# Search Engine Optimization (SEO) Starter Guide

When you built your website, you likely created it with your users in mind, trying to make it easy for them to find and explore your content. One of those users is a search engine, which helps people discover your content. SEO—short for search engine optimization—is about helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.

The Search Essentials outline the most important elements of what makes your website eligible to appear on Google Search. While there's no guarantee that any particular site will be added to Google's index, sites that follow the **Search Essentials are more likely to show up in Google's search results**. SEO is about taking the next step and **working on improving your site's presence in Search**. This guide will walk you through some of the most common and effective improvements you can do on your site.

There are no secrets here that'll automatically rank your site first in Google (sorry\!). In fact some of the suggestions might not even apply to your business, but following the best practices will hopefully make it easier for search engines (not just Google) to crawl, index, and understand your content.

## How does Google Search work?

Google is a fully automated search engine that uses programs called crawlers to explore the web constantly, looking for pages to add to our index. You usually don't need to do anything except publish your site on the web. In fact, the vast majority of sites listed in our results are found and added automatically as we crawl the web. If you're hungry for more, we have documentation about how Google discovers, crawls, and serves web pages.

## How long until I see impact in search results?

Every change you make will take some time to be reflected on Google's end. Some changes might take effect in a few hours, others could take several months. In general, you likely want to wait a few weeks to assess whether your work had beneficial effects in Google Search results. Keep in mind that not all changes you make to your website will result in noticeable impact in search results; if you're not satisfied with your results and your business strategies allow it, try iterating with the changes and see if they make a difference.

## Help Google find your content

Before you actually do anything mentioned in this section, check if Google has already found your content (maybe you don't need to do anything\!). Try searching on Google for your site with the `site: search operator`. If you see results pointing to your site, you're in the index. For example, a search for `site:wikipedia.org` returns these results. If you don't see your site, check out the technical requirements to make sure there's nothing technically preventing your site from showing in Google Search, and then come back here.

Google primarily finds pages through links from other pages it already crawled. In many cases, these are other websites that are linking to your pages. Other sites linking to you is something that happens naturally over time, and you can also encourage people to discover your content by promoting your site.

If you're open to a little technical challenge, you could also submit a sitemap—which is a file that contains all the URLs on your site that you care about. Some content management systems (CMS) may even do this automatically for you. However this isn't required, and you should first focus on making sure people know about your site.

### Check if Google can see your page the same way a user does

When Google crawls a page, it should ideally see the page the same way an average user does. For this, Google needs to be able to access the same resources as the user's browser. If your site is hiding important components that make up your website (like CSS and JavaScript), Google might not be able to understand your pages, which means they might not show up in search results or rank well for the terms you're targeting.

If your pages have different information depending on the user's physical location, make sure you're satisfied with the information that Google sees from its crawler's location, which is generally the US.

To check how Google sees your page, use the URL Inspection Tool in Search Console.

### Don't want a page in Google's search results?

It might be important for you to opt out your site as a whole or sections of it from appearing in search results. For example, you might not want your posts about your new embarrassing haircut to show up in search results. Google supports various ways that lets you opt out of crawling and indexing of your URLs. If you need to block some files, directories, or even your whole site from Google Search, check out our guide about ways to prevent content from appearing in search results.

## Organize your site

When you're setting up or redoing your site, it can be good to organize it in a logical way because it can help search engines and users understand how your pages relate to the rest of your site. Don't drop everything and start reorganizing your site right now though: while these suggestions can be helpful long term (especially if you're working on a larger website), search engines will likely understand your pages as they are right now, regardless of how your site is organized.

### Use descriptive URLs

Parts of the URL can be displayed in search results as breadcrumbs, so users can also use the URLs to understand whether a result will be useful for them.

Google learns breadcrumbs automatically based on the words in the URL, but you can also influence them with structured data if you like a technical challenge. Try to include words in the URL that may be useful for users; for example:

`https://www.example.com/pets/cats.html`

A URL that only contains random identifiers is less helpful for users; for example:

`https://www.example.com/2/6772756D707920636174`

### Group topically similar pages in directories

If you have more than a few thousand URLs on your site, how you organize your content may have effects on how Google crawls and indexes your site. Specifically, using directories (or folders) to group similar topics can help Google learn how often the URLs in individual directories change.

For example, consider the following URLs:

`https://www.example.com/policies/return-policy.html`

`https://www.example.com/promotions/new-promos.html`

The content in the `policies` directory seldomly changes, however the content in the `promotions` directory likely changes very often. Google can learn this information and crawl the different directories at different frequencies. To learn more about search-friendly site structures, check out our guide for ecommerce sites, for which a good URL structure is more important as they tend to be larger.

### Reduce duplicate content

Some websites show the same content under different URLs, which is called *duplicate content*. Search engines choose a single URL (the *canonical* URL) to show users, per piece of content.

Having duplicate content on your site is not a violation of our spam policies, but it can be a bad user experience and search engines might waste crawling resources on URLs that you don't even care about. If you're feeling adventurous, it's worth figuring out if you can specify a canonical version for your pages. But if you don't canonicalize your URLs yourself, Google will try to automatically do it for you.

When working on canonicalization, try to ensure that each piece of content on your site is only accessible through one individual URL; having two pages that contain the same information about your promotions can be a confusing user experience (for example, people might wonder which is the right page, and whether there's a difference between the two).

If you have multiple pages that have the same information, try setting up a redirect from non-preferred URLs to a URL that best represents that information. If you can't redirect, use the `rel="canonical"` `link` element instead. But again, don't worry too much about this; search engines can generally figure this out for you on their own most of the time.

## Make your site interesting and useful

Creating content that people find compelling and useful will likely influence your website's presence in search results more than any of the other suggestions in this guide. While "compelling and useful content" can mean different things to different people, content like this generally shares some common attributes, such as:

- **The text is easy-to-read and well organized**: Write content naturally and make sure the content is well written, easy to follow, and free of spelling and grammatical mistakes. Break up long content into paragraphs and sections, and provide headings to help users navigate your pages.  
- **The content is unique**: When you're writing new content, don't copy others' content in part or in its entirety: create the content yourself based on what you know about the topic. Don't just rehash what others already published.  
- **The content is up-to-date**: Check in on previously published content and update it as needed, or even delete it if it's not relevant anymore.  
- **The content is helpful, reliable, and people-first:** Be sure that you're writing content that your readers will find helpful and reliable. For example, providing expert or experienced sources can help people understand your articles' expertise.

### Expect your readers' search terms

Think about the words that a user might search for to find a piece of your content. Users who know a lot about the topic might use different keywords in their search queries than someone who is new to the topic. For example, some users might search for "charcuterie", while others might search for "cheese board". Anticipating these differences in search behavior and writing with your readers in mind could produce positive effects on how your site performs in search results.

However, don't worry if you don't anticipate every variation of how someone might seek your content. Google's language matching systems are sophisticated and can understand how your page relates to many queries, even if you don't explicitly use the exact terms in them.

### Avoid distracting advertisements

While ads are a part of the internet and are meant to be seen by users, don't let them become overly distracting or prevent your users from reading your content. For example, advertisements, or interstitial pages (pages displayed before or after the content you're expecting) that make it difficult to use the website.

### Link to relevant resources

Links are a great way to connect your users and search engines to other parts of your site, or relevant pages on other sites. In fact, the vast majority of the new pages Google finds every day are through links, making links a crucial resource you need to consider to help your pages be discovered by Google and potentially shown in search results. Additionally, links can also add value by connecting users (and Google) to another resource that corroborates what you're writing about.

#### Write good link text

*Link text* (also known as *anchor text*) is the text part of a link that you can see. This text tells users and Google something about the page you're linking to. With appropriate anchor text, users and search engines can easily understand what your linked pages contain before they visit.

#### Link when you need to

Links can provide more context on a topic, both for users and search engines, which may help demonstrate your knowledge on a topic. However when you're linking to pages outside of your control, for example content on other sites, make sure you trust the resource you're linking to. If you can't trust the content and you still want to link to them, add a `nofollow` or similar annotation to the link to avoid search engines associating your site with the site you're linking to. This helps avoid potential negative consequences in your rankings in Google Search.

If you're accepting user-generated content on your site, such as forum posts or comments, make sure every link that's posted by users has a `nofollow` or similar annotation automatically added by your CMS. Since you're not creating the content in this case, you likely don't want your site to be blindly associated with the sites users are linking to. This can also help discourage spammers from abusing your website.

## Influence how your site looks in Google Search

A typical Google Search results page consists of a few different visual elements that you can influence to help users decide whether they should visit your site through those search results. In this section, we're focusing on the *title link* and the *snippet* because these are the more visually significant elements.

### Influence your title links

The *title link* is the headline part of the search result and it can help people decide which search result to click. There are a few sources that Google uses to generate this title link, including the words inside the `<title>` element (also called the title text) and other headings on the page. This title text can also be used for the title that's shown in browsers and bookmarks.

You can influence the title links in Search by writing good titles: a good title is unique to the page, clear and concise, and accurately describes the contents of the page. For example, your title could include the name of your website or business, other bits of important information like the physical location of the business, and maybe some information about what the particular page has to offer for users. Our documentation about title links has more tips about how to create good titles and how to influence your site's search results' title links.

### Control your snippets

Below the title link, a search result typically has a description of the target page to help users decide whether they should click the search result. This is called a *snippet*.

The snippet is sourced from the actual content of the page the search result is linking to, thus you have complete control over the words that can be used to generate the snippet. Occasionally the snippet may be sourced from the contents of the meta description tag, which is typically a succinct, one- or two-sentence summary of the page. A good meta description is short, unique to one particular page, and includes the most relevant points of the page. Check out our tips for writing good meta descriptions for more inspiration.

## Add images to your site, and optimize them

Many people search visually, and images can be how people find your website for the first time. For example, if you have a recipe blog, people might find your content by searching for "fruit tart recipes" and browsing photos of various types of fruit tarts.

As you add images to your site, make sure that people and search engines can find and understand them.

### Add high-quality images near relevant text

When you use high quality images, you give users enough context and detail to decide which image best matches what they were looking for. For example, if people are looking for "daisies" and come across a rogue edelweiss in search results, a higher quality image would help them distinguish the type of flower.

Use images that are sharp and clear, and place them near text that's relevant to the image. The text that's near images can help Google better understand what the image is about and what it means in context to your page.

For example, if the page is reviewing yarn shops in London, then it would make sense to embed one of your photos of the yarn shop in the section that details the location, description, and review information for that yarn shop. This helps Google and users associate the image with text that provides more context to what the page is about.

### Add descriptive alt text to the image

Alt text is a short, but descriptive piece of text that explains the relationship between the image and your content. It helps search engines understand what your image is about and the context of how your image relates to your page, so writing good alt text is quite important. You can add this to your HTML with the `alt` attribute of the `img` element, or your CMS may have an easy way to specify a description for an image when you're uploading it to your site. Learn more about how to write good alt text, and how to add it to your images.

## Optimize your videos

If your website includes pages that are primarily about individual videos, people may also be able to discover your site through video results in Google Search. Many of the best practices for images and text also apply to videos:

- Create high-quality video content, and embed the video on a standalone page, near text that's relevant to that video.  
- Write descriptive text in the titles and description fields of a video (the title of a video is still a title, and so you can apply the best practices for writing titles here too).

If your site is particularly video-focused, then continue reading about more things you can do to optimize your videos for search engines.

## Promote your website

Effectively promoting your new content will lead to faster discovery by those who are interested in the same subject, and also by search engines. You can do this in many ways:

- Social media promotion  
- Community engagement  
- Advertisement, both offline and online  
- Word of mouth, and many other methods

One of the most effective and lasting ways is word of mouth: that is, people familiar with your site tell their friends about it, who in turn visit your site. This can take time, and usually you need to invest some time and effort in other practices first, such as community engagement. Our friends over at Google for Creators have excellent resources about building and engaging your audience.

Putting effort into the offline promotion of your company or site can also be rewarding. For example, if you have a business site, make sure its URL is listed on your business cards, letterhead, posters, and other materials. With their permission, you could also send out recurring newsletters to your audience letting them know about new content on your website.

As with everything in life, you can overdo promoting your site and actually harm it: people may get fatigued of your promotions, and search engines may perceive some of the practices as manipulation of search results.

## Things we believe you shouldn't focus on

As SEO has evolved, so have the ideas and practices (and at times, misconceptions) related to it. What was considered best practice or top priority in the past may no longer be relevant or effective due to the way search engines (and the internet) have developed over time.

To help you focus on the things that are actually important when it comes to SEO, we collected some of the most common and prominent topics we've seen circulating the internet. In general, our message on these topics is that you should do what's best for your business area; we will elaborate on a few specific points here:

### Meta keywords

Google Search doesn't use the keywords meta tag.

### Keyword stuffing

Excessively repeating the same words over and over (even in variations) is tiring for users, and keyword stuffing is against Google's spam policies.

### Keywords in the domain name or URL path

When picking the name of your site, do what's best for your business. Users will use this name to find you, so we recommend following general marketing best practices. From a ranking perspective, the keywords in the name of the domain (or URL path) alone have hardly any effect beyond appearing in breadcrumbs.

And while still on the topic of domain names: the TLD (the domain name ending like ".com" or ".guru") only matters if you're targeting a specific country's users, and even then it's usually a low impact signal. For example, if you're trying to sell Dutch cheese to people searching from Switzerland, it makes some sense (both from business and SEO point of view) to use a .ch domain name. Otherwise Google Search doesn't care which TLD you're using (whether it's a .com or .org or .asia).

Minimum or maximum content length  
The length of the content alone doesn't matter for ranking purposes (there's no magical word count target, minimum or maximum, though you probably want to have at least one word). If you are varying the words (writing naturally to not be repetitive), you have more chances to show up in Search simply because you are using more keywords.

### Subdomains versus subdirectories

From a business point of view, do whatever makes sense for your business. For example, it might be easier to manage the site if it's segmented by subdirectories, but other times it might make sense to partition topics into subdomains, depending on your site's topic or industry.

### PageRank

While PageRank uses links and is one of the fundamental algorithms at Google, there's much more to Google Search than just links. We have many ranking signals, and PageRank is just one of those.  
Duplicate content "penalty"  
If you have some content that's accessible under multiple URLs, it's fine; don't fret about it. It's inefficient, but it's not something that will cause a manual action. Copying others' content, however, is a different story.

### Number and order of headings

Having your headings in semantic order is fantastic for screen readers, but from Google Search perspective, it doesn't matter if you're using them out of order. The web in general is not valid HTML, so Google Search can rarely depend on semantic meanings hidden in the HTML specification.

There's also no magical, ideal amount of headings a given page should have. However, if you think it's too much, then it probably is.

### Thinking E-E-A-T is a ranking factor

No, it's not.

# In-depth guide to how Google Search works

Google Search is a fully-automated search engine that uses software known as web crawlers that explore the web regularly to find pages to add to our index. In fact, the vast majority of pages listed in our results aren't manually submitted for inclusion, but are found and added automatically when our web crawlers explore the web. This document explains the stages of how Search works in the context of your website. Having this base knowledge can help you fix crawling issues, get your pages indexed, and learn how to optimize how your site appears in Google Search.

## A few notes before we get started

Before we get into the details of how Search works, it's important to note that Google doesn't accept payment to crawl a site more frequently, or rank it higher. If anyone tells you otherwise, they're wrong.

Google doesn't guarantee that it will crawl, index, or serve your page, even if your page follows the Google Search Essentials.

## Introducing the three stages of Google Search

Google Search works in three stages, and not all pages make it through each stage:

1. **Crawling:** Google downloads text, images, and videos from pages it found on the internet with automated programs called crawlers.  
2. **Indexing:** Google analyzes the text, images, and video files on the page, and stores the information in the Google index, which is a large database.  
3. **Serving search results:** When a user searches on Google, Google returns information that's relevant to the user's query.

## Crawling

The first stage is finding out what pages exist on the web. There isn't a central registry of all web pages, so Google must constantly look for new and updated pages and add them to its list of known pages. This process is called "URL discovery". Some pages are known because Google has already visited them. Other pages are discovered when Google extracts a link from a known page to a new page: for example, a hub page, such as a category page, links to a new blog post. Still other pages are discovered when you submit a list of pages (a sitemap) for Google to crawl.

Once Google discovers a page's URL, it may visit (or "crawl") the page to find out what's on it. We use a huge set of computers to crawl billions of pages on the web. The program that does the fetching is called Googlebot (also known as a crawler, robot, bot, or spider). Googlebot uses an algorithmic process to determine which sites to crawl, how often, and how many pages to fetch from each site. Google's crawlers are also programmed such that they try not to crawl the site too fast to avoid overloading it. This mechanism is based on the responses of the site (for example, HTTP 500 errors mean "slow down").

However, Googlebot doesn't crawl all the pages it discovered. Some pages may be disallowed for crawling by the site owner, other pages may not be accessible without logging in to the site.

During the crawl, Google renders the page and runs any JavaScript it finds using a recent version of Chrome, similar to how your browser renders pages you visit. Rendering is important because websites often rely on JavaScript to bring content to the page, and without rendering Google might not see that content.

Crawling depends on whether Google's crawlers can access the site. Some common issues with Googlebot accessing sites include:

- Problems with the server handling the site  
- Network issues  
- robots.txt rules preventing Googlebot's access to the page

## Indexing

After a page is crawled, Google tries to understand what the page is about. This stage is called indexing and it includes processing and analyzing the textual content and key content tags and attributes, such as `<title>` elements and alt attributes, images, videos, and more.

During the indexing process, Google determines if a page is a duplicate of another page on the internet or canonical. The canonical is the page that may be shown in search results. To select the canonical, we first group together (also known as clustering) the pages that we found on the internet that have similar content, and then we select the one that's most representative of the group. The other pages in the group are alternate versions that may be served in different contexts, like if the user is searching from a mobile device or they're looking for a very specific page from that cluster.

Google also collects signals about the canonical page and its contents, which may be used in the next stage, where we serve the page in search results. Some signals include the language of the page, the country the content is local to, and the usability of the page.

The collected information about the canonical page and its cluster may be stored in the Google index, a large database hosted on thousands of computers. Indexing isn't guaranteed; not every page that Google processes will be indexed.

Indexing also depends on the content of the page and its metadata. Some common indexing issues can include:

- The quality of the content on page is low  
- Robots `meta` rules disallow indexing  
- The design of the website might make indexing difficult

## Serving search results

When a user enters a query, our machines search the index for matching pages and return the results we believe are the highest quality and most relevant to the user's query. Relevancy is determined by hundreds of factors, which could include information such as the user's location, language, and device (desktop or phone). For example, searching for "bicycle repair shops" would show different results to a user in Paris than it would to a user in Hong Kong.

Based on the user's query the search features that appear on the search results page also change. For example, searching for "bicycle repair shops" will likely show local results and no image results, however searching for "modern bicycle" is more likely to show image results, but not local results. You can explore the most common UI elements of Google web search in our Visual Element gallery.

Search Console might tell you that a page is indexed, but you don't see it in search results. This might be because:

- The content on the page is irrelevant to users' queries  
- The quality of the content is low  
- Robots `meta` rules prevent serving

While this guide explains how Search works, we are always working on improving our algorithms. You can keep track of these changes by following the Google Search Central blog.

# Creating helpful, reliable, people-first content

Google's automated ranking systems are designed to prioritize helpful, reliable information that's created to benefit people, and not content that's created to manipulate search engine rankings. This page is designed to help creators evaluate if they're producing such content.

## Self-assess your content

Evaluating your own content against these questions can help you gauge if the content you're making is helpful and reliable. Beyond asking yourself these questions, consider having others you trust but who are unaffiliated with your site provide an honest assessment.

Also consider an audit of the drops you may have experienced. What pages were most impacted and for what types of searches? Look closely at these to understand how they're assessed against some of the questions outlined here.

### Content and quality questions

- Does the content provide original information, reporting, research, or analysis?  
- Does the content provide a substantial, complete, or comprehensive description of the topic?  
- Does the content provide insightful analysis or interesting information that is beyond the obvious?  
- If the content draws on other sources, does it avoid simply copying or rewriting those sources, and instead provide substantial additional value and originality?  
- Does the main heading or page title provide a descriptive, helpful summary of the content?  
- Does the main heading or page title avoid exaggerating or being shocking in nature?  
- Is this the sort of page you'd want to bookmark, share with a friend, or recommend?  
- Would you expect to see this content in or referenced by a printed magazine, encyclopedia, or book?  
- Does the content provide substantial value when compared to other pages in search results?  
- Does the content have any spelling or stylistic issues?  
- Is the content produced well, or does it appear sloppy or hastily produced?  
- Is the content mass-produced by or outsourced to a large number of creators, or spread across a large network of sites, so that individual pages or sites don't get as much attention or care?

### Expertise questions

- Does the content present information in a way that makes you want to trust it, such as clear sourcing, evidence of the expertise involved, background about the author or the site that publishes it, such as through links to an author page or a site's About page?  
- If someone researched the site producing the content, would they come away with an impression that it is well-trusted or widely-recognized as an authority on its topic?  
- Is this content written or reviewed by an expert or enthusiast who demonstrably knows the topic well?  
- Does the content have any easily-verified factual errors?

## Provide a great page experience

Google's core ranking systems look to reward content that provides a good page experience. Site owners seeking to be successful with our systems should not focus on only one or two aspects of page experience. Instead, check if you're providing an overall great page experience across many aspects. For more advice, see our page, Understanding page experience in Google Search results.

## Focus on people-first content

People-first content means content that's created primarily for people, and not to manipulate search engine rankings. How can you evaluate if you're creating people-first content? Answering yes to the questions below means you're probably on the right track with a people-first approach:

- Do you have an existing or intended audience for your business or site that would find the content useful if they came directly to you?  
- Does your content clearly demonstrate first-hand expertise and a depth of knowledge (for example, expertise that comes from having actually used a product or service, or visiting a place)?  
- Does your site have a primary purpose or focus?  
- After reading your content, will someone leave feeling they've learned enough about a topic to help achieve their goal?  
- Will someone reading your content leave feeling like they've had a satisfying experience?

## Avoid creating search engine-first content

We recommend that you focus on creating people-first content to be successful with Google Search, rather than search engine-first content made primarily to gain search engine rankings. Answering yes to some or all of the questions below is a warning sign that you should reevaluate how you're creating content:

- Is the content primarily made to attract visits from search engines?  
- Are you producing lots of content on many different topics in hopes that some of it might perform well in search results?  
- Are you using extensive automation to produce content on many topics?  
- Are you mainly summarizing what others have to say without adding much value?  
- Are you writing about things simply because they seem trending and not because you'd write about them otherwise for your existing audience?  
- Does your content leave readers feeling like they need to search again to get better information from other sources?  
- Are you writing to a particular word count because you've heard or read that Google has a preferred word count? (No, we don't.)  
- Did you decide to enter some niche topic area without any real expertise, but instead mainly because you thought you'd get search traffic?  
- Does your content promise to answer a question that actually has no answer, such as suggesting there's a release date for a product, movie, or TV show when one isn't confirmed?  
- Are you changing the date of pages to make them seem fresh when the content has not substantially changed?  
- Are you adding a lot of new content or removing a lot of older content primarily because you believe it will help your search rankings overall by somehow making your site seem "fresh?" (No, it won't)

### What about SEO? Isn't that search engine-first?

There are some things you could do that are specifically meant to help search engines better discover and understand your content. Collectively, this is called "search engine optimization" or SEO, for short. Google's own SEO guide covers best practices to consider. SEO can be a helpful activity when it is applied to people-first content, rather than search engine-first content.

## Get to know E-E-A-T and the quality rater guidelines

Google's automated systems are designed to use many different factors to rank great content. After identifying relevant content, our systems aim to prioritize those that seem most helpful. To do this, they identify a mix of factors that can help determine which content demonstrates aspects of experience, expertise, authoritativeness, and trustworthiness, or what we call E-E-A-T.

Of these aspects, trust is most important. The others contribute to trust, but content doesn't necessarily have to demonstrate all of them. For example, some content might be helpful based on the experience it demonstrates, while other content might be helpful because of the expertise it shares.

While E-E-A-T itself isn't a specific ranking factor, using a mix of factors that can identify content with good E-E-A-T is useful. For example, our systems give even more weight to content that aligns with strong E-E-A-T for topics that could significantly impact the health, financial stability, or safety of people, or the welfare or well-being of society. We call these "Your Money or Your Life" topics, or YMYL for short.

Search quality raters are people who give us insights on if our algorithms seem to be providing good results, a way to help confirm our changes are working well. In particular, raters are trained to understand if content has strong E-E-A-T. The criteria they use to do this is outlined in our search quality rater guidelines.

Reading the guidelines may help you self-assess how your content is doing from an E-E-A-T perspective, improvements to consider, and help align it conceptually with the different signals that our automated systems use to rank content.

Beyond E-E-A-T, the Search Quality Evaluator Guidelines emphasize that one of the most critical factors for assessing page quality is the quality of the main content, specifically how effectively it allows the page to achieve its purpose and provide a satisfying user experience.

## Main content

Google Search defines "main content" as any part of the web page that directly helps the page achieve its purpose. Depending on the primary intent of the page, the main content directly fulfills the page's purpose and could include: \- **Primary text and media:** The main text, articles, images, audio, or video files on the page.

- **Interactive features:** Built-in functionality such as calculators, online tools, games, or search functionality.  
- **User-generated contributions:** Forum discussions, customer reviews, comments, or user-uploaded media when they directly fulfill the page's purpose (for example, when the page is about discussing a particular user question).  
- **Tabbed or expanded sections:** Information housed behind interactive tabs (such as product specifications, safety notes, or user reviews).  
- **Page titles and headings:** The visible title and headings throughout a page that summarize its topic and helps users make informed decisions about visiting.

When reviewing content quality, Search Quality raters are trained to evaluate these fundamental attributes of the main content:

- **Effort:** The extent to which human work went into creating the content or the systems powering it. For example, writing original analysis, translating a poem manually, or building a custom interactive map for a game represents high effort. Conversely, automatically generating pages from feeds or using generative AI to produce large amounts of text without manual oversight or curation represents little to no effort. Attribution or giving credit to other sources doesn't replace the need for original effort.  
- **Originality:** The extent to which the content offers unique, original information or perspectives that aren't already available on other websites.  
- **Talent or skill:** Whether the content shows the talent, skill, or expertise necessary to provide a satisfying experience for visitors (such as clear writing, well-produced video, or functional page tools). Keep in mind that not all content requires specialized expertise. For example, a person sharing their experience about finding a new way to clear their driveway of snow generally doesn't necessarily require specialized expertise.  
- **Accuracy:** For informational pages, the content should be factually accurate. For topics that could significantly impact people's lives or well-being (YMYL topics), the content must be highly accurate and consistent with established expert consensus.

## Ask "Who, How, and Why" about your content

Consider evaluating your content in terms of "Who, How, and Why" as a way to stay on course with what our systems seek to reward.

### Who (created the content)

Something that helps people intuitively understand the E-E-A-T of content is when it's clear who created it. That's the **"Who"** to consider. When creating content, here are some who-related questions to ask yourself:

- Is it self-evident to your visitors who authored your content?  
- Do pages carry a byline, where one might be expected?  
- Do bylines lead to further information about the author or authors involved, giving background about them and the areas they write about?

If you're clearly indicating who created the content, you're likely aligned with the concepts of E-E-A-T and on a path to success. We strongly encourage adding accurate authorship information, such as bylines to content where readers might expect it.

However, avoid using deceptive authorship information. Fabricating creator profiles (such as by using AI-generated headshots, made-up names, or false credentials to make content appear as if it was written by human experts) is a form of deception. Any form of deception makes a page untrustworthy to both users and our automated quality systems, and is a signal of a low-quality page.

### How (the content was created)

It's helpful to readers to know how a piece of content was produced: this is the **"How"** to consider including in your content.

For example, with product reviews, it can build trust with readers when they understand the number of products that were tested, what the test results were, and how the tests were conducted, all accompanied by evidence of the work involved, such as photographs. It's advice we share more about in our Write high quality product reviews help page.

Many types of content may have a "How" component to them. That can include automated, AI-generated, and AI-assisted content. Sharing details about the processes involved can help readers and visitors better understand any unique and useful role automation may have served.

If automation is used to substantially generate content, here are some questions to ask yourself:

- Is the use of automation, including AI-generation, self-evident to visitors through disclosures or in other ways?  
- Are you providing background about how automation or AI-generation was used to create content?  
- Are you explaining why automation or AI was seen as useful to produce content?

Overall, AI or automation disclosures are useful for content where someone might think "How was this created?" Consider adding these when it would be reasonably expected. For more, see our blog post and FAQ: How Google Search views AI-generated content.

### Why (was the content created)

**"Why"** is perhaps the most important question to answer about your content. Why is it being created in the first place?

The "why" should be that you're creating content primarily to help people, content that is useful to visitors if they come to your site directly. If you're doing this, you're aligning with E-E-A-T generally and what our core ranking systems seek to reward.

If the "why" is that you're primarily making content to attract search engine visits, that's not aligned with what our systems seek to reward. If you use automation, including AI-generation, to produce content for the primary purpose of manipulating search rankings, that's a violation of our spam policies.

# Optimizing your website for generative AI features on Google Search

User preferences are rapidly evolving and people are increasingly gravitating to generative AI experiences to help them find information. As we upgrade Search to meet these changing expectations, this transformation offers new opportunities to reach people who may be more inclined to engage with your site, spend more time with your content, or even convert by becoming a subscriber or making a purchase. This guide is for website owners looking for official best practices from Google Search on how to succeed in generative AI features in Google Search (such as AI Overviews and AI Mode).

## Is SEO still relevant for generative AI search?

In short, yes\! The best practices for SEO continue to be relevant because our generative AI features on Google Search are rooted in our core Search ranking and quality systems. These features rely on AI techniques to highlight content from our Search index, such as:

- **Retrieval-augmented generation (RAG)**: A technique (also known as grounding) used to improve the quality, accuracy, and freshness of AI responses by relying on our core Search ranking systems to retrieve relevant, up-to-date web pages from our Search index. Our systems then review the specific information from those retrieved pages to generate a more reliable and helpful response, showing prominent, clickable links to relevant web pages that support the information in the response.  
- **Query fan-out**: A set of concurrent, related queries generated by the model to request more information and fetch additional relevant search results to address the user's query. For example, if the original user's query is "how to fix a lawn that's full of weeds", fanout queries might include "best herbicides for lawns", "remove weeds without chemicals", and "how to prevent weeds in lawn".

## Apply foundational SEO best practices to generative AI search

This section focuses on reframing SEO best practices to understand what matters most to AI systems today and how you can implement them in the context of generative AI search, and ultimately with the goal of improving your website's visibility in both generative AI search experiences and Google Search overall.

### Create valuable, non-commodity content for your audience

Creating content that people find unique, compelling, and useful will likely influence your website's presence in generative AI search in the long run more than any of the other suggestions in this guide. While "unique, valuable, good content" can mean different things to different people, content like this generally shares some common attributes, such as:

- **Providing a unique point of view**: Our AI systems take a look at a variety of sources, so it can be helpful to have a unique viewpoint that stands out. For example, a first-hand review provides a unique perspective based on personal experience, whereas a summary of existing content simply restates information already available elsewhere. Create the content yourself based on what you know about the topic, and consider what in-depth experience you can bring to your content. Don't just recycle what others on the internet have already said, or could easily be produced by a generative AI model.  
- **Creating non-commodity content that's helpful, reliable, and people-first:** Be sure that you're writing non-commodity content that your readers will find helpful and reliable. Commodity content (for example, something like "7 Tips for First-Time Homebuyers") is often based on common knowledge, which could originate from anyone, and typically adds little unique insight for readers. In contrast, non-commodity content (such as "Why We Waived the Inspection & Saved Money: A Look Inside the Sewer Line") provides unique expert or experienced takes that go beyond common knowledge and the ordinary.  
- **Organizing content in a way that helps your readers**: Write content for your human audience and make sure the content is well written and easy to follow. People generally appreciate it when web pages are organized by paragraphs and sections, along with headings that provide a clear structure to navigate content.  
- **Add high-quality images and video**: Many people appreciate finding images and videos as they search for things online. As with Google Search overall, our generative AI search features can bring in relevant images and video, which means more opportunities for your website to appear beyond web page links. When it makes sense, look for ways to support your textual content with high-quality, relevant images and videos on your pages. If you're already following our image SEO best practices and video SEO documentation, you're already optimizing for generative AI search.  
- **Focus on what your users want, and avoid overdoing it.** While it might be tempting to create separate content for every possible variation of how people might search (for example, by focusing on other queries that people have asked, or fan-out queries), doing so primarily to manipulate rankings or generative AI responses in Google Search violates Google's scaled content abuse spam policy. This is also an ineffective long-term strategy, as a high quantity of pages doesn't make a website higher quality or more relevant to users. Google's AI systems have advanced even further and improved upon our ability to understand the relevance of pages, even when there is no exact match between the query and the page's primary content.  
- **If you're using generative AI tools to assist in content creation**, be sure that your work meets the standards of the Search Essentials and our spam policies. For more details on our approach, see our guidance on AI-generated content.

You can simplify your approach by focusing on one core principle: focus on what your visitors would enjoy, find helpful, and feel satisfied with after visiting your website. If you're ever unsure about a decision for your site, ask yourself: "Is this content that my visitors would find satisfying?" If the answer is yes, then you're on the right track, as our systems are designed to connect people with exactly that kind of useful information. For more, check out our guide to creating helpful, reliable, people-first content.

### Build and maintain a clear technical structure

The way Google Search finds and processes your pages remains the core of how our AI systems access your data. Technical clarity ensures your content is ready for discovery and indexing, and all existing technical SEO best practices continue to be worthwhile, for example:

- **Meet the Search technical requirements:** To be eligible to be shown in generative AI features on Google Search, a page must be indexed and eligible to be shown in Google Search with a snippet, fulfilling the Search technical requirements.  In addition to the technical requirements for Search, a site must be included in Search generative AI features in Search Console to be eligible for display in generative AI features on Google Search.  
- **Follow crawling best practices**. To maximize your site's visibility in generative AI search features, ensure your content is crawlable, as Google Search generative AI models use publicly accessible, crawlable content to learn patterns and provide relevant, grounded responses. For very large and frequently updated sites, review our guide to optimizing your crawl budget.  
- **When it comes to semantic HTML, focus on human readability and don't worry about perfect code:** While it's not required to have perfectly semantic HTML (the web in general is not valid HTML, and Google can understand it), it's generally a good idea to try to use semantic HTML when possible, as it helps other types of users, such as screen readers, parse and navigate your web page more easily.  
- **If you're using JavaScript, be sure to follow JavaScript SEO best practices**. Google is able to process content within JavaScript as long as it isn't blocked. That said, working on SEO with a website that uses JavaScript frameworks is generally more complex than when working with other kinds of websites. Make sure to follow the usual SEO best practices for JavaScript.  
- **Provide a good page experience** for those who arrive at your site. This includes ensuring your site displays well across all devices, reducing latency, and making it easy for people to distinguish your main content from other elements on the page.  
- **Reduce duplicate content:** Having duplicate content can be a bad user experience and search engines might waste crawling resources on URLs that you don't even care about. If you have time, try to reduce it.

To discover and diagnose potential technical issues quickly, verify your site in Search Console. For more, check out our technical guide to SEO and maintaining your website's SEO.

### Optimize your local business and ecommerce details

Where appropriate, generative AI responses can include product listings, product information, and information about local businesses. Using products like Merchant Center (such as Merchant Center feeds) and Google Business Profiles can help your products and services to be visible in both AI responses and other Google Search results. Learn more about how to add and manage your business details on Google Search.

## Mythbusting generative AI search: what you don't need to do

As generative AI search evolves, so have the theories and practices—and sometimes, the misconceptions—surrounding it. While terms like Answer Engine Optimization (AEO) or Generative Engine Optimization (GEO) are common online, many suggested "hacks" aren't effective or supported by how Google Search actually works.

To help you focus on what matters for your website's visibility, we've collected some of the most prominent topics circulating the internet around generative AI and Google Search. Here are a few things you can ignore for Google Search:

- **LLMS.txt files and other "special" markup**: You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them. Note that Google may discover, crawl, and index many kinds of files in addition to HTML on a website: this doesn't mean that the file is treated in a special way.  
- **"Chunking" content:** There's no requirement to break your content into tiny pieces for AI to better understand it. Google systems are able to understand the nuance of multiple topics on a page and show the relevant piece to users. However, sometimes shorter (or longer\!) pages can work well depending on your audience and subject matter. There's no ideal page length, and in the end, make pages for your audience, not just for generative AI search.  
- **Rewriting content just for AI systems:** You don't need to write in a specific way just for generative AI search. AI systems can understand synonyms and general meanings of what someone is seeking, in order to connect them with content that might not use the same precise words. This means you don't have to worry that you don't have enough "long-tail" keywords or haven't captured every variation of how someone might seek content like yours.  
- **Seeking inauthentic "mentions":** Just like the rest of Google Search, our generative AI features can show what's being said about products and services across the web, including in blogs, videos, and forum discussions. However, seeking inauthentic "mentions" across the web isn't as helpful as it might seem. Our core ranking systems focus on high-quality content while other systems block spam; our generative AI features depend on both.  
- **Overfocusing on structured data**: Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add. However, it's a good idea to continue using it as part of your overall SEO strategy, as it helps with being eligible for rich results on Google Search.

## Measure visibility in generative AI features with Search Console

To measure how your content is performing in generative AI features on Google Search and Discover, use the Generative AI performance report in Search Console. This can help you get an idea of how people are discovering your content through generative AI features on Google Search.

## Explore agentic experiences

AI agents are autonomous systems that can perform tasks on behalf of people, such as booking a reservation or comparing product specifications. These agents can take many forms; for example, browser agents may access your website to gather the data they need to complete these tasks, such as analyzing visual renderings (like screenshots), inspecting the DOM structure, and interpreting the accessibility tree.

If this is something that's relevant to your business and you have extra time, check out the available agentic experiences and review the guide to agent-friendly website best practices, which gives some insights into how a website can generally prepare for current browser agents. Protocols like Universal Commerce Protocol (UCP) are emerging that will allow Search agents to do more.

# Google Search's guidance on using generative AI content on your website

Generative AI can be particularly useful when researching a topic, and to add structure to original content. However, using generative AI tools or other similar tools to generate many pages without adding value for users may violate Google's spam policy on scaled content abuse. If you're using generative AI content on your website, **make sure your work meets the standards of the Search Essentials and our spam policies.**

You might find value in looking at the Search Quality Raters guidelines on how to evaluate both scaled content abuse (section 4.6.5) and main content created with little to no effort, little to no originality, and little to no added value (section 4.6.6). These guidelines are not a guide to ranking first in Google; they're used by our search raters to help evaluate the performance of our various search ranking systems, and their ratings don't directly influence ranking.

### Focus on accuracy, quality, and relevance

When creating content for the web, focus on accuracy, quality, and relevance, especially when automatically generating the content. Keep in mind that generative models don't retrieve facts, but predict a likely sequence of words based on their training data. Because of this, generative AI outputs may contain inaccuracies (also known as hallucinations). It is critical to manually factcheck and review all AI-generated content for accuracy and trustworthiness before publishing. This review also applies to metadata like `<title>` elements, meta description elements, structured data, and alternate texts for images, which can appear in Search results.

For structured data, also ensure compliance with the general guidelines, the specific policies for the individual search features, and validate the markup to ensure eligibility for Search features.

### Give users context

Sharing information about how a piece of content was created can help give your readers more context. If you're automatically generating content, consider adding information on how your content was created in a way that makes sense for your audience, such as by providing more background information on how automation was used and adding image metadata.

For ecommerce sites, Google Merchant Center has policies for AI-generated content. In particular, AI-generated images must contain metadata using the IPTC `DigitalSourceType` `TrainedAlgorithmicMedia` metadata. AI-generated product data such as title and description attributes must be specified separately and labeled as AI-generated.

# Maintaining your website's SEO

If your site is on Google and you're familiar with the fundamentals of SEO, there are more things you can do to improve how your site appears on Google. As you manage and maintain your website, you may come across more unique scenarios that affect Google Search. This guide covers more in-depth SEO tasks, such as preparing for a site move or managing a multi-lingual site.

## Control how Google crawls and indexes your site

Read our guide to understand how Google Search works; if you don't understand the crawl/index/serving pipeline well, it will be difficult to debug issues or anticipate Search behavior on your site.

### Duplicate content

Be sure that you understand what canonical pages are, and how they affect crawling and indexing of your site.

### Resources

Be sure that any resources (images, CSS files, and so on) or pages that Google is meant to crawl are accessible to Google; that is, they are not blocked by any robots.txt rules and are accessible to an anonymous user. Inaccessible pages will not appear in the Page Indexing report, and the URL Inspection tool will show them as not crawled. Blocked resources are shown only at the individual URL level, in the URL Inspection tool. If important resources on a page are blocked, this can prevent Google from crawling your page properly. Use the URL Inspection tool to render the live page to verify whether Google sees the page as you expect.

### Robots.txt

Use robots.txt rules to prevent crawling, and sitemaps to encourage crawling. Block crawling of duplicate content on your site, or unimportant resources (such as small, frequently used graphics such as icons or logos) that might overload your server with requests. Don't use robots.txt as a mechanism to prevent indexing; use the `noindex` tag or login requirements for that. Read more about blocking access to your content.

### Sitemaps

Sitemaps are a very important way to tell Google which pages are important to your site, and also provide additional information (such as update frequency), and are very important for crawling non-textual content (such as images or video). Although Google won't limit crawling to pages listed in your sitemaps, it will prioritize crawling these pages. This is especially important for sites with rapidly changing content, or with pages that might not be discovered through links. Using sitemaps helps Google discover and prioritize which pages to crawl on your site. Read all about sitemaps here.

### Internationalized or multi-lingual sites

If your site includes multiple languages, or is targeted at users in specific locales:

- Read about multi-regional and multi-lingual sites for high-level advice on how to manage sites that have localized content for different languages or regions.  
- Use hreflang to tell Google about different language variations of pages on your site.  
- If your site adapts the content of its pages based on the locale of the request, read how this can affect Google's crawl of your site.

### Migrating a page or a site

On the occasion that you might need to move a single URL or even a whole site, follow these guidelines:

#### Migrating a single URL

If you move a page permanently to another location, don't forget to implement `301` redirects for your page. If the move is only temporary for some reason, return `302` instead to tell Google to continue to crawl your page.

When a user requests a page that has been removed, you can create a custom `404` page to provide a better experience. Just be sure that when a user requests a page that is no longer there, you return a true `404` error, not a `soft 404`.

#### Migrating a site

If you're migrating an entire site, implement all the `301` and sitemap changes you need, then tell Google about the move so that we can start crawling the new site and forwarding your signals to the new site. Learn how to migrate your site.

### Follow crawling and indexing best practices

- **Make your links crawlable.**  
- **Use `rel=nofollow` for paid links**, links that require login, or untrusted content (such as user-submitted content) to avoid passing your quality signals on to them, or having their bad quality reflect on you.  
- **Managing your crawl budget**: If your site is particularly large (hundreds of millions of pages that change periodically, or perhaps tens of millions of pages that change frequently), Google might not be able to crawl your entire site as often as you'd like, so you might need to point Google to the most important pages on your site. The best mechanism for doing so at present is to list your most recently updated or most important pages in your sitemaps, and hiding your less important pages using robots.txt rules.  
- **JavaScript usage**: Follow Google's recommendations for JavaScript on websites.  
- **Multi-page articles**: If you have an article broken into several pages, be sure that there are prominent next and previous links for users to click (and that these are crawlable links). That's all you need for the page set to be crawled by Google.  
- **Infinite scroll pages**: Google can have trouble scrolling through infinite scroll pages; provide a paginated version if you want the page to be crawled. Learn more about search-friendly infinite scroll pages.  
- **Block access to URLs that change state,** such as posting comments, creating accounts, adding items to a cart, and so on. Use robots.txt to block these URLs.  
- Review the list of which file types are indexable by Google.  
- In the unlikely situation that **Google seems to be crawling your site too much**, you can reduce the crawl rate for your site. However, this should be a rare occurrence.  
- If your site is still HTTP, we recommend migrating to HTTPS, for your users' security, as well as your own.

## Help Google understand your site

Put key information in text, not graphics, on the site. Although Google can parse and index many file types, text is still the safest bet to help us understand the content of the page. If you use non-text content, or if you want to provide additional guidance about the content of the site, add structured data to your pages to help us understand your content (and in some cases, provide special search features such as rich results).

If you feel comfortable with HTML and basic coding, you can add structured data by hand following the developer guidelines. If you want a little help, you can use the WYSIWYG Structured Data Markup helper to help you generate basic structured data for you.

If you don't have the ability to add structured data to your pages, you might use the Data Highlighter tool, which lets you highlight portions of a page and tell Google what each section represents (an event, a date, a price, and so on). This is simple, but it can break if you change the layout of your page.

Read more about helping Google understand your site content.

## Follow our guidelines

### Content-specific guidelines

If you have specific types of content on your site, here are some recommendations for getting them on Google in the best way:

- **Video**: Be sure to follow our video best practices to enable Google to find, crawl, and show results for videos hosted on your site.  
- **Images**: Follow our image best practices to get your images to appear in Search. You can show additional information about your image in Google Images by providing image metadata on the image host page. To block an image from being indexed, use a robots.txt `Disallow` rule.  
- **For children:** If your content is specifically for children, tag your pages or site as child-directed in order to comply with the Children's Online Privacy Protection Act (COPPA).  
- **Adult sites**: If your site (or specific pages) contain adult-only content, you might consider tagging it as adult content, which will filter it in SafeSearch results.  
- **News:** If you run a news site, here are some important considerations:  
  - If you have news content, be sure to read the Google Publisher Center help documentation.  
  - In addition, create a News sitemap to help Google discover content more quickly.  
  - Be sure to prevent abuse on your site.  
  - If you want to provide a limited number of views to visitors without a subscription or login, read about flexible sampling to learn some best practices about providing limited access to your content.  
  - See how to indicate subscription and paywalled content on your site to Google while still enabling crawling.  
  - See how to use `meta` tags to limit text or image use when generating search result snippets.  
  - Consider using AMP or Web Stories for fast-loading content.  
- **Other sites** (for example, sites about businesses, books, apps, scholarly works): See other Google services where you can post your information.  
- See if Google supports a Search feature specific for your content type. Google supports specialized Search features for recipes, events, job posting sites, and more.

## Manage the user experience

Providing a good user experience should be your site's top goal, and a good user experience is a ranking factor. There are many elements to providing a good user experience; here are a few of them.

Google recommends that websites use HTTPS, rather than HTTP, to improve user and site security. Sites that use HTTP can be marked as "not secure" in the Chrome browser. Learn how to secure your site with HTTPS.

A fast page usually beats a slow page in user satisfaction. You can use the Core Web Vitals report to see your site-wide performance numbers, or PageSpeed Insights to test performance for individual pages. You can learn more about building fast pages on the web.dev site. Also consider using AMP for fast pages.

### Mobile considerations

With over 60 percent of the global internet population using a mobile device to go online, it's important that your site be mobile-friendly. Google now uses a mobile crawler as the default crawler for websites. Read about how to make your site mobile friendly.

## Control your search appearance

Google provides many kinds of search result features and experiences in Google Search, including review stars and special result types for specific types of information such as events or recipes. See which ones are appropriate for your site and consider implementing them. You can provide a favicon to show in search results for your site. You can also provide an article date to appear in search results.

Be sure to read the articles on how to help Google provide good titles links and snippets. You can also restrict the snippet length, or omit it entirely if you wish. See how to use `meta` tags to limit text or image use when generating search result snippets.

## Using Search Console

Search Console offers a broad range of reports to help you monitor and optimize your site performance on Google Search. Learn more about what reports to use.

# Get started with Search: a developer's guide

Making your content search-friendly matters because it's how you get more relevant users viewing your content. This is called search engine optimization (SEO), which can result in more interested users coming to your site. If Google Search has trouble understanding your page, you're possibly missing out on an important source of traffic.

This guide covers what developers can do to make sure that their sites work well with Google Search. In addition to the items in this guide, make sure that your site is secure, fast, accessible to all, and works on all devices.

## Find out how Google sees your site

To get started, test your site in the URL inspection tool or Rich Results Test to see how Google sees your site. Googlebot is Google's web crawling bot that discovers new and updated pages for the Google index. For more information about the process, go to How Google Search Works.

You may be surprised to find that Google doesn't always see everything that you see in the browser. In the following example, Google doesn't know there are images on this page because the page uses a JavaScript feature that isn't supported by Google.

User viewGoogle view     Here's how a user views the page. Users can view the images and text in the browser.   Here's how Google views the page. Google doesn't know there are images on this page because the page uses a JavaScript feature that isn't supported by Google.  \#\# Check your links

Googlebot navigates from URL to URL by fetching and parsing links, sitemaps, and redirects. Googlebot treats every URL as if it's the first and only URL it has seen from your site. To make sure that Googlebot can find all the URLs on your site:

- Use `<a>` elements that Google can crawl. Ensure that all pages on the site can be reached by a link from another findable page. Make sure the referring link includes either text or, for images, an alt attribute, that is relevant to the target page.  
- Build and submit a sitemap to help Googlebot more intelligently crawl your site. A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them.  
- For JavaScript apps that have only one HTML page, make sure that each screen or piece of individual content has a URL.

## Check how you're using JavaScript

While Google does run JavaScript, there are some differences and limitations that you need to account for when designing your pages and applications to accommodate how crawlers access and render your content. Learn more about the basics of JavaScript SEO or how to fix Search-related JavaScript problems.

To learn more about how Google handles JavaScript when crawling, rendering, and indexing, see the following video.

## Keep Google updated when content changes

To make sure that Google finds your new or updated pages quickly:

- Submit sitemaps.  
- Ask Google to recrawl your URLs.

If you're still having trouble getting your page indexed, check your server logs for errors.

## Don't forget about the words on the page

Googlebot can only find content that is textually visible. For example, text in videos is invisible to Googlebot. To make sure that Google Search understands what your page is about:

- **Make sure that your visual content is expressed in text form.** For example, a product category page that contains a list of images of shirts with no textual context about each image is suboptimal. The product category page should include some textual explanation for each image.  
- **Make sure that every page has a descriptive title and meta description**. Unique titles and meta descriptions help Google show how your pages are relevant to users, which in turn can increase your search traffic.  
- **Use semantic HTML**. While Google indexes HTML, PDF content, images, and videos, it doesn't index content that requires plugins (for example, Java or Silverlight) or content that is rendered in a canvas. Instead of using a plugin, use semantic HTML markup for your content whenever possible.  
- **Make sure your text content is accessible in the DOM.** For example, content that is added via the CSS `content` property is not part of the DOM and Google Search ignores it at the moment. It's fine to use the `content` property for decorative content; Google Search may not index this content.

## Tell Google about other versions of your content

Google doesn't automatically know that there are multiple versions of your site or content. For example, a mobile and desktop version, or international versions of your site. To make sure that Google serves the right version to users, you can:

- Consolidate duplicate URLs.  
- Tell Google about localized versions of your site.  
- Make your AMP pages discoverable.

## Control what content Google sees

There are several ways to block Googlebot:

- To block Google from finding your page, restrict access to your content to logged in users (for example, use a login page or password-protect your page).  
- To block Googlebot from crawling your page, create a robots.txt.  
- To block Google from indexing your page but still allow crawling, add a `noindex` tag.

If your content isn't showing up in Google Search and you want it to show up, follow these steps:

- Check if Googlebot can access the page with the URL inspection tool.  
- Test your robot.txt file to see if you're unintentionally blocking Googlebot from crawling your site.  
- Check your HTML for `noindex` rules in `meta` tags.

## Enable rich results for your site

A rich result can include styling, images, or other interactive features that can help your site stand out more in Search results. You can help Google understand your page better and show rich results for it in Search by providing explicit clues about the meaning of a page with structured data on the page. If you're not sure where to start, explore our gallery of available features.

# Do you need an SEO?

As with many business activities, sometimes hiring a professional can be helpful. Deciding to hire a company or person to do search engine optimization (SEO) for your website in Google Search is a big decision that can potentially improve your site's visibility and save you time, but you can also risk damage to your site and reputation. Make sure to research the potential advantages as well as the damage that an irresponsible SEO can do to your site. Many SEOs and other agencies and consultants provide useful services for website owners, including:

- Review of your site content or structure  
- Technical advice on website development: for example, hosting, redirects, error pages, use of JavaScript  
- Content development  
- Management of online business development campaigns  
- Keyword research  
- SEO training  
- Expertise in specific markets and geographies  
- Optimizing for generative AI

Advertising with Google won't have any effect on your site's presence in our search results. Google never accepts money to include or rank sites in our search results, and it costs nothing to appear in our organic search results. Resources such as Search Console, the official Google Search Central blog, and our discussion forum can provide you with a great deal of information about how to optimize your site for Google's non-advertising search results (often called "organic search").

## Deciding on whether you need an SEO

If you run a small local business, you can probably do much of the work yourself. We recommend starting with the SEO starter guide, as it's a practical guide to improving your site's SEO and it describes much of what your SEO will do for you. If you decide to hire a professional to do the work for you in the end, it's also useful to be familiar with these techniques so that you can be aware if an SEO wants to use a technique that's not recommended or, worse, strongly discouraged.

If you think that you still need extra help from a professional, continue reading about hiring an SEO.

## Things to consider when hiring an SEO

As with many business activities, sometimes hiring a professional can be helpful. For example, a great time to hire is when you're considering a site redesign (the earlier, the better), or planning to launch a new site. That way, you and your SEO can ensure that your site is designed to be search engine-friendly from the bottom up. However, a good SEO can also help improve an existing site.

Here are some things to consider if you're considering hiring someone to do SEO for your site:

- **Interview your potential SEO.** Some useful questions to ask an SEO include:  
  - Can you show me examples of your previous work and share some success stories?  
  - Do you follow the Google Search Essentials (previously known as Webmaster Guidelines)?  
  - What kind of results do you expect to see, and in what timeframe? How do you measure your success?  
  - What's your experience in my industry?  
  - What's your experience in my country/city?  
  - What's your experience developing international sites?  
  - How long have you been in business?  
  - How can I expect to communicate with you? Will you share with me all the changes you make to my site, and provide detailed information about your recommendations and the reasoning behind them?  
  - See if the SEO is interested in you and your business. If they're not interested, find someone who is. Your SEO should ask questions about what makes your business unique, who your competitors are, how search results can help, and how your customers find you.  
- **Check your SEO's business references.** Ask past clients if they felt that this SEO provided useful service, was easy to work with, and produced positive results.  
- **If your SEO offers to do an SEO audit for you, be sure to carefully consider what's involved and only grant read access to Search Console (at this stage, don't grant them write access).** An SEO audit should be about giving you realistic estimates of improvement, and an estimate of the work involved. If they guarantee you that their changes will give you first place in search results, find someone else.  
- **Evaluate your SEO's recommendations and tools they use.** Before making significant changes to your site based on a third-party tool's audit, be sure to check their recommendations against official guidance from Google Search, think critically about any claims or recommendations you hear, and make your own informed decisions.  
  - Do they cite official Google documentation as supporting evidence for their recommendations?  
  - If they have advice on optimizing for AI experiences (also known as "AEO" "GEO" services), is their advice aligned with Google Search's official guidance on optimizing for generative AI features?  
  - Do they use tools that are aligned with Google's guidance?  
- **Be wary of SEO firms and web consultants or agencies that email you out of the blue.** Amazingly, we get these spam emails too: *"Dear google.com, I visited your website and noticed that you are not listed in most of the major search engines and directories..."* Reserve the same skepticism for unsolicited email about search engines as you do for "burn fat at night" diet pills or requests to help transfer funds from deposed dictators.  
- **No one can guarantee a \#1 ranking on Google.** Beware of SEOs that claim to guarantee rankings, allege a "special relationship" with Google, or advertise a "priority submit" to Google.  
- **Be careful if a company is secretive or won't clearly explain what they intend to do.** Ask for explanations if something is unclear. If an SEO creates deceptive or misleading content on your behalf, your site could be removed entirely from Google's index. Ultimately, you are responsible for the actions of any companies you hire, so it's best to be sure you know exactly how they intend to "help" you. If an SEO has FTP access to your server, they should be willing to explain all the changes they are making to your site.  
- **You should never have to link to an SEO.** Avoid SEOs that talk about link popularity schemes or submitting your site to thousands of search engines. These are typically useless exercises that don't affect your ranking in the results of the major search engines—at least, not in a way you would likely consider to be positive.

# Google Search's guidance on using third-party SEO tools, services, and advice

If you're thinking about improving the SEO for your website, you might also be considering advice from third parties and using third-party SEO services and tools. This guide provides our recommendations for evaluating external SEO resources and tools to make sure they align with official Google Search guidance.

## Evaluate and verify external SEO advice against official Google guidelines

There's plenty of third-party SEO advice on the internet related to SEO, search listings, and AI experiences (sometimes called AEO for "answer engine optimization" or GEO for "generative engine optimization"). While some advice is helpful, others may misinterpret or make claims about what "Google says" or how Google ranking systems work. In general, good advice either qualifies their claims as opinion based on data or experience, or backs up their claims by citing official Google Search guidance.

We recommend carefully evaluating any advice you might be considering implementing against our official SEO guidance, including our guidance on optimizing for generative AI, and making your own informed decisions.

## Think critically about using third-party SEO tools and services

If you're planning to do SEO yourself, you may be considering third-party SEO services and tools, such as:

- Assisting in sitemap generation  
- Establishing indexing directives  
- Offering to generate "SEO-optimized" content for you  
- Providing advice they claim will improve the ranking of your existing content  
- Promising improvements for AI experiences and search formats (also known as "AEO" or "GEO" tools)

Some of these services may be helpful in your work, while others may make claims or imply that what they do is somehow "acceptable" or "approved" by Google Search. Google doesn't evaluate third-party services, so be wary of such claims and those making them. Keep in mind that using a service or tool doesn't guarantee ranking success.

Some third-party services provide data that some users of those tools misinterpret as somehow being from Google. Third-party tools don't have access to our internal ranking data. They can't guarantee performance. Any predictions are their own and like predictions generally, may not happen.

# File types indexable by Google

Google can index the content of most text-based files and certain encoded document formats. The file type is determined by the `Content-Type` HTTP header returned when Google crawls the file, though in some cases Google may use the file extension or re-parse the file using a different parser if the `Content-Type` header is missing or incorrect.

## Supported flat file types

The following flat file types are supported. These are files where the content is stored in plain, unencoded text (though they may use markup tags).

- Comma-Separated Values (.csv)  
- Google Earth (.kml, .kmz)  
- GPS eXchange Format (.gpx)  
- HTML (.htm, .html, other file extensions)  
- Scalable Vector Graphics (.svg)  
- TeX/LaTeX (.tex)  
- Text (.txt, .text, other file extensions), including source code in common programming languages, such as:  
  - Basic source code (.bas)  
  - C/C++ source code (.c, .cc, .cpp, .cxx, .h, .hpp)  
  - C\# source code (.cs)  
  - Java source code (.java)  
  - Perl source code (.pl)  
  - Python source code (.py)  
- Wireless Markup Language (.wml, .wap)  
- XML (.xml)

## Supported encoded file types

The following encoded file types are supported. These are binary files or complex containers that require a specific parser to extract the human-readable text.

- Adobe Portable Document Format (.pdf)  
- Adobe PostScript (.ps)  
- Electronic Publication (.epub)  
- Hancom Hanword (.hwp)  
- Microsoft Excel (.xls, .xlsx)  
- Microsoft PowerPoint (.ppt, .pptx)  
- Microsoft Word (.doc, .docx)  
- OpenOffice presentation (.odp)  
- OpenOffice spreadsheet (.ods)  
- OpenOffice text (.odt)  
- Rich Text Format (.rtf)

## Supported media formats

Google can also index the following media formats:

- Image formats: BMP, GIF, JPEG, PNG, WebP, SVG, and AVIF  
- Video formats: 3GP, 3G2, ASF, AVI, DivX, M2V, M3U, M3U8, M4V, MKV, MOV, MP4, MPEG, OGV, QVT, RAM, RM, VOB, WebM, WMV, and XAP

## Search by file type

You can use the `filetype:` operator in Google Search to limit results to a specific file type or file extension. For example, `filetype:rtf galway` will search for RTF files and URLs ending in `.rtf` whose content contains the term "galway".

# URL structure best practices for Google Search

To make sure Google Search can crawl your site effectively, use a crawlable URL structure that meets the following requirements. If your URLs don't meet the following criteria, Google Search will likely crawl your site inefficiently — including but not limited to extremely high crawl rates, or not at all.

| Requirements for a crawlable URL structure |  |
| :---- | :---- |
| Follow IETF STD 66 | Google Search supports URLs as defined by IETF STD 66\. Characters defined by the standard as reserved must be percent encoded. |
| Don't use URL fragments to change content | Don't use fragments to change the content of a page, as Google Search generally doesn't support URL fragments. Here's an example of a URL fragment:  [https\://example.com/\#/potatoes](https://example.com/#/potatoes)  If you're using JavaScript to change content, use the History API instead. |
| Use a common encoding for URL parameters | When specifying URL parameters, use the following common encoding: an equal sign (`=`) to separate key-value pairs and add additional parameters with an ampersand (`&`). To list multiple values for the same key within a key-value pair, you can use any character that doesn't conflict with IETF STD 66, such as a comma (`,`).     Recommended   Not recommended     Using an equal sign (`=`) to separate key-value pairs and an ampersand (`&`) to add additional parameters: [https\://example.com/category?category=dresses\&sort=low-to-high\&sid=789](https://example.com/category?category=dresses&sort=low-to-high&sid=789)   Using a colon (`:`) to separate key-value pairs and brackets (`[ ]`) to add additional parameters: [https\://example.com/category?\\\[category:dresses\\\]\\\[sort:price-low-to-high\\\]\\\[sid:789\\\]](https://example.com/category?\\[category:dresses\\]\\[sort:price-low-to-high\\]\\[sid:789\\])     Using a comma (`,`) to list multiple values for the same key, an equal sign (`=`) to separate key-value pairs, and an ampersand (`&`) to add additional parameters: [https\://example.com/category?category=dresses\&color=purple,pink,salmon\&sort=low-to-high\&sid=789](https://example.com/category?category=dresses&color=purple,pink,salmon&sort=low-to-high&sid=789)   Using a single comma (`,`) to separate key-value pairs and double commas (`,,`) to add additional parameters: [https\://example.com/category?category,dresses,,sort,lowtohigh,,sid,789](https://example.com/category?category,dresses,,sort,lowtohigh,,sid,789) |
| Recommended | Not recommended |
| Using an equal sign (`=`) to separate key-value pairs and an ampersand (`&`) to add additional parameters: [https\://example.com/category?category=dresses\&sort=low-to-high\&sid=789](https://example.com/category?category=dresses&sort=low-to-high&sid=789) | Using a colon (`:`) to separate key-value pairs and brackets (`[ ]`) to add additional parameters: [https\://example.com/category?\\\[category:dresses\\\]\\\[sort:price-low-to-high\\\]\\\[sid:789\\\]](https://example.com/category?\\[category:dresses\\]\\[sort:price-low-to-high\\]\\[sid:789\\]) |
| Using a comma (`,`) to list multiple values for the same key, an equal sign (`=`) to separate key-value pairs, and an ampersand (`&`) to add additional parameters: [https\://example.com/category?category=dresses\&color=purple,pink,salmon\&sort=low-to-high\&sid=789](https://example.com/category?category=dresses&color=purple,pink,salmon&sort=low-to-high&sid=789) | Using a single comma (`,`) to separate key-value pairs and double commas (`,,`) to add additional parameters: [https\://example.com/category?category,dresses,,sort,lowtohigh,,sid,789](https://example.com/category?category,dresses,,sort,lowtohigh,,sid,789) |

## Make it easy to understand your URL structure

To help Google Search (and your users) better understand your site, we recommend creating a simple URL structure, applying the following best practices when possible.

| Best practices |  |
| :---- | :---- |
| Use descriptive URLs | When possible, use readable words rather than long ID numbers in your URLs.    Recommended (simple, descriptive words)   Not recommended (unreadable, long ID numbers)     [https\://example.com/\*\*wiki/Aviation](https://example.com/**wiki/Aviation)\*\*   [https\://example.com/\*\*index.php?topic=42\&area=3a5ebc944f41daa6f849f730f1](https://example.com/**index.php?topic=42&area=3a5ebc944f41daa6f849f730f1)\*\* |
| Recommended (simple, descriptive words) | Not recommended (unreadable, long ID numbers) |
| [https\://example.com/\*\*wiki/Aviation](https://example.com/**wiki/Aviation)\*\* | [https\://example.com/\*\*index.php?topic=42\&area=3a5ebc944f41daa6f849f730f1](https://example.com/**index.php?topic=42&area=3a5ebc944f41daa6f849f730f1)\*\* |
| Use your audience's language | Use words in your audience's language in the URL (and, if applicable, transliterated words). For example, if your audience is searching in German, use German words in the URL:  [https\://example.com/\*\*lebensmittel/pfefferminz](https://example.com/**lebensmittel/pfefferminz)\*\*  Or if your audience is searching in Japanese, use Japanese words in the URL:  [https\://example.com/\*\*ペパーミント](https://example.com/**ペパーミント)\*\* |
| Use percent encoding as necessary | When linking to pages on your site, use percent encoding in your links's `href` attributes as necessary. Unreserved ASCII characters may be left in the non-encoded form. Additionally, characters in the non-ASCII range should be percent encoded. For example:    Recommended (percent encoding) Not recommended (non-ASCII characters)   [https\://example.com/\*\*%D9%86%D8%B9%D9%86%D8%A7%D8%B9/%D8%A8%D9%82%D8%A7%D9%84%D8%A9](https://example.com/**%D9%86%D8%B9%D9%86%D8%A7%D8%B9/%D8%A8%D9%82%D8%A7%D9%84%D8%A9)\*\*  [https\://example.com/\*\*نعناع](https://example.com/**نعناع)\*\*    [https\://example.com/\*\*%E6%9D%82%E8%B4%A7/%E8%96%84%E8%8D%B7](https://example.com/**%E6%9D%82%E8%B4%A7/%E8%96%84%E8%8D%B7)\*\*  [https\://example.com/\*\*杂货/薄荷](https://example.com/**杂货/薄荷)\*\*    [https\://example.com/\*\*gem%C3%BCse](https://example.com/**gem%C3%BCse)\*\*  [https\://example.com/\*\*gemüse](https://example.com/**gemüse)\*\*    [https\://example.com/\*\*%F0%9F%A6%99%E2%9C%A8](https://example.com/**%F0%9F%A6%99%E2%9C%A8)\*\*  [https\://example.com/\*\*🦙✨](https://example.com/**🦙✨)\*\* |
| Recommended (percent encoding) | Not recommended (non-ASCII characters) |
| [https\://example.com/\*\*%D9%86%D8%B9%D9%86%D8%A7%D8%B9/%D8%A8%D9%82%D8%A7%D9%84%D8%A9](https://example.com/**%D9%86%D8%B9%D9%86%D8%A7%D8%B9/%D8%A8%D9%82%D8%A7%D9%84%D8%A9)\*\* | [https\://example.com/\*\*نعناع](https://example.com/**نعناع)\*\* |
| [https\://example.com/\*\*%E6%9D%82%E8%B4%A7/%E8%96%84%E8%8D%B7](https://example.com/**%E6%9D%82%E8%B4%A7/%E8%96%84%E8%8D%B7)\*\* | [https\://example.com/\*\*杂货/薄荷](https://example.com/**杂货/薄荷)\*\* |
| [https\://example.com/\*\*gem%C3%BCse](https://example.com/**gem%C3%BCse)\*\* | [https\://example.com/\*\*gemüse](https://example.com/**gemüse)\*\* |
| [https\://example.com/\*\*%F0%9F%A6%99%E2%9C%A8](https://example.com/**%F0%9F%A6%99%E2%9C%A8)\*\* | [https\://example.com/\*\*🦙✨](https://example.com/**🦙✨)\*\* |
| Use hyphens to separate words | We recommend separating words in your URLs, when possible. Specifically, we recommend using hyphens (`-`) instead of underscores (`_`) to separate words in your URLs, as it helps users and search engines better identify concepts in the URL. For historical reasons, we don't recommend using underscores, as underscores are commonly used for denoting concepts that should be kept together, for example, by various programming languages to name functions (such as `format_date`), whereas hyphens clearly signal a word boundary.     Recommended   Not recommended     Using hyphens (`-`) to separate words: [https\://example.com/summer\*\*-\*\*clothing/filter?color\*\*-\*\*profile=dark\*\*-\*\*grey](https://example.com/summer**-**clothing/filter?color**-**profile=dark**-**grey)   Using underscores (`_`) to separate words: [https\://example.com/summer\*\*\\\_\*\*clothing/filter?color\*\*\\\_\*\*profile=dark\*\*\\\_\*\*grey](https://example.com/summer**\\_**clothing/filter?color**\\_**profile=dark**\\_**grey) Joining words together in the URL: [https\://example.com/\*\*greendress](https://example.com/**greendress)\*\* |
| Recommended | Not recommended |
| Using hyphens (`-`) to separate words: [https\://example.com/summer\*\*-\*\*clothing/filter?color\*\*-\*\*profile=dark\*\*-\*\*grey](https://example.com/summer**-**clothing/filter?color**-**profile=dark**-**grey) | Using underscores (`_`) to separate words: [https\://example.com/summer\*\*\\\_\*\*clothing/filter?color\*\*\\\_\*\*profile=dark\*\*\\\_\*\*grey](https://example.com/summer**\\_**clothing/filter?color**\\_**profile=dark**\\_**grey) Joining words together in the URL: [https\://example.com/\*\*greendress](https://example.com/**greendress)\*\* |
| Use as few parameters as you can | Whenever possible, shorten URLs by trimming unnecessary parameters (meaning, parameters that don't change the content). |
| Be aware that URLs are case sensitive | Like any other HTTP client following IETF STD 66, Google Search's URL handling is case sensitive (for example, Google treats both `/APPLE` and `/apple` as distinct URLs with their own content). If upper and lower case text in a URL is treated the same by your web server, convert all text to the same case so it's easier for Google to determine that URLs reference the same page. |
| For multi-regional sites | If your site is multi-regional, consider using a URL structure that makes it easy to geotarget your site. For more examples of how you can structure your URLs, refer to using locale-specific URLs.   Recommended (using a country-specific domain):  [https\://example.de](https://example.de)  Recommended (using a country-specific subdirectory with gTLD):  [https\://example.com/de/](https://example.com/de/) |

## Avoid common issues related to URLs

Overly complex URLs, especially those containing multiple parameters, can cause problems for crawlers by creating unnecessarily high numbers of URLs that point to identical or similar content on your site. As a result, Googlebot may consume much more bandwidth than necessary, or Google Search may be unable to completely index all the content on your site.

Unnecessarily high numbers of URLs can be caused by a number of issues. These include:

| Common issues |  |
| :---- | :---- |
| Additive filtering of a set of items | Many sites provide different views of the same set of items or search results, often allowing the user to filter this set using defined criteria (for example: show me hotels on the beach). When filters can be combined in an additive manner (for example: hotels on the beach and with a fitness center), the number of URLs (views of data) in the sites explodes. Creating a large number of slightly different lists of hotels is redundant, as Googlebot only needs to see a small number of lists from which it can reach the page for each hotel. For example:   Hotel properties at "value rates": [https\://example.com/hotel-search-results.jsp?Ne=292\&N=461](https://example.com/hotel-search-results.jsp?Ne=292&N=461) Hotel properties at "value rates" on the beach: [https\://example.com/hotel-search-results.jsp?Ne=292\&N=461+4294967240](https://example.com/hotel-search-results.jsp?Ne=292&N=461+4294967240) Hotel properties at "value rates" on the beach and with a fitness center: [https\://example.com/hotel-search-results.jsp?Ne=292\&N=461+4294967240+4294967270](https://example.com/hotel-search-results.jsp?Ne=292&N=461+4294967240+4294967270) |
| Irrelevant parameters | Irrelevant parameters in the URL can cause a large number of URLs, such as:  Referral parameters: [https\://example.com/search/noheaders?click=6EE2BF1AF6A3D705D5561B7C3564D9C2\&clickPage=OPD+Product+Page\&cat=79](https://example.com/search/noheaders?click=6EE2BF1AF6A3D705D5561B7C3564D9C2&clickPage=OPD+Product+Page&cat=79) [https\://example.com/discuss/showthread.php?referrerid=249406\&threadid=535913](https://example.com/discuss/showthread.php?referrerid=249406&threadid=535913) [https\://example.com/products/products.asp?N=200063\&Ne=500955\&ref=foo%2Cbar\&Cn=Accessories](https://example.com/products/products.asp?N=200063&Ne=500955&ref=foo%2Cbar&Cn=Accessories)  Shopping sorting parameters: [https\://example.com/results?search\\\_type=search\\\_videos\&search\\\_query=tpb\&search\\\_sort=relevance\&search\\\_category=25](https://example.com/results?search\\_type=search\\_videos&search\\_query=tpb&search\\_sort=relevance&search\\_category=25)  Session IDs: [https\://example.com/search/noheaders?sessionid=6EE2BF1AF6A3D705D5561B7C3564D9C2](https://example.com/search/noheaders?sessionid=6EE2BF1AF6A3D705D5561B7C3564D9C2)     Consider using a robots.txt file to block Googlebot's access to these problematic URLs. |
| Calendar issues | A dynamically generated calendar might generate links to future and previous dates with no restrictions on start or end dates. For example: [https\://example.com/calendar.php?d=13\&m=8\&y=2011](https://example.com/calendar.php?d=13&m=8&y=2011)  If your site has an infinite calendar, add a `nofollow` attribute to links to dynamically created future calendar pages. |
| Broken relative links | Placing a parent-relative link on the wrong page may create infinite spaces if your server doesn't respond with the right HTTP status code for nonexistent pages. For example, a parent-relative link such as `<a href="../../category/stuff">...</a>` on `https://example.com/category/community/070413/html/FAQ.htm` may lead to bogus URLs such as `https://example.com/category/community/category/stuff`. To fix, use root-relative URLs in your links (instead of parent-relative). |

## Fixing crawling-related URL structure problems

If you notice that Google Search is crawling these problematic URLs, we recommend the following:

- Consider using a robots.txt file to block Googlebot's access to problematic URLs. Typically, consider blocking dynamic URLs, such as URLs that generate search results, or URLs that can create infinite spaces, such as calendars, and ordering and filtering functions.  
- If your site has faceted navigation, learn how to manage crawling of those faceted navigation URLs.

# Link best practices for Google

Google uses links as a signal when determining the relevancy of pages and to find new pages to crawl. Learn how to make your links crawlable so that Google can find other pages on your site via the links on your page, and how to improve your anchor text so that it's easier for people and Google to make sense of your content.

## Make your links crawlable

Generally, Google can only crawl your link if it's an `<a>` HTML element (also known as *anchor element*) with an `href` attribute. Most links in other formats won't be parsed and extracted by Google's crawlers. Google can't reliably extract URLs from `<a>` elements that don't have an `href` attribute or other tags that perform as links because of script events. Here are examples of links that Google can and can't parse:

**Recommended (Google can parse)**

\*\*Not recommended (but Google may still attempt to parse this):\*\*

Make sure that the URL in your \`\` element resolves into an actual web address (meaning, it resembles a URI) that Google crawlers can send requests to, for example:

**Recommended (Google can resolve):**

\*\*Not recommended (but Google may still attempt to resolve this):\*\*

\#\# Anchor text placement

*Anchor text* (also known as *link text*) is the visible text of a link. This text tells people and Google something about the page you're linking to. Place anchor text between `<a>` elements that Google can crawl.

**Good:**

> [\*\*ghost peppers\*\*](https://example.com/ghost-peppers)

**Bad (empty link text):**  
>   
As a fallback, Google can use the `title` attribute as anchor text if the `<a>` element is for some reason empty.  
>   
For images as links, Google uses the `alt` attribute of the `img` element as anchor text, so be sure to add descriptive alt text to your images:

**Good:**

> ![\*\*add enchiladas to your cart\*\*](enchiladas-in-shopping-cart.jpg)

**Bad (empty alt text and empty link text):**

> ![](enchiladas-in-shopping-cart.jpg)

If you are using JavaScript to insert anchor text, use the URL Inspection Tool to make sure it's present in the rendered HTML.

## Write good anchor text

Good anchor text is descriptive, reasonably concise, and relevant to the page that it's on and to the page it links to. It provides context for the link, and sets the expectation for your readers. The better your anchor text, the easier it is for people to navigate your site and for Google to understand what the page you're linking to is about.

**Bad (too generic):**

> [\*\*Click here\*\*](https://example.com) to learn more.  
>   
> [\*\*Read more\*\*](https://example.com).  
>   
> Learn more about our cheese on our [\*\*website\*\*](https://example.com).  
>   
> We have an [\*\*article\*\*](https://example.com) that provides more background on how the cheese is made.

**Better (more descriptive):**

> For a full list of cheese available for purchase, see the [\*\*list of cheese types\*\*](https://example.com).

**Bad (weirdly long):**

> Starting next Tuesday, the [\*\*Knitted Cow invites local residents of Wisconsin to their grand re-opening by also offering complimentary cow-shaped ice sculptures\*\*](https://example.com) to the first 20 customers.

**Better (more concise):**

> Starting next Tuesday, the [\*\*Knitted Cow invites local residents of Wisconsin\*\*](https://example.com) to their grand re-opening by also offering complimentary cow-shaped ice sculptures to the first 20 customers.

Write as naturally as possible, and resist the urge to cram every keyword that's related to the page that you're linking to (remember, keyword stuffing is a violation of our spam policies). Ask yourself, does the reader need these keywords to understand the next page? If it feels like you're forcing keywords into the anchor text, then it's probably too much.

Remember to give context to your links: the words before and after links matter, so pay attention to the sentence as a whole. Don't chain up links next to each other; it's harder for your readers to distinguish between links, and you lose surrounding text for each link.

**Bad (too many links next to each other):**

> I've written about cheese [\*\*so\*\*](https://example.com/page1)[\*\*many\*\*](https://example.com/page2)[\*\*times\*\*](https://example.com/page3)[\*\*this\*\*](https://example.com/page4)[\*\*year\*\*](https://example.com/page5).

**Better (links are spaced out with context):**

> I've written about cheese so many times this year: who can forget the [\*\*controversy over blue cheese and gorgonzola\*\*](https://example.com/blue-cheese-vs-gorgonzola), the [\*\*world's oldest brie\*\*](https://example.com/worlds-oldest-brie) piece that won the Cheesiest Research Medal, the epic retelling of [\*\*The Lost Cheese\*\*](https://example.com/the-lost-cheese), and my personal favorite, [\*\*A Boy and His Cheese: a story of two unlikely friends\*\*](https://example.com/boy-and-his-cheese).

## Internal links: cross-reference your own content

You may usually think about linking in terms of pointing to external websites, but paying more attention to the anchor text used for internal links can help both people and Google make sense of your site more easily and find other pages on your site. Every page you care about should have a link from at least one other page on your site. Think about what other resources on your site could help your readers understand a given page on your site, and link to those pages in context.

## External links: link to other sites

Linking to other sites isn't something to be scared of; in fact, using external links can help establish trustworthiness (for example, citing your sources). Link out to external sites when it makes sense, and provide context to your readers about what they can expect.

**Good (citing your sources)**:

> According to a recent study from Swiss researchers, Emmental cheese wheels that were exposed to music had a milder flavor when compared to the control cheese wheels (which experienced no such musical treatment), with the full findings available in [\*\*Cheese in Surround Sound—a culinary art experiment\*\*](https://example.com).

Use `nofollow` only when you don't trust the source, and not for every external link on your site. For example, you're a cheese enthusiast and someone published a story badmouthing your favorite cheese, so you want to write an article in response; however, you don't want to give the site some of your reputation from your link. This would be a good time to use `nofollow`.

If you were paid in some way for the link, qualify these links with `sponsored` or `nofollow`. If users can insert links on your site (for example, you have a forum section or Q\&A site), add `ugc` or `nofollow` to these links too.

# Learn about sitemaps

A *sitemap* is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently. A sitemap tells search engines which pages and files you think are important in your site, and also provides valuable information about these files. For example, when the page was last updated and any alternate language versions of the page.

You can use a sitemap to provide information about specific types of content on your pages, including video, image, and news content. For example:

- A sitemap *video entry* can specify the video running time, rating, and age-appropriateness rating.  
- A sitemap *image entry* can include the location of the images included in a page.  
- A sitemap *news entry* can include the article title and publication date.

## Do I need a sitemap?

If your site's pages are properly linked, Google can usually discover most of your site. Proper linking means that all pages that you deem important can be reached through some form of navigation, be that your site's menu or links that you placed on pages. Even so, a sitemap can improve the crawling of larger or more complex sites, or more specialized files.

**You might need a sitemap if:**

- **Your site is large.** Generally, on large sites it's more difficult to make sure that every page is linked by at least one other page on the site. As a result, it's more likely Googlebot might not discover some of your new pages.  
- **Your site is new and has few external links to it.** Googlebot and other web crawlers crawl the web by accessing URLs found in previously crawled pages. As a result, Googlebot might not discover your pages if no other sites link to them.  
- **Your site has a lot of rich media content (video, images) or is shown in Google News.** Google can take additional information from sitemaps into account for Search.

**You might not need a sitemap if:**

- **Your site is "small".** By small, we mean about 500 pages or fewer on your site. Only pages that you think need to be in search results count toward this total.  
- **Your site is comprehensively linked internally.** This means that Googlebot can find all the important pages on your site by following links starting from the home page.  
- **You don't have many media files (video, image) or news pages** that you want to show in search results. Sitemaps can help Google find and understand video and image files, or news articles, on your site. If you don't need these results to appear in Search you might not need a sitemap.

# Build and submit a sitemap

This page describes how to build a sitemap and make it available to Google. If you're new to sitemaps, read our introduction first.

Google supports the sitemap formats defined by the sitemaps protocol. Each format has its own benefits and shortcomings; choose the one that is the most appropriate for your site and setup (Google doesn't have a preference). The following table compares the different sitemap formats:

| Sitemaps comparison |  |
| :---- | :---- |
| XML sitemap | XML sitemaps are the most versatile of the sitemaps formats. It's extensible and can be used to supply additional data about images, video, and news content, as well as the localized versions of your pages.     **Pros:**  Extensible and versatile. It can provide the most information about your URLs. Most content management systems (CMS) automatically generate sitemaps or CMS users can find plenty of sitemap plugins.    **Cons:**  Can be cumbersome to work with.  Can be complex to maintain the mapping on larger sites, or sites where the URLs change often. |
| **Pros:**  Extensible and versatile. It can provide the most information about your URLs. Most content management systems (CMS) automatically generate sitemaps or CMS users can find plenty of sitemap plugins. | **Cons:**  Can be cumbersome to work with.  Can be complex to maintain the mapping on larger sites, or sites where the URLs change often. |
| RSS, mRSS, and Atom 1.0 | RSS, mRSS, and Atom 1.0 sitemaps are similar in structure to XML sitemaps, however they are often the easiest to provide because CMSes automatically create them.     **Pros:**  Most CMSes automatically generate RSS and Atom feeds. Can be used to provide Google information about your videos.    **Cons:**   Besides HTML and other indexable textual content, it can only provide information about videos, not images or news.  Can be cumbersome to work with. |
| **Pros:**  Most CMSes automatically generate RSS and Atom feeds. Can be used to provide Google information about your videos. | **Cons:**   Besides HTML and other indexable textual content, it can only provide information about videos, not images or news.  Can be cumbersome to work with. |
| Text sitemap | The simplest of sitemap formats, it can only list URLs to HTML and other indexable pages.     **Pros:**  Simple to do and maintain, especially on large sites.    **Cons:**   Limited to HTML and other indexable textual content. |
| **Pros:**  Simple to do and maintain, especially on large sites. | **Cons:**   Limited to HTML and other indexable textual content. |

## Sitemap best practices

The best practices for sitemaps are defined by the sitemaps protocol. The most overlooked best practices are related to the size limits, sitemap location, and the URLs included in the sitemaps.

**Sitemap size limits:** All formats limit a single sitemap to 50MB (uncompressed) or 50,000 URLs. If you have a larger file or more URLs, you must break your sitemap into multiple sitemaps. You can optionally create a sitemap index file and submit that single index file to Google. You can submit multiple sitemaps and sitemap index files to Google. This may be useful if you want to track the search performance of each individual sitemap in Search Console.

**Sitemap file encoding and location:** The sitemap file must be UTF-8 encoded. You can host your sitemaps anywhere on your site, but unless you submit your sitemap through Search Console, a sitemap affects only descendants of the parent directory. Therefore, a sitemap posted at the site root can affect all files on the site, which is where we recommend posting your sitemaps.

**Referenced URLs' properties:** Use fully-qualified, absolute URLs in your sitemaps. Google will attempt to crawl your URLs exactly as listed. For example, if your site is at `https://www.example.com/`, don't specify a URL such as `/mypage.html` (a relative URL), use the complete, absolute URL: `https://www.example.com/mypage.html`.

Include the URLs in your sitemap that you want to see in Google's search results. Google generally shows the canonical URLs in its search results, which you can influence with sitemaps. If you have different URLs for mobile and desktop versions of a page, we recommend pointing to only one version in a sitemap. However, if you want to point to both URLs, annotate your URLs to indicate the desktop and mobile versions.

For a complete list of best practices, check out the sitemaps protocol.

## XML sitemap

The XML sitemap format is the most versatile of the supported formats. Using the Google supported sitemap extensions, you can also provide additional information about your images, video, and news content, as well as the localized versions of your pages.

Here is a very basic XML sitemap that includes the location of a single URL:

 https\://www\.example.com/foo.html 2022-06-04 You can find more complex examples and full documentation at sitemaps.org.

### Additional notes about XML sitemaps

- As with all XML files, all tag values must be entity escaped.  
- Google ignores `<priority>` and `<changefreq>` values.  
- Google uses the `<lastmod>` value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate.

## RSS, mRSS, and Atom 1.0

If your CMS generates an RSS or Atom feed, you can submit the feed's URL as a sitemap. Most CMSes create a feed for you, however keep in mind that this feed only provides information on recent URLs.

### Additional notes about RSS, mRSS, and Atom 1.0

- Google accepts RSS 2.0 and Atom 1.0 feeds.  
- You can use an mRSS (media RSS) feed to provide Google details about video content on your site.  
- As with all XML files, all tag values must be entity escaped.

## Text sitemap

If you only want to provide web page URLs, you can create a common text file that contains one URL per line and submit that to Google. For example, if you have two pages on your site, you could add them to your text sitemap located at `https://www.example.com/sitemap.txt` as follows:

[https\://www\.example.com/file1.html](https://www.example.com/file1.html) [https\://www\.example.com/file2.html\#\#\#](https://www.example.com/file2.html###) Additional notes for text file sitemaps

- Don't put anything other than URLs in the sitemap file.  
- You can name the text file anything you want, provided it has a `.txt` extension (for instance, sitemap.txt).

## How to create a sitemap

When creating a sitemap, you're telling search engines about which URLs you prefer to show in search results. These are the canonical URLs. If you have the same content accessible under different URLs, choose the URL you prefer and include that in the sitemap instead of all URLs that lead to the same content.

Once you've decided which URLs to include in the sitemap, pick one of the following ways to create a sitemap, depending on your site architecture and size:

- Let your CMS generate a sitemap for you.  
- For sitemaps with less than a few dozen URLs, you can manually create a sitemap.  
- For sitemaps with more than a few dozen URLs, automatically generate a sitemap.

### Let your CMS generate a sitemap for you

If you're using a CMS such as WordPress, Wix, or Blogger, it's likely that your CMS has already made a sitemap available to search engines. Try searching for information about how your CMS generates sitemaps, or how to create a sitemap if your CMS doesn't generate a sitemap automatically. For example, in case of Wix, search for "wix sitemap", or in case of Blogger, search for "Blogger RSS".

### Manually create a sitemap

For sitemaps with less than a few dozen URLs, you may be able to manually create a sitemap. For this, open a text editor such as Windows Notepad or Nano (Linux, MacOS), and follow a syntax described in the Sitemap Formats section. You can name the file anything you like as long as the characters are allowed in a URL.

You can manually create larger sitemaps, but it's a tedious process and hard to maintain long term.

### Automatically generate a sitemap with tools

For sitemaps with more than a few dozen URLs, you will need to generate the sitemap. There are various tools that can generate a sitemap. However, the best way is to have your website software generate it for you. For example, you can extract your site's URLs from your website's database and then export the URLs to either the screen or actual file on your web server. Talk to your developers or server manager about this solution. If you need inspiration for the code, check out our old, unmaintained collection of third-party sitemap generators.

You don't have to worry about the order of the URLs in your sitemap, it doesn't matter to Google. Note the size requirements for sitemaps; if the sitemap becomes too large, you must split it into smaller sitemaps. Learn more about managing large sitemaps.

## Submit your sitemap to Google

Keep in mind that submitting a sitemap is merely a hint: it doesn't guarantee that Google will download the sitemap or use the sitemap for crawling URLs on the site. There are a few different ways to make your sitemap available to Google.

- **Submit a sitemap in Search Console** using the Sitemaps report. This will allow you to see when Googlebot accessed the sitemap and also potential processing errors.  
- **Use the Search Console API** to programmatically submit a sitemap.  
- **Insert the following line anywhere in your robots.txt file**, specifying the path to your sitemap. We will find it the next time we crawl your robots.txt file: Sitemap: [https\://example.com/my\\\_sitemap.xml](https://example.com/my\\_sitemap.xml) You can specify multiple sitemap lines, and there's no limit to the number of sitemaps you can include in your robots.txt file.  
- If you use Atom or RSS, you can use WebSub to broadcast your changes to search engines, including Google.

## How to cross-submit sitemaps for multiple sites

If you have multiple websites, you can simplify the submission process by creating one or more sitemaps that include URLs for all your verified sites, and saving the sitemaps to a single location. You can choose to use:

- A single sitemap that includes URLs for multiple websites, including sites from different domains. For example, the sitemap located at `https://host1.example.com/sitemap.xml` can include the following URLs.  
  - `https://host1.example.com`  
  - `https://host2.example.com`  
  - `https://host3.example.com`  
  - `https://host1.example1.com`  
  - `https://host1.example.ch`  
- Individual sitemaps (one for each site) that all reside in a single location. For example, `https://host1.example.com` may host all of these sitemaps:  
  - `https://host1.example.com/host1-example-sitemap.xml`  
  - `https://host1.example.com/host2-example-sitemap.xml`  
  - `https://host1.example.com/host3-example-sitemap.xml`  
  - `https://host1.example.com/host1-example1-sitemap.xml`  
  - `https://host1.example.com/host1-example-ch-sitemap.xml`

To submit cross-site sitemaps that are hosted in a single location, you can either use Search Console or robots.txt.

### Sitemap cross-submission with Search Console

1. Make sure that you have verified ownership of all the sites that you will add in the sitemap.  
2. Create a sitemap (or more if you prefer) that includes URLs from all the sites that you want to cover. You can include the sitemaps in a sitemap index file if you prefer and work with that sitemap index from here on.  
3. Using Google Search Console, submit your sitemaps or sitemap index file.

### Sitemap cross-submission with robots.txt

1. Create one or more sitemaps for each individual site. For each individual sitemap file, make sure you include only URLs from that particular site.  
2. Upload all sitemaps to a single site you have control over, for example `https://sitemaps.example.com`.  
3. For each individual site, make sure that the robots.txt file references the sitemap for that individual site. For example, if you created a sitemap for `https://example.com/` and you're hosting the sitemap at `https://sitemaps.example.com/sitemap-example-com.xml`, reference the sitemap in the robots.txt file at `https://example.com/robots.txt`. \# robots.txt file of [https\://example.com/](https://example.com/) sitemap: [https\://sitemaps.example.com/sitemap-example-com.xml](https://sitemaps.example.com/sitemap-example-com.xml)

# Manage your sitemaps with a sitemap index file

If you have a sitemap that exceeds the size limits, you'll need to split up your large sitemap into multiple sitemaps such that each new sitemap is below the size limit. Once you've split up your sitemap, you can use a sitemap index file as a way to submit many sitemaps at once.

## Sitemap index best practices

The XML format of a sitemap index file is very similar to the XML format of a sitemap file, and it's defined by the Sitemap Protocol. This means that all the sitemap requirements apply to sitemap index files also.

The referenced sitemaps must be hosted on the same site as your sitemap index file. This requirement is waived if you set up cross-site submission.

Sitemaps that are referenced in the sitemap index file must be in the same directory as the sitemap index file, or lower in the site hierarchy. For example, if the sitemap index file is at `https://example.com/public/sitemap_index.xml`, it can only contain sitemaps that are in the same or deeper directory, like `https://example.com/public/shared/...`.

You can submit up to 500 sitemap index files for each site in your Search Console account.

## Example sitemap index

The following example shows a sitemap index in XML format that lists two sitemaps:

 https\://www\.example.com/sitemap1.xml.gz 2024-08-15 https\://www\.example.com/sitemap2.xml.gz 2022-06-05 \#\# Sitemap index reference

The sitemap index tags are defined by the same namespace as generic sitemaps: `http://www.sitemaps.org/schemas/sitemap/0.9`

To make sure Google can use your sitemap index, you must use the following required tags:

| Required tags |  |
| :---- | :---- |
| `sitemapindex` | The root tag of the XML tree. It contains all the other tags. |
| `sitemap` | The parent tag for each sitemap listed in the file. It's the only direct child of the `sitemapindex` tag. |
| `loc` | The location (URL) of the sitemap. It's a child of the `sitemap` tag. A sitemap index file may have up to 50,000 `loc` tags. |

Additionally, the following optional tags may help Google schedule your sitemaps for crawling:

| Optional tags |  |
| :---- | :---- |
| `lastmod` | Identifies the time that the corresponding sitemap file was modified. It can be a child of a `sitemap` tag. The value for the `lastmod` tag must be in W3C Datetime format. |

# Image sitemaps

Image sitemaps are a way of telling Google about other images on your site, especially those that we might not otherwise find (such as images your site reaches with JavaScript code). You can create a separate image sitemap or add image sitemap tags to your existing sitemap; either approach is equally fine for Google.

Image sitemaps are based on generic sitemaps so the general sitemap best practices also apply to image sitemaps. We also recommend that you follow the general best practices for publishing images.

## Example image sitemap

The following example shows a regular sitemap with image sitemap extension, with two `<url>` elements:

- `https://example.com/sample1.html`, which contains two images  
- `https://example.com/sample2.html`, which contains one image

 https\://example.com/sample1.html https\://example.com/image.jpg https\://example.com/photo.jpg https\://example.com/sample2.html https\://example.com/picture.jpg \#\# Image sitemap reference

The `image` tags are defined in the Image Sitemaps namespace: `http://www.google.com/schemas/sitemap-image/1.1`

To make sure Google can use your image sitemap, you must use the following required tags:

| Required tags |  |
| :---- | :---- |
| `<image:image>` | Encloses all information about a single image. Each `<url>` tag can contain up to 1,000 `<image:image>` tags. |
| `<image:loc>` | The URL of the image.  In some cases, the image URL may not be on the same domain as your main site. This is fine, as long as you verify both domains in Search Console. If, for example, you use a content delivery network such as Google Sites to host your images, make sure that the hosting site is verified in Search Console. In addition, make sure that your robots.txt file doesn't disallow the crawling of any content you want indexed. |

Deprecated tags and attributes  We removed the following tags and attributes from our documentation: `<image:caption>`, `<image:geo_location>`, `<image:title>`, `<image:license>`. See the deprecation announcement for more information.  \#\# Troubleshooting sitemaps

If you're having trouble with your sitemap, you can investigate the errors with Google Search Console. See Search Console's sitemaps troubleshooting guide for help.

Additional resources   Want to learn more? Check out the following resources:    Submit your sitemap to Google   Learn how to combine sitemap extensions

# Video sitemaps and alternatives

A video sitemap is a sitemap with additional information about videos hosted on your pages. Creating a video sitemap is a good way to help Google find and understand the video content on your site, especially content that was recently added or that we might not otherwise discover with our usual crawling mechanisms.

Google recommends using video sitemaps, however we also support mRSS feeds.

## Video sitemap best practices

Video sitemaps are based on generic sitemaps, so the general sitemap best practices also apply to video sitemaps. You can create a separate sitemap or mRSS feed just for video, or you can add video sitemap tags within an existing sitemap, whichever is more convenient for you.

Additionally, the following requirements apply to video sitemaps specifically:

- Don't list videos that are unrelated to the content of the host page. For example, a video that is a small addendum to the page, or unrelated to the main text content.  
- All files referenced in the video sitemap must be accessible to Googlebot. This means that all URLs in the video sitemap:   If you want to prevent spammers from accessing your video content at the `<player_loc>` or `<content_loc>` URLs, verify that any bots accessing your server are really Googlebot.  
  - must not be disallowed for crawling by robots.txt rules,  
  - must be accessible without metafiles and without logging in,  
  - must not be blocked by firewalls or similar mechanism,  
  - and must be accessible on a supported protocol: HTTP and FTP (streaming protocols are not supported).

For more tips about videos in Google Search, see our video best practices.

## Example video sitemap

The following example shows a regular sitemap with video extension. It includes two video entries nested in the single `<url>` tag. The first `<video>` entry includes all the tags that Google can use while the second only the required tags.

 https\://www\.example.com/videos/some\\\_video\\\_landing\\\_page.html https\://www\.example.com/thumbs/123.jpg Grilling steaks for summer Alkis shows you how to get perfectly done steaks every time http\://streamserver.example.com/video123.mp4 https\://www\.example.com/videoplayer.php?video=123 600 2021-11-05T19:20:30+08:00 4.2 12345 2007-11-05T19:20:30+08:00 yes IE GB US CA web tv yes GrillyMcGrillerson no steak meat summer https\://www\.example.com/thumbs/345.jpg Grilling steaks for winter In the freezing cold, Roman shows you how to get perfectly done steaks every time. http\://streamserver.example.com/video345.mp4 https\://www\.example.com/videoplayer.php?video=345  More examples  The following example demonstrates how to add a Vimeo video embed to a video sitemap:   https\://www\.example.com/videos/some\\\_video\\\_landing\\\_page.html https\://www\.example.com/thumbs/123.jpg Lizzi is painting the wall Gary is watching the paint dry on the wall Lizzi painted. https\://player.vimeo.com/video/987654321   The following example demonstrates how to add a YouTube video embed to a video sitemap:   https\://www\.example.com/videos/some\\\_video\\\_landing\\\_page.html https\://www\.example.com/thumbs/345.jpg John teaches cheese John explains the differences between a banana and cheese. https\://www\.youtube.com/embed/1a2b3c4d  \#\# Video sitemap reference

The `video` tags are defined in the video sitemaps namespace: `http://www.google.com/schemas/sitemap-video/1.1`. Each tag can only be added one time per video, unless otherwise specified.

To make sure Google can use your video sitemap, you must use the following required tags:

| Required tags |  |
| :---- | :---- |
| `<video:video>` | The parent element for all information about a single video on the page specified by the `<loc>` tag. You can include multiple `<video:video>` tags nested in the `<loc>` tag, one for each video on the hosting page. |
| `<video:thumbnail_loc>` | A URL pointing to the video thumbnail image file. Follow the video thumbnail requirements. |
| `<video:title>` | The title of the video. All HTML entities must be escaped or wrapped in a `CDATA` block. We recommend that this match the video title displayed on the web page where the video is embedded. |
| `<video:description>` | A description of the video. Maximum 2048 characters. All HTML entities must be escaped or wrapped in a `CDATA` block. It must match the description displayed on the web page where the video is embedded, but it doesn't need to be a word-for-word match. |
| `<video:content_loc>` | A URL pointing to the actual video media file. The file must be one of the supported formats.   **Additional guidelines**  HTML and Flash aren't supported formats. Must not be the same as the URL in the parent `<loc>` tag.  This is the equivalent of `VideoObject.contentUrl` in structured data.   **Best practice:** If you want to restrict access to your content but still have it crawled, ensure that Googlebot can access your content by using verifying Googlebot. |
| `<video:player_loc>` | A URL pointing to a player for a **specific** video. Usually this is the information in the `src` attribute of an `<embed>` tag.   **Additional guidelines**  Must not be the same as the `<loc>` URL.  For Vimeo, YouTube, and other video hosting platforms that allow embedding videos through `iframe` videos, this value is used rather than `video:content_loc`. This is the equivalent of `VideoObject.embedUrl` in structured data.   **Best practice:** If you want to restrict access to your content but still have it crawled, ensure that Googlebot can access your content by using verifying Googlebot. |

Additionally, the following optional tags may help Google better understand your videos and its properties:

| Optional tags |  |
| :---- | :---- |
| `<video:duration>` | The duration of the video, in seconds. Value must be from `1` to `28800` (8 hours). |
| `<video:expiration_date>` | The date after which the video is no longer be available, in W3C format. Omit this tag if your video doesn't expire. If present, Google Search won't show your video after this date. For recurring videos at the same URL, update the expiration date to the new expiration date.   Supported values are complete date (`YYYY-MM-DD`), or complete date plus hours, minutes and seconds, and timezone (`YYYY-MM-DDThh:mm:ss+TZD`).  **Example:** `2012-07-16T19:20:30+08:00`. |
| `<video:rating>` | The rating of the video. Supported values are float numbers in the range `0.0` (low) to `5.0` (high). |
| `<video:view_count>` | The number of times the video has been viewed. |
| `<video:publication_date>` | The date the video was first published, in W3C format. Supported values are complete date (`YYYY-MM-DD`) or complete date plus hours, minutes and seconds, and timezone (`YYYY-MM-DDThh:mm:ss+TZD`).  **Example:** `2007-07-16T19:20:30+08:00` |
| `<video:family_friendly>` | Whether the video is available with SafeSearch. If you omit this tag, the video is available when SafeSearch is turned on.  **Supported values**:  `yes`: The video is available when SafeSearch is turned on. `no`: The video is only available when SafeSearch is turned off. |
| `<video:restriction>` | Whether to show or hide your video in search results from specific countries.  Specify a space-delimited list of country codes in ISO 3166 format. If there's no `<video:restriction>` tag, Google assumes that the video can be shown in all locations. *Note that this tag only affects search results; it doesn't prevent a user from finding or playing your video in a restricted location through other means.* Learn more about applying country restrictions.  **Attributes:**  If the parent tag `<video:restriction>` is used, the following attribute is required:    `relationship`: Whether the video is allowed or denied in search results in the specified countries. Supported values are:   `allow`: The listed countries are allowed and unlisted countries are denied.   `deny`: The listed countries are denied and unlisted countries are allowed.      **Example:** This example allows the video search result to be shown only in Canada and Mexico:   `<video:restriction relationship="allow">CA MX</video:restriction>` |
| `<video:platform>` | Whether to show or hide your video in search results on specified platform types. This is a list of space-delimited platform types. *Note that this only affects search results on the specified device types; it doesn't prevent a user from playing your video on a restricted platform.*   If there's no `<video:platform>` tag, Google assumes that the video can be played on all platforms. Learn more about applying platform restrictions.  **Supported values**:  `web`: Computer browsers on desktops and laptops.  `mobile`: Mobile browsers, such as those on cellular phones or tablets.   `tv`: TV browsers, such as those available through Google TV devices and game consoles.   **Attributes:**  If the parent tag `<video:platform>` is used, the following attributes are required:    `relationship`: Specifies whether the video is restricted or permitted for the specified platforms. Supported values are:   `allow`: Any omitted platforms will be denied.   `deny`: Any omitted platforms will be allowed.      **Example:** The following example allows users on web or TV, but not mobile devices:  `<video:platform relationship="allow">web tv</video:platform>` |
| `<video:requires_subscription>` | Indicates whether a subscription (either paid or free) is required to view the video. Supported values are:    `yes`: Subscription is required.   `no`: Subscription is not required. |
| `<video:uploader>` | The video uploader's name. The string value can be a maximum of 255 characters.  **Attributes:**   `info` \[*Optional*\]: Specifies the URL of a web page with additional information about this uploader. This URL must be in the same domain as the `<loc>` tag. |
| `<video:live>` | Indicates whether the video is a livestream. Supported values are:   `yes`: The video is a livestream.   `no`: The video is not a livestream. |
| `<video:tag>` | An arbitrary string tag describing the video. Tags are generally very short descriptions of key concepts associated with a video or piece of content. A single video could have several tags, although it might belong to only one category. For example, a video about grilling food may belong in the "grilling" category, but could be tagged "steak", "meat", "summer", and "outdoor". Create a new `<video:tag>` element for each tag associated with a video. A maximum of 32 tags is permitted per video. |

Deprecated tags and attributes  We removed the following tags and attributes from our documentation: `<video:category>`, `<video:gallery_loc>`, the `autoplay` and `allow_embed` attributes of the `<video:player_loc>` tag, the `<video:price>` tag and its attributes, and the `<video:tvshow>` tag and its attributes. See the deprecation announcement for more information.  \#\# Sitemap alternative: mRSS

While Google recommends using video sitemaps, we also support mRSS feeds.

Google supports mRSS, an RSS module that supplements the element capabilities of RSS 2.0. mRSS feeds are very similar to video sitemaps and can be tested, submitted, and updated just like sitemaps.

For more information about media feeds, see the official media RSS documentation.

### mRSS Example

Here's an example of an mRSS entry that provides all the tags that Google uses.

 Example MRSS

https\://www\.example.com/examples/mrss/ MRSS Example https\://www\.example.com/examples/mrss/example.html Grilling Steaks for Summer Get perfectly done steaks every time us ca end=2020-10-15T00:00+01:00; scheme=W3C-DTF live-video    \#\#\# mRSS reference

The full mRSS specification contains more optional tags, best practices, and examples.

To make sure Google can use your mRSS feed, you must use the following required tags:

| Required tags |  |
| :---- | :---- |
| `<media:content>` | Encloses information about the video. Attributes:   `medium`: Type of content. Set to `video`.   `url`: The direct URL to the raw video content. **If this isn't specified, you must specify the `<media:player>` tag.**   `duration` \[*Optional but recommended*\]: Length of the video in seconds.    For all of the other optional attributes and child fields of the `<media:content>` tag, see the mRSS specification. |
| `<media:player>` | **You must specify at least one of `<media:player>` or the `url` attribute in `<media:content>`.**   A URL pointing to a player for a **specific** video. Usually this is the information in the `src` attribute of an `<embed>` tag and must not be the same as the content of the `<loc>` tag. It can't be the same URL as the `<link>` tag. The `<link>` tag points to the URL of the page hosting the video, while this tag points to a player. |
| `<media:title>` | The title of the video. Maximum 100 characters. All HTML entities must be escaped or wrapped in a CDATA bock. |
| `<media:description>` | The description of the video. Maximum 2048 characters. All HTML entities must be escaped or wrapped in a CDATA block. |
| `<media:thumbnail>` | A URL pointing to a preview thumbnail. Follow the Video thumbnail requirements. |

Additionally, the following optional tags may help Google better understand your videos and its properties:

| Optional tags |  |
| :---- | :---- |
| `<dcterms:valid>` | The publication and expiration date of the video. Here's the Full specification of the `dcterms:valid` tag.  **Example:** [dcterms:valid](dcterms:valid) start=2002-10-13T09:00+01:00; end=2002-10-17T17:00+01:00; scheme=W3C-DTF [dcterms:valid](dcterms:valid) |
| `<media:restriction>` | A space-delimited list of countries where the video may or may not be played, in ISO 3166 format. If there's no `<media:restriction>` tag, Google assumes that the video can be played in all countries.  **Attributes:**  If the parent tag `<media:restriction>` is used, the following attributes are required:    `type`: Set the `type` attribute to `country`. Only country restrictions are supported.   `relationship`: Specifies whether the video may or may not be played in the specified list of countries. Supported values:   `allow`: The listed countries are allowed and unlisted countries are denied.   `deny`: The listed countries are denied and unlisted countries are allowed.      Learn more about using country restrictions.  Example: \<media:restriction relationship="allow" type="country"\>us ca\</media:restriction\> |
| `<media:price>` | The price to download or view the video. Don't use this tag for videos that are available without payment. More than one `<media:price>` element can be listed (for example, in order to specify various currencies or purchasing options).  **Attributes:**  If the parent tag `<media:price>` is used, the following attributes are required:    `currency`: The currency in ISO 4217 format.   `type`: The purchase option. Supported values are:   `rent`: The video is available for rent.   `purchase`: The video is available for purchase.   `package`: The video is part of a package deal.   `subscription`: The video is available with a subscription. |

# How to write and submit a robots.txt file

You can control which files crawlers may access on your site with a robots.txt file.

A robots.txt file lives at the root of your site. So, for site `www.example.com`, the robots.txt file lives at `www.example.com/robots.txt`. robots.txt is a plain text file that follows the Robots Exclusion Standard. A robots.txt file consists of one or more rules. Each rule blocks or allows access for all or a specific crawler to a specified file path on the domain or subdomain where the robots.txt file is hosted. Unless you specify otherwise in your robots.txt file, all files are implicitly allowed for crawling.

Here is a simple robots.txt file with two rules:

User-agent: Googlebot Disallow: /nogooglebot/ User-agent: \* Allow: / Sitemap: [https\://www\.example.com/sitemap.xml\*\*Here's](https://www.example.com/sitemap.xml**Here's) what that robots.txt file means:\*\*

1. The user agent named Googlebot is not allowed to crawl any URL that starts with `https://example.com/nogooglebot/`.  
2. All other user agents are allowed to crawl the entire site. This could have been omitted and the result would be the same; the default behavior is that user agents are allowed to crawl the entire site.  
3. The site's sitemap file is located at `https://www.example.com/sitemap.xml`.

See the syntax section for more examples.

## Basic guidelines for creating a robots.txt file

Creating a robots.txt file and making it generally accessible and useful involves four steps:

1. Create a file named robots.txt.  
2. Add rules to the robots.txt file.  
3. Upload the robots.txt file to the root of your site.  
4. Test the robots.txt file.

## Create a robots.txt file

You can use almost any text editor to create a robots.txt file. For example, Notepad, TextEdit, vi, and emacs can create valid robots.txt files. Don't use a word processor; word processors often save files in a proprietary format and can add unexpected characters, such as curly quotes, which can cause problems for crawlers. Make sure to save the file with UTF-8 encoding if prompted during the save file dialog.

**Format and location rules:**

- The file must be named robots.txt.  
- Your site can have only one robots.txt file.  
- The robots.txt file must be located at the root of the site host to which it applies. For instance, to control crawling on all URLs below `https://www.example.com/`, the robots.txt file must be located at `https://www.example.com/robots.txt`. It *cannot* be placed in a subdirectory (for example, at `https://example.com/pages/robots.txt`). If you're unsure about how to access your site root, or need permissions to do so, contact your web hosting service provider. If you can't access your site root, use an alternative blocking method such as `meta` tags.  
- A robots.txt file can be posted on a subdomain (for example, `https://site.example.com/robots.txt`) or on non-standard ports (for example, `https://example.com:8181/robots.txt`).  
- A robots.txt file applies only to paths within the protocol, host, and port where it is posted. That is, rules in `https://example.com/robots.txt` apply only to files in `https://example.com/`, not to subdomains such as `https://m.example.com/`, or alternate protocols, such as `http://example.com/`.  
- A robots.txt file must be a UTF-8 encoded text file (which includes ASCII). Google may ignore characters that are not part of the UTF-8 range, potentially rendering robots.txt rules invalid.

## How to write robots.txt rules

Rules are instructions for crawlers about which parts of your site they can crawl. Follow these guidelines when adding rules to your robots.txt file:

- A robots.txt file consists of one or more groups (set of rules).  
- Each group consists of multiple rules (also known as directives), one rule per line. Each group begins with a `User-agent` line that specifies the target of the groups.  
- A group gives the following information:  
  - Who the group applies to (the user agent).  
  - Which directories or files that agent *can* access.  
  - Which directories or files that agent *cannot* access.  
- Crawlers process groups from top to bottom. A user agent can match only one rule set, which is the first, most specific group that matches a given user agent. If there are multiple groups for the same user agent, the groups will be combined into a single group before processing.  
- The default assumption is that a user agent can crawl any page or directory not blocked by a `disallow` rule.  
- Rules are case-sensitive. For instance, `disallow: /file.asp` applies to `https://www.example.com/file.asp`, but not `https://www.example.com/FILE.asp`.  
- The `#` character marks the beginning of a comment. Comments are ignored during processing.

**Google's crawlers support the following rules in robots.txt files:**

- `user-agent:` \[Required, one or more per group\] The rule specifies the name of the automatic client known as search engine crawler that the rule applies to. This is the first line for any rule group. Google user agent names are listed in the Google list of user agents. Using an asterisk (`*`) matches all crawlers except the various AdsBot crawlers, which must be named explicitly. For example: \# Example 1: Block only Googlebot User-agent: Googlebot Disallow: / \# Example 2: Block Googlebot and Adsbot User-agent: Googlebot User-agent: AdsBot-Google Disallow: / \# Example 3: Block all crawlers except AdsBot (AdsBot crawlers must be named explicitly) User-agent: \* Disallow: /  
- `disallow:` \[At least one or more `disallow` or `allow` entries per rule\] A directory or page, relative to the root domain, that you don't want the user agent to crawl. If the rule refers to a page, it must be the full page name as shown in the browser. It must start with a `/` character and if it refers to a directory, it must end with the `/` mark.  
- `allow:` \[At least one or more `disallow` or `allow` entries per rule\] A directory or page, relative to the root domain, that may be crawled by the user agent just mentioned. This is used to override a `disallow` rule to allow crawling of a subdirectory or page in a disallowed directory. For a single page, specify the full page name as shown in the browser. It must start with a `/` character and if it refers to a directory, it must end with the `/` mark.  
- `sitemap:` \[Optional, zero or more per file\] The location of a sitemap for this site. The sitemap URL must be a fully-qualified URL; Google doesn't assume or check http/https/www\.non-www alternates. Sitemaps are a good way to indicate which content Google should crawl, as opposed to which content it *can* or *cannot* crawl. Learn more about sitemaps. **Example:** Sitemap: [https\://example.com/sitemap.xml](https://example.com/sitemap.xml) Sitemap: [https\://www\.example.com/sitemap.xml](https://www.example.com/sitemap.xml)

All rules, except `sitemap`, support the `*` wildcard for a path prefix, suffix, or entire string.

Lines that don't match any of these rules are ignored.

Read our page about Google's interpretation of the robots.txt specification for the complete description of each rule.

## Upload the robots.txt file

Once you saved your robots.txt file to your computer, you're ready to make it available to search engine crawlers. There's no one tool that can help you with this, because how you upload the robots.txt file to your site depends on your site and server architecture. Get in touch with your hosting company or search the documentation of your hosting company; for example, search for "upload files infomaniak".

After you upload the robots.txt file, test whether it's publicly accessible and if Google can parse it.

## Test robots.txt markup

To test whether your newly uploaded robots.txt file is publicly accessible, open a private browsing window (or equivalent) in your browser and navigate to the location of the robots.txt file. For example, `https://example.com/robots.txt`. If you see the contents of your robots.txt file, you're ready to test the markup.

Google offers two options for fixing issues with robots.txt markup:

1. The  robots.txt report in Search Console. You can only use this report for robots.txt files that are already accessible on your site.  
2. If you're a developer, check out and build Google's open source robots.txt library, which is also used in Google Search. You can use this tool to test robots.txt files locally on your computer.

## Submit robots.txt file to Google

Once you uploaded and tested your robots.txt file, Google's crawlers will automatically find and start using your robots.txt file. You don't have to do anything. If you updated your robots.txt file and you need to refresh Google's cached copy as soon as possible, learn how to submit an updated robots.txt file.

# How Google interprets the robots.txt specification

Google's automated crawlers support the Robots Exclusion Protocol (REP). This means that before crawling a site, Google's crawlers download and parse the site's robots.txt file to extract information about which parts of the site may be crawled. The REP isn't applicable to Google's crawlers that are controlled by users (for example, feed subscriptions), or crawlers that are used to increase user safety (for example, malware analysis).

This page describes Google's interpretation of the REP. For the original standard, check RFC 9309\.

## What is a robots.txt file

If you don't want crawlers to access sections of your site, you can create a robots.txt file with appropriate rules. A robots.txt file is a text file containing rules about which crawlers may access which parts of a site. For example, the robots.txt file for example.com may look like this:

# This robots.txt file controls crawling of URLs under [https\://example.com](https://example.com). \# All crawlers are disallowed to crawl files in the "includes" directory, such \# as .css, .js, but Google needs them for rendering, so Googlebot is allowed \# to crawl them. User-agent: \* Disallow: /includes/ User-agent: Googlebot Allow: /includes/ Sitemap: [https\://example.com/sitemap.xmlIf](https://example.com/sitemap.xmlIf) you're new to robots.txt, start with our intro to robots.txt. You can also find tips for creating a robots.txt file.

## File location and range of validity

You must place the robots.txt file in the top-level directory of a site, on a supported protocol. The URL for the robots.txt file is (like other URLs) case-sensitive. In case of Google Search, the supported protocols are HTTP, HTTPS, and FTP. On HTTP and HTTPS, crawlers fetch the robots.txt file with an HTTP non-conditional `GET` request; on FTP, crawlers use a standard `RETR (RETRIEVE)` command, using anonymous login.

The rules listed in the robots.txt file apply only to the host, protocol, and port number where the robots.txt file is hosted.

## Examples of valid robots.txt URLs

The following table contains examples of robots.txt URLs and what URL paths they're valid for. Column one contains the URL of a robots.txt file, and column two contains domains that that robots.txt file would and wouldn't apply to.

| Robots.txt URL examples |  |
| :---- | :---- |
| `https://example.com/robots.txt` | This is the general case. It's not valid for other subdomains, protocols, or port numbers. It's valid for all files in all subdirectories on the same host, protocol, and port number.  Valid for:  `https://example.com/` `https://example.com/folder/file`  Not valid for:  `https://other.example.com/` `http://example.com/` `https://example.com:8181/` |
| `https://www.example.com/robots.txt` | A robots.txt on a subdomain is only valid for that subdomain.   Valid for: `https://www.example.com/`  Not valid for:  `https://example.com/` `https://shop.www.example.com/` `https://www.shop.example.com/` |
| `https://example.com/folder/robots.txt` | Not a valid robots.txt file. Crawlers don't check for robots.txt files in subdirectories. |
| `https://www.exämple.com/robots.txt` | IDNs are equivalent to their punycode versions. See also RFC 3492\.  Valid for:  `https://www.exämple.com/` `https://xn--exmple-cua.com/`   Not valid for: `https://www.example.com/` |
| `ftp://example.com/robots.txt` | Valid for: `ftp://example.com/`   Not valid for: `https://example.com/` |
| `https://212.96.82.21/robots.txt` | A robots.txt with an IP-address as the hostname is only valid for crawling of that IP address as the hostname. It isn't automatically valid for all websites hosted on that IP address (though it's possible that the robots.txt file is shared, in which case it would also be available under the shared hostname).   Valid for: `https://212.96.82.21/`   Not valid for: `https://example.com/` (even if hosted on `212.96.82.21`) |
| `https://example.com:443/robots.txt` | Standard port numbers (`80` for HTTP, `443` for HTTPS, `21` for FTP) are equivalent to their default hostnames.  Valid for:  `https://example.com:443/` `https://example.com/`   Not valid for: `https://example.com:444/` |
| `https://example.com:8181/robots.txt` | Robots.txt files on non-standard port numbers are only valid for content made available through those port numbers.   Valid for: `https://example.com:8181/`   Not valid for: `https://example.com/` |

## Handling of errors and HTTP status codes

When requesting a robots.txt file, the HTTP status code of the server's response affects how the robots.txt file will be used by Google's crawlers. The following table summarizes how Googlebot treats robots.txt files for different HTTP status codes.

| Handling of errors and HTTP status codes |  |
| :---- | :---- |
| `2xx (success)` | HTTP status codes that signal success prompt Google's crawlers to process the robots.txt file as provided by the server. |
| `3xx (redirection)` | Google follows at least five redirect hops as defined by RFC 1945 and then stops and treats it as a `404` for the robots.txt file. This also applies to any disallowed URLs in the redirect chain, since the crawler couldn't fetch rules due to the redirects.   Google doesn't follow logical redirects in robots.txt files (frames, JavaScript, or meta refresh-type redirects). |
| `4xx (client errors)` | Google's crawlers treat all `4xx` errors, except `429`, as if a valid robots.txt file didn't exist. This means that Google assumes that there are no crawl restrictions. |
| `5xx (server errors)` | If Google finds a robots.txt file but can't fetch it, Google follows this behavior:   For the first 12 hours, Google stops crawling the site but keeps trying to fetch the robots.txt file.  If Google can't fetch a new version, for the next 30 days Google will use the last good version, while still trying to fetch a new version. A `503 (service unavailable)` error results in fairly frequent retrying. If there's no cached version available, Google assumes there's no crawl restrictions.  If the errors are still not fixed after 30 days:  If the site is generally available to Google, Google will behave as if there is no robots.txt file (but still keep checking for a new version).   If the site has general availability problems, Google will stop crawling the site, while still periodically requesting a robots.txt file. |
| Other errors | A robots.txt file which cannot be fetched due to DNS or networking issues, such as timeouts, invalid responses, reset or interrupted connections, and HTTP chunking errors, is treated as a server error. |

## Caching

Google generally caches the contents of robots.txt file for up to 24 hours, but may cache it longer in situations where refreshing the cached version isn't possible (for example, due to timeouts or `5xx` errors). The cached response may be shared by different crawlers. Google may increase or decrease the cache lifetime based on max-age Cache-Control HTTP headers.

## File format

The robots.txt file must be a UTF-8 encoded plain text file and the lines must be separated by `CR`, `CR/LF`, or `LF`.

Google ignores invalid lines in robots.txt files, including the Unicode Byte Order Mark (BOM) at the beginning of the robots.txt file, and use only valid lines. For example, if the content downloaded is HTML instead of robots.txt rules, Google will try to parse the content and extract rules, and ignore everything else.

Similarly, if the character encoding of the robots.txt file isn't UTF-8, Google may ignore characters that are not part of the UTF-8 range, potentially rendering robots.txt rules invalid.

Google enforces a robots.txt file size limit of 500 kibibytes (KiB). Content which is after the maximum file size is ignored. You can reduce the size of the robots.txt file by consolidating rules that would result in an oversized robots.txt file. For example, place excluded material in a separate directory.

## Syntax

A valid robots.txt line consists of a field, a colon, and a value. Field names are case-insensitive (for example, `User-agent` and `user-agent` are treated the same). Spaces are optional, but recommended to improve readability. Space at the beginning and at the end of the line is ignored. To include comments, precede your comment with the `#` character. Keep in mind that everything after the `#` character will be ignored. The general format is `<field>:<value><#optional-comment>`.

Google supports the following fields (other fields such as `crawl-delay` aren't supported):

- `user-agent`: identifies which crawler the rules apply to.  
- `allow`: a URL path that may be crawled.  
- `disallow`: a URL path that may not be crawled.  
- `sitemap`: the complete URL of a sitemap.

The `allow` and `disallow` fields are also called rules (also known as directives). These rules are always specified in the form of `rule: [path]` where `[path]` is optional. By default, there are no restrictions for crawling for the designated crawlers. Crawlers ignore rules without a `[path]`.

The `[path]` value, if specified, is relative to the root of the website from where the robots.txt file was fetched (using the same protocol, port number, host and domain names). The path value must start with `/` to designate the root and the value is case-sensitive. Learn more about URL matching based on path values.

### `user-agent`

The `user-agent` line identifies which crawler rules apply to. See Google's crawlers and user-agent strings for a comprehensive list of user-agent strings you can use in your robots.txt file.

Both the `user-agent` field name and its value are case-insensitive.

### `disallow`

The `disallow` rule specifies paths that must not be accessed by the crawlers identified by the `user-agent` line the `disallow` rule is grouped with. Crawlers ignore the rule without a path.

Google can't index the content of pages which are disallowed for crawling, but it may still index the URL and show it in search results without a snippet. Learn how to block indexing.

The field name (`disallow`) is case-insensitive, but its value is case-sensitive.

Usage:

disallow: \[path\] \#\#\# `allow`

The `allow` rule specifies paths that may be accessed by the designated crawlers. When no path is specified, the rule is ignored.

The field name (`allow`) is case-insensitive, but its value is case-sensitive.

Usage:

allow: \[path\] \#\#\# `sitemap`

Google, Bing, and other major search engines support the `sitemap` field in robots.txt, as defined by sitemaps.org.

The field name (`sitemap`) is case-insensitive, but its value is case-sensitive.

Usage:

sitemap: \[absoluteURL\]The `[absoluteURL]` line points to the location of a sitemap or sitemap index file. It must be a fully qualified URL, including the protocol and host, and doesn't have to be URL-encoded. The URL doesn't have to be on the same host as the robots.txt file. You can specify multiple `sitemap` fields, with no limit to the number of sitemaps you can include. The sitemap field isn't tied to any specific user agent and may be followed by all crawlers, provided it isn't disallowed for crawling.

For example:

user-agent: otherbot disallow: /kale sitemap: [https\://example.com/sitemap.xml](https://example.com/sitemap.xml) sitemap: [https\://cdn.example.org/other-sitemap.xml](https://cdn.example.org/other-sitemap.xml) sitemap: [https\://ja.example.org/テスト-サイトマップ.xml\#\#](https://ja.example.org/テスト-サイトマップ.xml##) Grouping of lines and rules

You can group together rules that apply to multiple user agents by repeating `user-agent` lines for each crawler.

For example:

user-agent: a disallow: /c user-agent: b disallow: /d user-agent: e user-agent: f disallow: /g user-agent: h In this example there are four distinct rule groups:

- One group for user agent "a".  
- One group for user agent "b".  
- One group for both "e" and "f" user agents.  
- One group for user agent "h".

For the technical description of a group, see section 2.1 of the REP.

## Order of precedence for user agents

Only one group is valid for a particular crawler. Google's crawlers determine the correct group of rules by finding in the robots.txt file the group with the most specific user agent that matches the crawler's user agent. Other groups are ignored. All non-matching text is ignored (for example, both `googlebot/1.2` and `googlebot*` are equivalent to `googlebot`). The order of the groups within the robots.txt file is irrelevant.

If there's more than one specific group declared for a user agent, all the rules from the groups applicable to the specific user agent are combined internally into a single group. User agent specific groups and global groups (`*`) are not combined.

### Examples

#### Matching of `user-agent` fields

user-agent: googlebot-news (group 1\) user-agent: \* (group 2\) user-agent: googlebot (group 3\) This is how the crawlers would choose the relevant group:

| Group followed per crawler |  |
| :---- | :---- |
| Googlebot News | `googlebot-news` follows group 1, because group 1 is the most specific group. |
| Googlebot (web) | `googlebot` follows group 3\. |
| Googlebot Storebot | `Storebot-Google` follows group 2, because there is no specific `Storebot-Google` group. |
| Googlebot News (when crawling images) | When crawling images, `googlebot-news` follows group 1\. `googlebot-news` doesn't crawl the images for Google Images, so it only follows group 1\. |
| Otherbot (web) | Other Google crawlers follow group 2\. |
| Otherbot (news) | Other Google crawlers that crawl news content, but don't identify as `googlebot-news` follow group 2\. Even if there is an entry for a related crawler, it is only valid if it's specifically matching. |

#### Grouping of rules

If there are multiple groups in a robots.txt file that are relevant to a specific user agent, Google's crawlers internally merge the groups. For example:

user-agent: googlebot-news disallow: /fish user-agent: \* disallow: /carrots user-agent: googlebot-news disallow: /shrimp The crawlers internally group the rules based on user agent, for example:

user-agent: googlebot-news disallow: /fish disallow: /shrimp user-agent: \* disallow: /carrots Rules other than `allow`, `disallow`, and `user-agent` are ignored by the robots.txt parser. This means that the following robots.txt snippet is treated as one group, and thus both `user-agent` `a` and `b` are affected by the `disallow: /` rule:

user-agent: a sitemap: [https\://example.com/sitemap.xml](https://example.com/sitemap.xml) user-agent: b disallow: /When the crawlers process the robots.txt rules, they ignore the `sitemap` line. For example, this is how the crawlers would understand the previous robots.txt snippet:

user-agent: a user-agent: b disallow: /\#\# URL matching based on path values

Google uses the path value in the `allow` and `disallow` rules as a basis to determine whether or not a rule applies to a specific URL on a site. This works by comparing the rule to the path component of the URL that the crawler is trying to fetch. The path in the rules can be either raw UTF-8 characters or percent-encoded UTF-8 strings (per RFC 3986). As defined in RFC 9309 Section 2.2.2, Google's crawlers compare rules against URLs using their percent-encoded forms, and automatically canonicalize raw UTF-8 rule paths into percent-encoded forms. This means that, for example, `Disallow: /foo/bar/ツ` and `Disallow: /foo/bar/%E3%83%84` are treated identically by the parser. While Google's systems parse raw UTF-8 characters properly, using percent-encoding for rule paths can make it easier to process these files with third-party tools and services.

Google, Bing, and other major search engines support a limited form of *wildcards* for path values. These wildcard characters are:

- `*` designates 0 or more instances of any valid character.  
- `$` designates the end of the URL.

The following table shows how the different wildcard characters affect parsing:

| Example path matches |  |
| :---- | :---- |
| `/` | Matches the root and any lower level URL. |
| `/*` | Equivalent to `/`. The trailing wildcard is ignored. |
| `/$` | Matches only the root. Any lower level URL is allowed for crawling. |
| `/fish` | Matches any path that starts with `/fish`. Note that the matching is case-sensitive.  Matches:  `/fish` `/fish.html` `/fish/salmon.html` `/fishheads` `/fishheads/yummy.html` `/fish.php?id=anything`  Doesn't match:  `/Fish.asp` `/catfish` `/?id=fish` `/desert/fish` |
| `/fish*` | Equivalent to `/fish`. The trailing wildcard is ignored.  Matches:  `/fish` `/fish.html` `/fish/salmon.html` `/fishheads` `/fishheads/yummy.html` `/fish.php?id=anything`  Doesn't match:  `/Fish.asp` `/catfish` `/?id=fish` `/desert/fish` |
| `/fish/` | Matches anything in the `/fish/` folder.  Matches:  `/fish/` `/fish/?id=anything` `/fish/salmon.htm`  Doesn't match:  `/fish` `/fish.html` `/animals/fish/` `/Fish/Salmon.asp` |
| `/*.php` | Matches any path that contains `.php`.  Matches:  `/index.php` `/filename.php` `/folder/filename.php` `/folder/filename.php?parameters` `/folder/any.php.file.html` `/filename.php/`  Doesn't match:  `/` (even if it maps to /index.php) `/windows.PHP` |
| `/*.php$` | Matches any path that ends with `.php`.  Matches:  `/filename.php` `/folder/filename.php`  Doesn't match:  `/filename.php?parameters` `/filename.php/` `/filename.php5` `/windows.PHP` |
| `/fish*.php` | Matches any path that contains `/fish` and `.php`, in that order.  Matches:  `/fish.php` `/fishheads/catfish.php?parameters`   Doesn't match: `/Fish.PHP` |

## Order of precedence for rules

When matching robots.txt rules to URLs, crawlers use the most specific rule based on the length of the rule path. In case of conflicting rules, including those with wildcards, Google uses the least restrictive rule.

The following examples demonstrate which rule Google's crawlers will apply on a given URL.

| Sample situations |  |
| :---- | :---- |
| `https://example.com/page` | allow: /p disallow: /  **Applicable rule**: `allow: /p`, because it's more specific. |
| `https://example.com/folder/page` | allow: /folder disallow: /folder  **Applicable rule**: `allow: /folder`, because in case of conflicting rules, Google uses the least restrictive rule. |
| `https://example.com/page.htm` | allow: /page disallow: /\*.htm  **Applicable rule**: `disallow: /*.htm`, because the rule path is longer and it matches more characters in the URL, so it's more specific. |
| `https://example.com/page.php5` | allow: /page disallow: /\*.ph  **Applicable rule**: `allow: /page`, because in case of conflicting rules, Google uses the least restrictive rule. |
| `https://example.com/` | allow: /\$ disallow: /  **Applicable rule**: `allow: /$`, because it's more specific. |
| `https://example.com/page.htm` | allow: /\$ disallow: /  **Applicable rule**: `disallow: /`, because the `allow` rule only applies on the root URL. |

# Update your robots.txt file

To update the rules in your existing robots.txt file, download a copy of your robots.txt file from your site and make the necessary edits. Then, upload the updated file to your site.

## Download your robots.txt file

You can download your robots.txt file various ways, for example:

- Navigate to your robots.txt file, for example `https://example.com/robots.txt` and copy its contents into a new text file on computer. Make sure you follow the guidelines related to the file format when creating the new local file.  
- Download an actual copy of your robots.txt file with a tool like curl. For example: curl [https\://example.com/robots.txt](https://example.com/robots.txt) \-o robots.txt  
- Use the robots.txt report in Search Console to copy the content of your robots.txt file, which you can then paste into a file on your computer.

## Edit your robots.txt file

Open the robots.txt file you downloaded from your site in a text editor and make the necessary edits to the rules. Make sure you use the correct syntax and that you save the file with UTF-8 encoding.

## Upload your robots.txt file

Upload your new robots.txt file to the root directory of your site as a text file named robots.txt. The way you upload a file to your site is highly platform and server dependent. Check out our tips for finding help with uploading a robots.txt file to your site.

## Refresh Google's robots.txt cache

During the automatic crawling process, Google's crawlers notice changes you made to your robots.txt file and update the cached version every 24 hours. If you need to update the cache faster, use the **Request a recrawl** function of the robots.txt report.

# Useful robots.txt rules

Here are some common useful robots.txt rules:

| Useful rules |  |
| :---- | :---- |
| Disallow crawling of the entire site | Keep in mind that in some situations URLs from the site may still be indexed, even if they haven't been crawled.   User-agent: \* Disallow: / |
| Allow crawling of an entire site (with an empty `Disallow` rule) | This explicitly allows all crawlers to access the entire site. It is functionally equivalent to having no robots.txt file at all, or using an `Allow: /` rule.  User-agent: \* Disallow: |
| Disallow crawling of a directory and its contents | Append a forward slash to the directory name to disallow crawling of a whole directory.   User-agent: \* Disallow: /calendar/ Disallow: /junk/ Disallow: /books/fiction/contemporary/ |
| Disallow crawling of a single web page | For example, disallow the `useless_file.html` page located at `https://example.com/useless_file.html`, and `other_useless_file.html` in the `junk` directory.  User-agent: \* Disallow: /useless\_file.html Disallow: /junk/other\_useless\_file.html |
| Disallow crawling of the whole site except a subdirectory | Crawlers may only access the `public` subdirectory. User-agent: \* Disallow: / Allow: /public/ |
| Allow access to a single crawler | Only `Googlebot-News` may crawl the whole site. User-agent: Googlebot-News Allow: / User-agent: \* Disallow: / |
| Allow access to all but a single crawler | `Unnecessarybot` may not crawl the site, all other bots may. User-agent: Unnecessarybot Disallow: / User-agent: \* Allow: / |
| Disallow crawling of an entire site, but allow `Storebot-Google` | This implementation hides your pages from Google Search results, but the `Storebot-Google` web crawler can still analyze them to show your products on Google Shopping.  User-agent: \* Disallow: / User-agent: Storebot-Google Allow: / |
| Block all images on your site from Google (includes anywhere images are displayed on Google, including Google Images and Discover) | Google can't index images and videos without crawling them. User-agent: Googlebot-Image Disallow: / |
| Block a specific image from Google Images | For example, disallow the `dogs.jpg` image. User-agent: Googlebot-Image Disallow: /images/dogs.jpg |
| Disallow crawling of files of a specific file type | For example, disallow for crawling all `.gif` files. User-agent: Googlebot Disallow: /\*.gif\$ |
| Use the `*` and `$` wildcards to match URLs that end with a specific string | For example, disallow all `.xls` files: User-agent: Googlebot Disallow: /\*.xls\$ |
| Combine multiple user agents in a single group | Consolidating rules for multiple crawlers into one group makes the file shorter and easier to manage, as all rules in the group apply to every user agent listed. This is the same as listing the user agents twice with the respective rules.  User-agent: Googlebot User-agent: Storebot-Google Allow: /cats Disallow: / |

# Optimize your crawl budget

This guide describes how to optimize Google's crawling of very large and frequently updated sites.

If your site doesn't have a large number of pages that change rapidly, or if your pages seem to be crawled the same day that they are published, you don't need to read this guide. For Google Search specifically, keeping your sitemap up to date and checking the Page Indexing report regularly is adequate.

## Who this guide is for

While the recommendations in this guide are generally good practices, this is an advanced guide intended primarily for the following types of sites:

- Large sites (1 million+ unique pages) with content that changes moderately often (once a week)  
- Medium or larger sites (10,000+ unique pages) with very rapidly changing content (daily)  
- Sites with a large portion of their total URLs classified by Search Console as Discovered \- currently not indexed

## General theory of crawling

The web is a nearly infinite space, exceeding Google's ability to explore every publicly accessible URL. As a result, there are limits to how much time and resources Google can devote to crawling any single site. The allocation of these resources is commonly called a site's *crawl budget*. In this context, Google's crawling infrastructure defines a *site* as a unique hostname. For example, `https://www.example.com/` and `https://code.example.com/` are treated as separate sites and have separate crawl budgets. A site's crawl budget is determined by two main elements: *crawl capacity limit* and *crawl demand*.

### Crawl capacity limit

Google wants to crawl your site without overwhelming your servers. To prevent this, Google's crawlers calculate a *crawl capacity limit* (also known as *hostload*). This limits the total amount of time your server spends holding connections open for Google, factoring in both the number of parallel connections and their duration. This ensures Google can cover all your important content without overloading your servers.

Every site starts with the same default, conservative crawl capacity limit. If there is demand to crawl more and the site remains healthy, Google's systems will automatically adjust this limit over time.

The crawl capacity limit can go up and down based on a few factors:

- **Crawl health:** If the site responds consistently and its response times (including latency and Time-to-First Byte) remain stable or improve, the limit goes up, meaning more connections can be used to crawl. If the site slows down (latency increases or response times become longer), or responds with server errors (`5xx HTTP` status codes) or rate-limiting signals (such as `HTTP 429`), the limit goes down and Google crawls less.  
- **Google's crawling limits:** While Google's resources are extensive, they are finite, and we must prioritize resource allocation across the web.

### Crawl demand

Each crawler has its own "demand" when it comes to crawling the web, determined by factors unique to that crawler. For example, AdsBot generally has a higher demand when a site is running dynamic ad targets, and Google Shopping has a higher demand for products you have in your merchant feeds.

For Googlebot, demand varies based on a site's size, update frequency, page quality, and relevance, compared to other sites. The primary factors you can influence are:

- **Perceived inventory:** Without guidance from you, Google tries to crawl all or most of the URLs that it knows about on your site. If many of these URLs are duplicates, or you don't want them crawled for some other reason (removed, unimportant, and so on), this wastes a lot of Google crawling time on your site. This is the factor that you can positively control the most.  
- **Popularity:** URLs that are more popular on the Internet tend to be crawled more often to keep them fresher in our systems.  
- **Staleness:** Our systems want to recrawl documents frequently enough to pick up any changes.

Additionally, site-wide events like site moves may trigger an increase in crawl demand in order to reprocess the content under the new URLs.

### Summary

Taking crawl capacity and crawl demand together, Google defines a site's crawl budget as the set of URLs that Google can and wants to crawl. Even if the crawl capacity limit isn't reached, if crawl demand is low, Google will crawl your site less.

## Best practices

To maximize your crawling efficiency, follow these best practices:

- **Manage your URL inventory:** Use the appropriate tools to tell Google which pages to crawl and which not to crawl. If Google spends too much time crawling URLs that it shouldn't, Google's crawlers might not explore the rest of your site, or might not increase your crawl budget.  
  - **Consolidate duplicate content.** Eliminate duplicate content to focus crawling on unique content rather than unique URLs.  
  - **Block crawling of URLs using robots.txt**. Some pages might be important to users, but you don't necessarily want them to appear on Google surfaces or get reprocessed by Google's systems. Examples include infinite scrolling pages that duplicate information on linked pages, or differently sorted versions of the same page. If you can't consolidate them as described in the first bullet, block these unimportant pages using robots.txt. Blocking URLs with robots.txt prevents Google from crawling them, and significantly decreases the chance the URLs will be processed by other Google systems (such as getting indexed by Google Search).  
  - **Return a `404` or `410` status code for permanently removed pages.** Google won't forget a URL that it knows about, but a `404` status code is a strong signal not to crawl that URL again. Blocked URLs, however, will stay part of your crawl queue much longer, and will be recrawled when the block is removed.  
  - **Eliminate `soft 404` errors.** `soft 404` pages will continue to be crawled, and waste your budget. Check the Page Indexing report for `soft 404` errors.  
  - **Keep your sitemaps up to date.** Google reads your sitemap regularly, so be sure to include all the content that you want Google to crawl. If your site includes updated content, we recommend including the `<lastmod>` tag.  
  - **Avoid long redirect chains**, which have a negative effect on crawling.  
- **Make your pages efficient to load.** If Google can load and render your pages faster, we might be able to read more content from your site.  
  - **Improve loading speed:** Optimize your server response times and resources to make pages load faster.  
  - **Use HTTP caching:** Support `304 (Not Modified)` HTTP status codes. If a page hasn't changed since Google last crawled it, returning a `304` code tells Google to reuse the cached version, saving your server bandwidth and resources.  
- **Debug issues with crawl budget.** Check whether your site had any availability issues during crawling, and look for ways to make your crawling more efficient.

## How do I get more crawl budget?

There are two ways to increase crawl budget:

- **Add more server resources**: If your site can't be crawled because of server capacity on your end (for example, you're getting **Hostload exceeded** in the URL inspection tool), add more server resources if that makes sense for your business.  
- **Optimize your content's quality for the Google product you're targeting**: Google determines the crawling resources allocated to each site by factoring in elements that are relevant to the specific Google product. For example, for Google Search, this includes things like popularity, overall user value, content uniqueness, and serving capacity.

# Myths and facts about crawling

## Compressing my sitemaps can increase my crawl budget?

False \- It won't. Zipped sitemaps still have to be fetched from the server, so you're not really saving much crawling time or effort on Google's part by sending compressed sitemaps.

## Google prefers fresher content, so I'd better keep tweaking my page?

False \- For Google Search, content is rated by quality, regardless of age. Create and update your content as necessary, but there's no additional value in making pages artificially appear to be fresh by making trivial changes and updating the page date.

## Google prefers old content (it has more weight) over fresh content?

False \- If your page is useful, it's useful, whether it's new or old.

## The faster your pages load and render, the more Google is able to crawl?

True, in that our resources are limited by a combination of time and number of crawling bots. If you can serve us more pages in a limited time, we will be able to crawl more of them. However, we might devote more time crawling a site that has more important information, even if it is slower. It's probably more important for you to make your site faster for your users than to make it faster to increase your crawl coverage. It's much simpler to help Google crawl the right content than it is to crawl all your content every time. Note that crawling a site involves both retrieving and rendering the content. Time spent rendering the page counts as much as time spent requesting the page. So making your pages faster to render will also increase the crawl speed.

## Small sites aren't crawled as often as big ones?

False \- If a site has important content that changes often, we crawl it often, regardless of the size.

## The closer your content is to the home page the more important it is to Google?

Partly true- Your site's home page is often the most important page on your site, and so pages linked directly to the home page may be seen as more important, and therefore crawled more often. However, this doesn't mean that these pages will be ranked more highly than other pages on your site.

## URL versioning is a good way to encourage Google to recrawl my pages?

Partly true \- Using a versioned URL for your page in order to entice Google to crawl it again sooner will probably work, but often this is not necessary, and will waste crawl resources if the page is not actually changed. If you do use versioned URLs to indicate new content, we recommend that you only change the URL when the page content has changed meaningfully.

## Site speed and errors affect my crawl budget.

True \- Making a site faster improves the users' experience while also increasing crawl rate. For Google's crawlers, a speedy site is a sign of healthy servers, so it can get more content over the same number of connections. On the flip side, a significant number of 5xx HTTP response status codes (server errors) or connection timeouts signal the opposite, and crawling slows down. We recommend paying attention to the Crawl Stats report in Search Console and keeping the number of server errors low.

## Crawling is a ranking factor in Google Search?

False \- Improving your crawl rate won't necessarily lead to better positions in Google Search results. Google uses many signals to rank the results, and while crawling is necessary for a page to be in search results, it's not a ranking signal.

## Alternate URLs and embedded content count in the crawl budget?

True \- Generally, any URL that Googlebot crawls will count towards a site's crawl budget. Alternate URLs, like AMP or hreflang, as well as embedded content, such as CSS and JavaScript, including XHR fetches, may have to be crawled and will consume a site's crawl budget.

## I can control Google's crawlers with the "crawl-delay" rule.

False \- The non-standard "crawl-delay" robots.txt rule is not processed by Google's crawlers.

## The nofollow rule affects crawl budget.

Partly true \- Any URL that is crawled affects crawl budget, so even if your page marks a URL as nofollow, it can still be crawled if another page on your site, or any page on the web, doesn't label the link as nofollow.

## I can use noindex to control crawl budget.

Partly true \- Any URL that is crawled affects crawl budget, and Google has to crawl the page in order to find the noindex rule.  
However, noindex is there to help you keep things out of the index. If you want to ensure that those pages don't end up in Google's index, continue using noindex and don't worry about crawl budget. It's also important to note that if you remove URLs from Google's index with noindex or otherwise, Google's crawlers can focus on other URLs on your site, which means noindex can indirectly free up some crawl budget for your site in the long run.

## Pages that serve 4xx HTTP status codes are wasting crawl budget.

False \- Pages that serve 4xx HTTP status codes (except 429\) don't waste crawl budget. Google attempted to crawl the page, but received a status code and no other content.

# Managing crawling of faceted navigation URLs

Faceted navigation is a common feature of websites that allows its visitors to change how items (for example, products, articles, or events) are displayed on a page. It's a popular and useful feature, however its most common implementation, which is based on URL parameters, can generate infinite URL spaces which harms the website in a couple ways:

- **Overcrawling**: Because the URLs created for the faceted navigation seem to be novel and crawlers can't determine whether the URLs are going to be useful without crawling first, the crawlers will typically access a very large number of faceted navigation URLs before the crawlers' processes determine the URLs are in fact useless.  
- **Slower discovery crawls**: Stemming from the previous point, if crawling is spent on useless URLs, the crawlers have less time to spend on new, useful URLs.

A typical faceted navigation URL may contain various parameters in the query string related to the properties of items they filter for. For example:

[https\://example.com/items.shtm?\*\*products=fish\&color=radioactive\\\_green\&size=tiny\*\*Changing](https://example.com/items.shtm?**products=fish&color=radioactive\\_green&size=tiny**Changing) any of the URL parameters `products`, `color`, and `size` would show a different set of items on the underlying page. This often means a very large number of possible combinations of filters, which translates to a very large number of possible URLs. To save your resources, we recommend dealing with these URLs one of the following ways:

- If you don't need the faceted navigation URLs potentially indexed, prevent crawling of these URLs.  
- If you need the faceted navigation URLs potentially indexed, ensure that the URLs follow our best practices outlined in the following section. Keep in mind that crawling faceted URLs tends to cost sites large amounts of computing resources due to the sheer amount of URLs and operations needed to render those pages.

## Prevent crawling of faceted navigation URLs

If you want to save server resources and you don't need your faceted navigation URLs to show up in Google Search or other Google products, you can prevent crawling of these URLs with one of the following ways.

- **Use robots.txt to disallow crawling of faceted navigation URLs.** Oftentimes there's no good reason to allow crawling of filtered items, as it consumes server resources for no or negligible benefit; instead, allow crawling of just the individual items' pages along with a dedicated listing page that shows all products without filters applied. user-agent: Googlebot disallow: /\*?\*products= disallow: /\*?\*color= disallow: /\*?\*size= allow: /\*?products=all\$  
- **Use URL fragments to specify filters.**  If your filtering mechanism is based on URL fragments, it will have no impact on crawling (positive or negative). For example, instead of URL parameters, use URL fragments: [https\://example.com/items.shtm\*\*\#\*\*products=fish\&color=radioactive\\\_green\&size=tiny](https://example.com/items.shtm**#**products=fish&color=radioactive\\_green&size=tiny)

Other ways to signal a preference of which faceted navigation URLs (not) to crawl is using `rel="canonical"` `link` element and the `rel="nofollow"` anchor attribute. However, these methods are generally less effective in the long term than the previously mentioned methods.

- **Using `rel="canonical"` to specify which URL is the canonical version of a faceted navigation URL** may, over time, decrease the crawl volume of non-canonical versions of those URLs. For example, if you have 3 filtered page types, consider pointing the `rel="canonical"` to the unfiltered version: `https://example.com/items.shtm?products=fish&color=radioactive_green&size=tiny` specifies `<link rel="canonical" href="https://example.com/items.shtm?products=fish" >`.  
- **Using `rel="nofollow"` attributes on anchors pointing to filtered results pages** may be beneficial, however keep in mind that every anchor pointing to a specific URL must have the `rel="nofollow"` attribute in order for it to be effective.

## Ensure the faceted navigation URLs are optimal for the web

If you need your faceted navigation URLs to be potentially crawled and indexed, ensure you're following these best practices to minimize the negative effects of crawling the large number of potential URLs on your site:

1. **Use the industry standard URL parameter separator '`&`'.** Characters like comma (`,`), semicolon (`;`), and brackets (`[` and `]`) are hard for crawlers to detect as parameter separators (because most often they're not separators).  
2. If you're encoding filters in the URL path, such as `/products/fish/green/tiny`, ensure that the logical order of the filters always stays the same and that no duplicate filters can exist.  
3. **Return an HTTP `404` status code when a filter combination doesn't return results.** If there are no green fish in the site's inventory, users as well as crawlers should receive a "not found" error with the proper HTTP status code (`404`). This should also be the case if the URL contains duplicate filters or otherwise nonsensical filter combinations, and nonexistent pagination URLs. Similarly, if a filter combination has no results, don't redirect to a common "not found" error page. Instead, serve a "not found" error with the `404` HTTP status code under the URL where it was encountered.

