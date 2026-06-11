# INDIVIDUAL FOOTPRINT – Team 10 (G10)

**Financial Analyzer Pro** – Automated financial health assessment & bank loan comparison platform for Vietnamese SMEs

**Course:** NHA408E – Technology Applications in Finance & Banking  
**Academic year:** 2025–2026

---

## Member 3: Ngô Quốc Huy

| Field | Value |
|-------|-------|
| **Full name** | Ngô Quốc Huy |
| **Student ID** | 2312380011 |
| **Role** | BaseScraper, BIDV Scraper, Database Management |
| **Team** | Team 10 |

### Role in the project

I was responsible for bank loan data collection and processing on the backend. I built the **BaseScraper** class – the common framework for all scrapers – developed the **BIDV scraper**, and participated in building the multi‑bank data aggregation process through **runAll.js**. My work sits at the data input layer of the system. The data collected and normalised by my modules is used in the Loan Comparison, 8‑Factor Loan Scoring, and Best Match Recommendation features.

### Personal mark in the product

**1. BaseScraper – a reusable scraping architecture**  
Instead of building individual scrapers for each bank from scratch, I designed a shared base class that handles website access, error handling, retry logic, fallback data, and data extraction. This class significantly reduces the workload when extending to new banks and creates a unified structure for the entire scraper module. Any child scraper only needs to set its bank name, URLs, and fallback data.

**2. BIDV scraper and fallback data**  
I built the BIDV scraper as a concrete subclass of BaseScraper, configured its two target URLs (interest rate page and personal loan page), and provided a fallback dataset with two packages (working capital loan, medium/long‑term loan with collateral). This ensures that even if live scraping fails, the system always has BIDV loan data to display.

**3. Data aggregation pipeline (runAll.js)**  
I wrote the orchestration module that imports all six bank scrapers, runs them sequentially, catches errors per bank so that one failure does not stop the rest, normalises all output into a common schema, and writes the consolidated data to loans.json. This pipeline is the backbone of the product’s loan data.

### Things actually done

- Built BaseScraper class with puppeteer‑extra and puppeteer‑extra‑plugin‑stealth to reduce the chance of being blocked.
- Designed constructor to accept bankName and urls, allowing each child scraper to reuse the same logic while remaining configurable per bank.
- Built a retry mechanism inside `scrape()`: if the first attempt fails or returns no valid data, the system retries up to 3 times (with 5‑second delays) before using fallback data.
- Built `_scrapeOnce()` to automatically launch a headless browser, create a new page, set user agent and viewport, navigate to the bank URL, wait for page load, and invoke data extraction logic.
- Built `smartExtract(page)` with two strategies: (1) search for HTML tables containing keywords like “lãi suất”, “interest rate”, “%/năm”; (2) if no matching table, scan elements containing the % symbol to locate fallback interest rate data.
- Built helper functions: `parseRate(text)` to extract interest rates using regex, `cleanText(text)` to normalise loan package names, and `extractTerm(text)` to recognise loan terms in years or months and convert to months.
- Built **bidv.js** inheriting BaseScraper, configured with 2 BIDV URLs, and provided fallback data for two loan packages.
- Built **runAll.js** to import all six bank scrapers (Vietcombank, BIDV, MB Bank, Techcombank, VPBank, Sacombank).
- Wrote logic to run scrapers sequentially, catching errors per bank so that if one scraper fails, the others continue.
- Standardised output data in runAll.js by adding required system fields: id, name, packageName, interestRate, processingFee, maxTerm, minLoan, maxLoan, maxLTV, minIncome, pros, cons, requirements, source, loanTypes, lastUpdated.
- Wrote logic to create the database folder if it does not exist.
- Wrote logic to save all scraped data to database/loans.json.
- Added result logging after scraper execution to report which banks succeeded, which failed, and the total number of loan packages saved.

### Files, features, logic contributed

| File / Feature | Path | Function |
|----------------|------|----------|
| baseScraper.js | /backend/scrapers/baseScraper.js | Parent class – manages Puppeteer, retries, fallback, shared data processing |
| bidv.js | /backend/scrapers/bidv.js | BIDV scraper – inherits BaseScraper, configures URLs, provides fallback data |
| runAll.js | /backend/scrapers/runAll.js | Orchestrates all 6 scrapers, isolates errors, normalises output, writes loans.json |
| loans.json | /database/loans.json | Data file created and updated by runAll.js, used by Loan Comparison and Scoring |
| Scraper data pipeline | baseScraper → bidv.js → runAll.js → loans.json | Connects external bank data to the product’s analysis system |

