## Generative Engine Optimization: How to Dominate AI Search

### Source and interpretation

- Authors: Mahe Chen, Xiaoxuan Wang, Kaiwen Chen, Nick Koudas (University of Toronto).
- Source: [arXiv:2509.08919v1](https://arxiv.org/abs/2509.08919), September 10, 2025.
- Data collection: August 2025.
- Document type: Condensed, structured research knowledge base, not a verbatim transcription.
- Interpret numerical results as historical observations from the tested systems. Recommendations are the authors' proposed strategies, not experimentally established causal ranking factors or guarantees.

### 1. Core principles of GEO

Generative Engine Optimization (GEO) concerns visibility within synthesized AI answers, recommendations and citations, rather than only positions in traditional search engine results pages (SERPs).

- Optimize for inclusion in a justified shortlist, not merely discoverability.
- Make it easy for AI systems to extract accurate reasons to recommend a business or product for a specific use case.
- Build independent, verifiable third-party authority in addition to publishing owned content.
- Maintain technical SEO as a foundation; GEO complements rather than eliminates it.
- Treat the website as a machine-readable information interface for AI agents.
- Adapt strategies to each engine, language, vertical and query intent.
- Monitor AI visibility continuously because citation ecosystems and recommendations change.

The paper observes a transition from retrieval toward decision support and agency. Users delegate comparison, price research, purchasing preparation and other tasks rather than merely requesting links.

### 2. Media classification

| Media type | Definition | Examples |
|---|---|---|
| Brand | Official websites of businesses, manufacturers or retailers providing products or services | Apple, Toyota, Chase, Best Buy |
| Earned | Independent publications, review sites, editorial comparison sites and institutional sources | TechRadar, Consumer Reports, NerdWallet, government portals |
| Social | Community platforms, forums and user-generated media | Reddit, Quora, YouTube, Facebook |

Earned media dominates most AI ranking and consideration experiments. Brand sources become more important for transactional queries. Social sources are generally less prevalent than in Google, especially for GPT, but can be significant for Perplexity. These are tendencies, not universal rules.

### 3. User query taxonomy and search intent

#### General AI use cases (source §3)

The authors analyzed AI-focused Reddit communities and identified 12 recurring categories: coding assistance, prompt improvement, creative writing, shopping and purchase support, prompt engineering, multimedia content creation, self-improvement, business/analytics/strategy, lifestyle and mental health coaching, career development, self-study and learning, and image/asset generation.

#### Shopping and decision-support queries

The expanded Reddit analysis identified 14 themes:

1. Product evaluation and recommendations tailored to budget, features and use case.
2. Product selection, price research and comparisons across retailers.
3. Product quality assessment and review analysis.
4. Purchase decision support and negotiation, including warranty and target-price analysis.
5. Shopping automation and assistance.
6. Shopping list creation and store-specific sourcing.
7. Product sourcing, supplier discovery and availability.
8. Marketplace reselling and valuation.
9. Booking and reservations.
10. Gifting and occasion-based selection.
11. Lifestyle and fashion advice.
12. Meal planning based on promotions.
13. Product specification extraction.

The paper states 14 categories but the enumerated themes in its text total 13; no additional category is invented here.

Key observations: decision support dominates; users increasingly delegate actions; some entrust AI with high-value decisions; the behaviors span multiple verticals and the entire purchase journey.

#### Search intent and source mix (source §4.3; figures 18–20)

| Intent | User goal | Observed source preference |
|---|---|---|
| Informational | Learn or understand a subject | Google balances source types; GPT favors Earned; Perplexity gives substantial weight to Brand |
| Consideration | Compare alternatives and evaluate trade-offs | Earned dominates overall; GPT is especially earned-heavy; Google retains substantial Social; Perplexity is more mixed |
| Transactional | Purchase, obtain a price or take action | Brand rises across systems; GPT uses Brand most strongly with Earned secondary; Perplexity blends Brand and Earned |

### 4. Research methodology (source §4.1)

- Google results collected through Programmable Search / Custom Search API, not necessarily identical to consumer-facing Google SERPs.
- Web-enabled models tested: gpt-4o-search-preview; Perplexity sonar-pro with medium search context; claude-3.5-sonnet-latest with web_search_20250305; Gemini gemini-2.5-flash with Google Search grounding.
- Ranking-style prompts standardized across engines; translations and paraphrases generated using GPT-4o.
- Collect answer text and citation URLs; normalize URLs to registrable domains; deduplicate within query and engine; extract mentioned brands from responses.
- Classify domains using predefined rules and AI-assisted labeling.
- Coverage@k = count of shared unique domains / k, for equal-sized top-k sets.
- Jaccard overlap = intersection size / union size, for variable-length domain or brand sets.
- Aggregate per-query overlaps by vertical; calculate source distributions from pooled deduplicated citations.
- Citation presence, brand mention and recommendation rank are different concepts and should be measured separately.

### 5. AI search vs. Google: empirical findings

#### Regional and vertical comparisons (source §4.2.1; figures 1–4)

1,000 consumer ranking prompts, 10 categories × 100 prompts, tested with US and Canadian constraints. The reported focus is automotive, consumer electronics and software.

| Vertical | Region | Google Earned | GPT Earned | Google Brand | GPT Brand | Google Social | GPT Social |
|---|---|---:|---:|---:|---:|---:|---:|
| Automotive | Canada | 40.6% | 69.1% | 36.6% | 30.9% | 22.8% | 0% |
| Automotive | US | 45.1% | 81.9% | 39.5% | 18.1% | 15.4% | 0% |
| Electronics | Canada | 54.1% | 77.6% | 22.8% | 22.1% | 23.1% | 0.3% |
| Electronics | US | 51.7%* | 92.1% | 32.9% | Not specified | 15.4% | Negligible |
| Software | Canada | 31.8% | 74.2% | 53.8% | 25.8% | 14.4% | 0% |
| Software | US | 45.4% | 72.7% | 43.7% | 26.7% | 10.9% | Negligible |

*Calculated as the remainder of the two reported shares.

Example top-k domain overlap between Google and GPT: smartphones 15% (top 5), 20% (top 10); laptops 32%, 41%; electric cars 33%, over 50%. Even where overlap is higher, AI can favor a different media mix.

#### Local search (source §4.2.2; figure 5)

| Business category | Google/AI domain overlap |
|---|---:|
| Home cleaning | 20.6% |
| Roofing | 17.1% |
| Tax preparation | 15.4% |
| Dentists | 11.9% |
| Auto repair | 2.5% |
| IT support | 0.1% |

Local AI discovery is highly fragmented. Traditional local SEO alone does not ensure AI visibility. These percentages measure domain overlap, not business recommendation probability or conversion rates.

### 6. Engine-specific sourcing behavior (source §5.2.1)

| Engine | Established brands: Earned / Brand / Social | Niche brands: Earned / Brand / Social |
|---|---|---|
| ChatGPT | 93.5% / 6.5% / 0% | 95.1% / 4.9% / 0% |
| Claude | 87.3% / 6.8% / 5.9% | 86.3% / 10.6% / 3.2% |
| Perplexity | 67.4% / 8.8% / 23.8% | 73.4% / 9.1% / 17.5% |
| Gemini | 63.4% / 25.1% / 11.5% | 66.4% / 21.2% / 12.7% |

Values are as reported; rounding or source inconsistencies can prevent totals from equaling 100%.

Agreement between pairs of engines: 76–81% for established brands; 71–76% for niche brands. Agreement is based on matching brand answers, not citation domains.

#### Engine strategy matrix (authors' recommendations, §5.3)

| Engine | Observed tendency | Recommended optimization |
|---|---|---|
| ChatGPT | Strong editorial/earned preference; highly localized citation domains | Obtain independent expert coverage, particularly in the target language; provide extractable comparisons and evidence |
| Claude | Strong earned preference; frequent reuse of English-language authorities | Build coverage in globally recognized English-language specialist publications |
| Perplexity | More varied sources, including retailers, YouTube and community content; strong localization | Combine local earned media, accurate retailer listings, useful video reviews and authentic community engagement |
| Gemini | Relatively greater use of brand-owned content; mixed localization | Combine high-quality structured owned content with independent validation |

These strategies are hypotheses informed by source-selection observations, not measured optimization uplift.

### 7. Vertical sensitivity, freshness and source diversity

#### Freshness (source §5.2.2; figures 24–25)

| Vertical | Engine | Earned | Brand | Social |
|---|---|---:|---:|---:|
| Consumer electronics | Claude | 93.7% | Limited | Limited |
| Consumer electronics | GPT | 93.6% | Limited | Limited |
| Consumer electronics | Perplexity | 53.3% | 31.6% | 15.1% |
| Automotive | Claude | 81.6% | About 17–18% | Limited |
| Automotive | GPT | 82.9% | About 17–18% | Limited |
| Automotive | Perplexity | 55.5% | 34.6% | 9.9% |

Claude electronics: 92.5% dated-link coverage, mean age 117 days, median 62 days, freshness score 0.0617, adjusted score 0.0571.

Claude automotive: about 61% dated-link coverage, mean age 331 days, median 148 days, freshness score 0.0441, adjusted score 0.0269.

GPT showed similar tendencies; Perplexity returned somewhat newer but less consistently dated material in electronics and more recent retail/social material in automotive. No universal preference for recent content was proven.

Freshness measurement: extract publication/update candidates from HTML metadata, JSON-LD, time tags and page text; use GPT to choose plausible date when necessary. Age is days since publication. Freshness score = mean of 1/(1 + age); coverage-adjusted freshness = score × proportion of dated links.

Examples of frequently cited domains: electronics — TechRadar, Tom's Guide, RTINGS, Wikipedia, CNET, Best Buy, YouTube; automotive — Consumer Reports, Car and Driver, Edmunds, US News, Wikipedia, AP, Reuters, YouTube, Cars.com. These are observed examples, not universal placement targets.

#### Automotive subtopics (source §5.2.3; figure 26)

| Topic | Google Earned / Brand / Social | GPT Earned / Brand / Social | Perplexity Earned / Brand / Social |
|---|---|---|---|
| Electric cars | 56 / 26 / 18% | 80 / 19 / <1% | 67 / 29 / 4% |
| Family SUVs | 46 / 31 / 23% | 81 / 19 / 0% | 58 / 32 / 9% |
| Hybrids | 56 / 24 / 20% | 77 / 23 / 0% | 62 / 34 / 5% |

Google frequently used Reddit, Quora and Facebook; GPT emphasized institutional and editorial sources; Perplexity frequently included YouTube alongside specialist publications.

#### Cross-engine diversity (source §5.2.4; figures 27–28)

| Vertical | Claude distinct domains | GPT distinct domains | Perplexity distinct domains | Claude–GPT Jaccard | Claude–Perplexity Jaccard | GPT–Perplexity Jaccard |
|---|---:|---:|---:|---:|---:|---:|
| Automotive | 350 | 212 | 347 | 0.147 | 0.251 | 0.096 |
| Electronics | 242 | 179 | 268 | 0.150 | 0.200 | 0.088 |

Exclusive domain shares (Claude/GPT/Perplexity): automotive 50.3%/60.8%/56.5%; electronics 55.8%/67.6%/67.2%. Only a small core of authority domains is shared. Audit each engine separately.

#### Local service diversity (source §5.2.5; figures 29–31)

100 ranking queries per category, up to ten links per engine per query.

| Category | Claude distinct domains | Gemini | GPT | Perplexity |
|---|---:|---:|---:|---:|
| Auto repair | 51 | 98 | 53 | 117 |
| Dentists | 64 | 151 | 51 | 138 |
| Moving companies | 39 | 108 | 61 | 62 |

Auto repair exclusive shares (Claude/Gemini/GPT/Perplexity): 35/55/62/63%. Dentists: 40/54/68/54%. Moving companies: Claude 51%, GPT 61%, Perplexity 45%. Gemini–Perplexity overlap was 0.23 for dentists and 0.25 for movers. Only a handful of sources, including aggregators such as HomeStars and OpenCare, appeared across all four systems.

Practical implication: identify relevant local directories, review aggregators and independent local publications from actual citations for the target business category and geography. Do not assume a single directory strategy works everywhere.

### 8. Big-brand bias (source §5.2.6; figures 32–39)

50 unbranded cola/soda prompts compared curated major and niche brand lists.

| Engine | Major mentions | Niche mentions | Other mentions |
|---|---:|---:|---:|
| ChatGPT | 56.3% (274/487) | 12.3% (60) | 31.4% (153) |
| Perplexity | 67.9% (339/499) | 5.8% (29) | 26.3% (131) |
| Combined | 62.2% | 9.0% | 28.8% |

Perplexity showed a stronger major-brand tilt despite its broader source ecology. GPT's top citation domain was Wikipedia (~19.7%); Perplexity's was YouTube (~8.9%), with a broad long tail (~60.6% in the Others bucket).

Authors recommend niche businesses focus on a narrow segment, publish deep specialist content, secure validation from specialty publications and develop credible review/video/community coverage. The cola experiment alone does not establish the magnitude of big-brand bias in other industries.

### 9. Persona effects (source §5.2.7; figures 40–42)

Bank ranking prompts targeted young professionals, mid-career families and retirees. Across four engines and all personas: Earned 64.6%, Brand 34.1%, Social 1.2%.

Engine identity explained more variation than persona. Gemini was most brand-oriented; Perplexity more balanced; Claude and GPT most earned-oriented. Retiree prompts sometimes increased brand-source share. Bankrate and NerdWallet were leading authority domains, alongside financial and mainstream business publications.

### 10. Language sensitivity (source §§4.2.3, 5.2.8; figures 6–12, 43–46)

100 English base prompts across 10 consumer verticals translated into Chinese, Japanese, German, French and Spanish.

- Google cross-language domain Jaccard mostly 0–0.1, peak around 0.11.
- Claude shows the highest cross-language domain stability, frequently reusing English authority sources.
- GPT has near-zero cross-language domain overlap, switching strongly to distinct language-specific citation ecosystems.
- Perplexity and Gemini show limited cross-language domain reuse; Gemini has some German overlap around 0.32; Perplexity German laptop overlap around 0.22.
- GPT and Perplexity are more local-language-heavy than Google overall; Gemini is mixed; Claude is strongly English-heavy.
- In the AI-only comparison, Japanese and French show strong localization, Chinese also strongly localizes (with a larger English slice for some engines), German and Spanish are more mixed.
- Google's Chinese results were an exception: English accounted for over three quarters of citations in the study.
- Brand overlap is higher than domain overlap; similar brands may be recommended using entirely different evidence sources.
- Earned-source preference persists across languages, with engine identity explaining much of the media-type variation.

Recommended dual-path multilingual strategy: translate and localize owned content, but also secure coverage from authoritative publishers in the target language for GPT/Perplexity and maintain English-language authority for Claude. Map citation ecosystems for each target language. Arabic and Darija were not tested.

### 11. Paraphrase sensitivity (source §§4.2.4, 5.2.9; figures 13–17, 47–49)

Seven variants of each base query: require justification, require sources, require quotes, request confidence scores, demand ranked order, imperative-list wording, and keyword-only wording.

- Language changes generally affect domain selection more than wording changes within a language.
- Google domain overlap is often near 0.1, but reaches 0.5–0.7 for imperative or keyword variants (peak around 0.73).
- AI cross-paraphrase domain overlap often falls around 0.3–0.7; its media-type distribution is more stable than Google's.
- GPT brand overlap frequently exceeds 0.6–0.7; Gemini generally around 0.4–0.7; Perplexity comparable on average, varying by vertical.
- Brand recommendations are typically more stable than cited domains.

Practical implication: test multiple phrasings, but prioritize meaningful intent, language and engine coverage over minor keyword variation.

### 12. On-site optimization framework (authors' recommendations, §§3.2, 4.4, 5.3)

#### Engineer content for machine scannability

- Publish explicit product/service specifications, pricing, availability, warranties and review information where relevant.
- Use technically sound SEO and appropriate Schema.org structured data for actual entities and factual attributes.
- Make important information readily extractable; avoid vague marketing copy and ambiguous claims.
- Ensure information is accurate and suitable for AI agents that compare or act on it.

#### Create justification assets

- Clearly state which audience, constraint or use case the offering serves.
- Use comparison tables covering meaningful decision factors, alternatives and previous versions when relevant.
- Provide explicit pros and cons, trade-offs, factual value propositions and supporting evidence.
- Explain why an offering is appropriate for a specific situation instead of merely declaring it the best.
- Provide expert-level content and independently verifiable details.

#### Cover the complete customer lifecycle

| Stage | Content assets |
|---|---|
| Awareness | Educational explanations and best-X-for-Y guides |
| Consideration | Comparison pages, specification sheets, testimonials |
| Decision | Pricing, warranty, shipping and availability information |
| Post-purchase | FAQs, troubleshooting guides, tutorials and support documentation |
| Loyalty/advocacy | Accessories, advanced uses, trade-in programs |

#### Build independent authority

- Identify authoritative publications, review sites and institutions actually cited in the vertical.
- Conduct media outreach and public relations to obtain legitimate reviews, features and mentions.
- Collaborate with experts and credible institutions.
- Earn reputable backlinks and independent customer reviews.
- Build demonstrable experience, expertise, authoritativeness and trustworthiness (E-E-A-T).
- Prioritize specialty publications for niche businesses and local-language authority for multilingual markets.

The paper proposes schema, backlinks and E-E-A-T as important strategic inputs; its comparative experiments do not isolate their causal effects on AI ranking.

### 13. Continuous GEO operating system (source §6)

The paper proposes five connected pillars:

1. **Engine-specific competitive intelligence:** map citation networks for core topics across GPT, Claude, Gemini and Perplexity. Identify repeated publications, video creators, retailers and other evidence sources.
2. **Structured content and justification framework:** audit existing content for extractable comparisons, explicit value propositions and machine-readable factual data. Plan assets according to observed evidence gaps.
3. **Authority-building and earned media pipeline:** prioritize target publications from the citation network and conduct ongoing outreach for credible features, reviews and expert contributions.
4. **Ranking defense and monitoring:** monitor core shortlist queries; investigate declining visibility or competing brands' gains; respond with stronger evidence, new earned coverage or improved structured information.
5. **Integrated metrics-driven execution:** connect intelligence, content planning, outreach and monitoring in a dashboard/workflow. Use results to prioritize investment and assess the impact of interventions.

### 14. AI-ready audit workflow (operational synthesis of the paper, not a validated scoring model)

When applying this research to a website or business:

1. Identify the business, audience, geography, language, products/services, competitors and purchase journey.
2. Create representative informational, consideration and transactional query sets, including use-case-specific and localized queries.
3. Run the same queries across target web-enabled AI engines and, if relevant, Google.
4. Record each response, cited URL, normalized domain, brand mention, recommendation position when available, media type, language and test date.
5. Measure brand mention rate, citation frequency, source-type distribution, recommendation rank where explicit, and domain overlap. Treat these as separate metrics. Repeat queries to assess stability.
6. Identify recurring earned sources and engine-specific sources; evaluate which credible placements are feasible.
7. Audit owned pages for missing factual attributes, comparisons, FAQs, lifecycle content and appropriate structured data.
8. Produce a prioritized plan separating on-site improvements, independent authority building, language-specific initiatives and engine-specific initiatives.
9. Retest using the same baseline query set. Document changes and confounding factors; avoid attributing all changes to a single intervention.

Suggested machine-readable audit record (derived implementation example, not supplied by the researchers):

```json
{
  "query": "",
  "intent": "informational|consideration|transactional",
  "vertical": "",
  "region": "",
  "language": "",
  "engine": "",
  "model_version": "",
  "tested_at": "",
  "response_text": "",
  "recommendations": [{"brand": "", "rank": null}],
  "citations": [{"url": "", "domain": "", "media_type": "brand|earned|social", "language": "", "publication_date": null}],
  "target_brand_mentioned": false,
  "target_domain_cited": false
}
```

No universal GEO score, weighting formula, guaranteed placement or intervention uplift is established by this paper. Any scoring system constructed from these observations should be labeled as a heuristic and validated against actual outcomes.

### 15. Limitations and evidence boundaries (source §7)

- Temporal limitation: observations reflect August 2025 models and search behavior. Revalidate before using the statistics as current benchmarks.
- Classification limitation: Brand/Earned/Social categories are constructed and sometimes ambiguous. Different taxonomies could yield different percentages.
- Black-box limitation: researchers do not have internal query logs, ranking models, training data or user data. Source-selection patterns do not establish internal ranking mechanisms.
- Methodology scope: many experiments use consumer ranking prompts and API-based search; findings should not automatically be generalized to every query type, geography, industry or consumer interface.
- Reddit examples describe observed use cases, not representative population-level frequencies.
- Proposed GEO tactics are strategic interpretations of the comparative results, not controlled intervention tests within this paper.
- Related work cited in §2.1 (Aggarwal et al., 2024, [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735)) reported visibility improvements up to 40% in its own experiments. This is not a result of the present study or a guarantee for any website.

### 16. Instructions for an AI using this knowledge base

- Distinguish measured findings from proposed optimization strategies and from the operational synthesis in section 14.
- Use the findings to generate hypotheses, audit criteria and test plans rather than inventing proven ranking factors.
- Do not present the historical media-share percentages as current universal statistics.
- Tailor recommendations to actual query intent, engine, language, local market and business type.
- Prefer accurate and verifiable information and genuine independent validation over fabricated reviews, unsupported claims or manipulative placements.
- If evidence is missing, identify the gap and propose a way to test it.

