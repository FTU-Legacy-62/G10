# INDIVIDUAL FOOTPRINT – Team 10 (G10)

**Financial Analyzer Pro** – Automated financial health assessment & bank loan comparison platform for Vietnamese SMEs

**Course:** NHA408E – Technology Applications in Finance & Banking  
**Academic year:** 2025–2026

---

## Member 4: Nguyễn Trường Phước

| Field | Value |
|-------|-------|
| **Full name** | Nguyễn Trường Phước |
| **Student ID** | 2312380026 |
| **Role** | Data Scraping Engineer – VPBank Scraper, Vietcombank Scraper |
| **Team** | Team 10 |

### Role in the project

As Data Scraping Engineer, I owned the pipeline connecting the product to real interest‑rate data from Vietnamese banks. I was assigned **VPBank** and **Vietcombank**. Three core responsibilities: (1) design and build the VPBank scraper (CSS selector + table fallback), (2) design and build the Vietcombank scraper (regex + keyword‑context for unstructured text), and (3) output normalisation – both scrapers emit the same schema so the rest of the system consumes data without knowing which scraper delivered it.

### Personal mark in the product

**1. Dual‑strategy scraping architecture**  
VPBank uses CSS selector parsing; Vietcombank uses regex with keyword‑context filtering. These are architecturally separate because the problem is architecturally separate. The key design decision was to keep both scrapers behind the same interface – so the backend can call `scrape()` on either one without knowing how the data was obtained.

**2. Three‑tier fallback system that guarantees a non‑empty loan list**  
Every scraper can fail silently – bank websites change HTML, go down for maintenance, or serve bot‑detection pages. My fallback design ensures the system never returns an empty loan list: Tier 1 tries the primary selector strategy, Tier 2 falls back to regex, Tier 3 serves a manually verified static dataset. The frontend sees the same schema regardless of which tier delivered the data.

**3. `extractRate()` validator – noise filter for Vietnamese numeric formats**  
Vietnamese bank websites write numbers with both commas and dots, and a single page can contain dozens of % symbols that have nothing to do with loan interest rates (discounts, promotions, savings rates, penalties). The `extractRate()` function handles both decimal formats, applies a range filter [3%,20%], and rejects round‑number noise. It became the shared utility used by both scrapers.

### Things actually done

- Analysed the page structure of both bank websites before writing code – documented whether each site used structured tables, dynamic JS rendering, or unstructured prose; this analysis directly determined the scraping strategy for each bank.
- Studied Huy’s BaseScraper and understood its retry and proxy‑rotation logic, then extended it separately for VPBank and Vietcombank.
- Built VPBankScraper: Strategy 1 – CSS selector on elements whose class contains ‘rate’ / ‘interest’; Strategy 2 – Cheerio table parser for static‑HTML interest‑rate tables when Strategy 1 returns empty.
- Built VCBScraper: full regex‑based approach scanning all `<p>`, `<div>`, `<li>` elements; rate extraction only fires when the text node also matches the keyword pattern ‘lai suat vay’ or ‘vay von’.
- Wrote `extractRate(text)` – shared utility function: normalises comma/dot decimal formats, applies [3%,20%] range filter, rejects round‑number noise values.
- Designed the three‑tier fallback – Tier 1 (CSS selector), Tier 2 (regex), Tier 3 (static fallback data) – with all tiers outputting the same JSON schema.
- Manually verified fallback data against NHNN public rate disclosures: VPBank reference rate 8.5%/year, Vietcombank 7.5%/year.
- Built a ground‑truth verification process: visited each bank website manually every week, recorded current rates, compared against scraper output to catch silent regression.
- Added structured debug logging to both scrapers: fetched URL, response byte size, all regex matches, every rejected value with reason – making bug reproduction a log‑read rather than a re‑run.
- Ran 30 live scrape cycles per day across both banks to measure real‑world success rates (~75% for VPBank, ~60% for Vietcombank).

### Files, features, logic contributed

| File / Feature | Path | Function |
|----------------|------|----------|
| vpbank.js | /backend/scrapers/vpbank.js | VPBank scraper – dual CSS + table strategy, fallback, logging |
| vietcombank.js | /backend/scrapers/vietcombank.js | Vietcombank scraper – regex + keyword‑context, dedup, fallback |
| extractRate() | Shared across both scrapers | Normalises Vietnamese decimal formats; range filter [3,20]; rejects noise |
| getFallbackData() | Both scrapers | Returns manually verified static rates when all live strategies fail |
| Three‑tier fallback logic | Both scrapers | Tier 1 → Tier 2 → Tier 3; guarantees non‑empty output |
| Debug logging layer | Both scrapers | URL, byte count, matched regex segments, rejection reasons |
| Ground‑truth dataset | Manual, documented weekly | Baseline for accuracy testing; source for fallback rate values |

### Evidence of contribution