### Evidence of contribution

- **Source code:** baseScraper.js, bidv.js, and runAll.js are in the repository and contain the scraping and aggregation logic I wrote.
- **Output data:** loans.json after a run contains BIDV packages with all standardised fields – this data is consumed by the frontend.
- **Run logs:** The console output of runAll.js shows success/failure per bank and the total number of loans saved.
- **Live demo:** The Bank Comparison tab displays BIDV loan packages, proving that my pipeline works and is integrated.

### How this connects to the final product

My work serves as the data collection and input processing layer for the Financial Analyzer system. The core features – Loan Comparison, 8‑Factor Loan Scoring, and Best Match Recommendation – all require bank loan package data. Without the scraper and data normalisation pipeline, the system could still perform financial calculations, but it would have no real bank data to support meaningful loan comparison and recommendations. From an architectural perspective, my work is the bridge between external data sources and the financial analysis modules.

### What I learned

- **Reusable architecture matters more than building a feature quickly.** Taking the time to build BaseScraper from the start significantly reduced the workload when extending to other banks and made the codebase easier to maintain.
- **Web scraping in practice is less stable than academic examples suggest.** Bank websites change HTML structures, load data via JavaScript, or return inconsistent results. Scrapers cannot rely entirely on fixed selectors – they need multiple fallback layers.
- **Fallback data is not a temporary fix.** For a product with a live demo and real users, ensuring the system always has data to operate on is just as important as retrieving the latest figures.
- **Data should be normalised at the point of collection.** Bank websites present information in many different formats, but the frontend and scoring algorithms should receive only a single unified data structure. Normalising in runAll.js significantly reduced complexity for downstream modules.
- **A good data pipeline must be fault‑tolerant locally.** A single scraper failure should not stop the entire data collection process. Wrapping each scraper in its own error handler allows other scrapers to continue running.

### Challenges and how they were resolved

| Problem | Solution |
|---------|----------|
| **Scraper failures due to slow or unresponsive bank websites** – pages load slowly, time out, or return no data. | Added a retry mechanism to BaseScraper: up to 3 retries with 5‑second delays, then fallback to static data. |
| **A single scraper failure could break the entire aggregation process** – if one bank failed, the whole script stopped. | Wrapped each scraper in its own try/catch block in runAll.js. Errors are logged but other scrapers continue. |
| **Fixed selectors break when websites change HTML structure** – classes and layouts change without notice. | Built `smartExtract()` that searches for HTML tables containing interest rate keywords, or scans for % symbols as a fallback – much more flexible than hard‑coded selectors. |
| **Regex incorrectly matched percentages that were not interest rates** – fee percentages, promotional discounts, savings rates. | Combined regex with logical filtering: only accept rates within a realistic range (0 < rate < 50) and prioritise sections with interest‑rate keywords. |
| **Inconsistent data structure across scrapers** – different field names (rate vs interestRate, loanName vs packageName). | Normalised all data inside runAll.js before writing to loans.json, adding standard fields like packageName, interestRate, maxTerm, etc. |
| **Browser not closed when a scraper encounters an error** – leaving processes hanging. | Moved browser.close() into a finally block so the browser is always closed, regardless of success or failure. |
| **Scraped data could be empty without throwing an error** – the scraper completed but returned []. | Added data validation inside scrape(): if result is empty, retry; only after all retries fail with no data does the system switch to fallback. |

### Message for future students

- **Do not rely entirely on live web scraping.** Bank websites can change at any time. Build fallback data from the beginning and treat it as an official part of the system.
- **Normalise data at the collection layer.** Design a standard data structure before building interfaces or algorithms. Changing the schema later is much harder.
- **Replace JSON with a real database if you continue scaling.** For this project, loans.json was fine, but for production with user accounts and history, migrate to PostgreSQL or Supabase early.
- **Build a scraper monitoring mechanism.** A scraper working today may fail tomorrow. Add automatic checks to detect which scrapers are failing and send alerts.
- **Treat data as a product.** The hardest part was not writing scoring algorithms or building the UI – it was creating a stable and reliable data source for those algorithms to work with.
---

*Team 10 (G10) – Financial Analyzer Pro – NHA408E – 2025–2026 – FTU Hanoi*