- **Source code:** vpbank.js and vietcombank.js in `/backend/scrapers/` – all scraping logic, fallback tiers, and `extractRate()` helper are in these files.
- **Live verification:** Calling POST /api/loans/refresh on the deployed Render URL triggers all scrapers. The presence of VPBank and Vietcombank entries in the response directly confirms my scrapers ran.
- **Fallback data in server.js:** DEFAULT_LOANS in Dat’s server.js contains the VPBank and Vietcombank reference rates I authored and verified – this is the shared safety net for the entire product.
- **Midterm documentation:** Part E of the midterm submission lists ‘Vietcombank + VPBank scraper, three‑tier fallback, output normalisation’ under my name.

### How this connects to the final product

The scrapers are the data intake layer of the entire stack. Every bank comparison the user sees is powered by data that either my scrapers retrieved live from bank websites, or the fallback datasets I verified and authored. If both scrapers return empty and there is no fallback, the comparison tab shows nothing – the product fails its core promise.

| Module | How it helps the product and the user |
|--------|----------------------------------------|
| VPBank Scraper | Delivers up‑to‑date VPBank SME loan packages – the most common private‑bank product Vietnamese SMEs compare |
| Vietcombank Scraper | Covers the largest state‑owned bank; most SMEs already have a Vietcombank relationship and need this data to benchmark |
| Three‑tier fallback | Ensures the comparison table is always populated even when live scraping fails – the user never sees an empty list |
| extractRate() validator | Prevents wrong interest rates from entering the scoring engine – a single corrupted rate would silently skew every downstream comparison |
| Output normalisation | Allows the backend to consume data from all five banks with one schema – no special‑casing per bank |

### What I learned

- **Test on the live site, not a saved snapshot.** The HTML a browser renders after JavaScript execution is not the same as what fetch() receives. This cost me an integration failure that I had to diagnose and fix.
- **No public API means everything is fragile.** Vietnamese bank websites are marketing pages, not data APIs. Any redesign can break the scraper overnight and no bank will notify you. The correct response is not a cleverer scraper – it is robust fallbacks.
- **Keyword specificity beats keyword presence.** ‘Lai suat’ appears in both loan and savings descriptions. ‘Lai suat vay’ is specific to lending. One extra word eliminated an entire class of false positives.
- **Cheerio fires callbacks on nested elements – always deduplicate by value after collection.** This is not documented clearly, and I only discovered it by staring at output with 4 identical entries.
- **Success rate is a product metric, not just a technical metric.** I could have claimed the scraper ‘works’ after a single successful test. Measuring 30 runs per day and reporting 60% honestly was more useful – it told the team how often fallback would fire in production.
- **Log rejection reasons, not just rejections.** Knowing ‘0.5% rejected’ is less useful than ‘0.5% rejected – range filter’. When a new noise pattern appeared (savings rates in the 6–7% range that passed the range filter), my logs made the specific failure case immediately obvious.

### Challenges and how they were resolved

| Problem | Solution |
|---------|----------|
| **VPBank – CSS selector trap** – Product cards injected by JavaScript; static fetch() cannot see them. Strategy 1 returned empty on most live requests. | Added Strategy 2: a table parser targeting `<table tr>` elements, which VPBank renders server‑side even when card components are JS‑dynamic. This brought success rate from 0% to ~75% without Puppeteer. |
| **Vietcombank – noise problem** – 20–30 % symbols on a single page (savings rates, fee structures, promotional discounts, insurance coverage). Naive regex captured all of them. | Combined three independent noise filters: (1) keyword‑context check requiring ‘lai suat vay’ or ‘vay von’, (2) numeric range filter [3%,20%], (3) rejection list for common round‑number noise values. False‑positive count dropped to zero. |
| **Vietcombank – no table structure** – All information in unstructured Vietnamese prose; no `<table>`, no semantic class names. | Switched entirely to regex + keyword‑context strategy. Accepted that success rate would be lower (~60%) and compensated with accurate fallback data. |

### Message for future students

- **→ Migrate Vietcombank to Puppeteer.** The current regex approach works at ~60% but degrades with every page redesign. A headless browser can execute JavaScript and parse fully‑rendered HTML. This is the highest‑ROI upgrade.
- **→ Add automatic structure‑change detection.** Currently, if a bank redesigns HTML overnight, the scraper silently falls back to static data and nobody knows. Add a health check: if live scraper output differs from the last successful run by more than 20%, send an alert.
- **→ Store multiple fallback URLs per bank.** Each bank has a main product page, a business‑loan subpage, and a promotional landing page. If the primary URL fails, try a secondary before giving up. This alone could raise Vietcombank’s success rate to 70–75%.
- **→ Capture promotional rates, not just base rates.** Vietnamese banks frequently run time‑limited promotions (‘Vay uu dai 6.5%/nam trong 6 thang dau’). The current scrapers only target standard‑rate sections. Scraping promotional pages and flagging those rates as time‑limited would significantly improve comparison quality.
- **→ Replace regex context‑matching with a lightweight NLP classifier.** Keyword regex is brittle – it breaks when Vietcombank rephrases product descriptions. A simple sentence classifier trained on ‘loan rate sentence vs not loan rate sentence’ would be far more robust.
---

*Team 10 (G10) – Financial Analyzer Pro – NHA408E – 2025–2026 – FTU Hanoi*