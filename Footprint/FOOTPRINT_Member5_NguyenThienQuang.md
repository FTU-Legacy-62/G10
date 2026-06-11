# INDIVIDUAL FOOTPRINT – Team 10 (G10)

**Financial Analyzer Pro** – Automated financial health assessment & bank loan comparison platform for Vietnamese SMEs

**Course:** NHA408E – Technology Applications in Finance & Banking  
**Academic year:** 2025–2026

---

## Member 5: Nguyễn Thiện Quang

| Field | Value |
|-------|-------|
| **Full name** | Nguyễn Thiện Quang |
| **Student ID** | 2312380029 |
| **Role** | MB Bank scraper, Techcombank scraper, scraper integration |
| **Team** | Team 10 |

### Role in the project

Quang worked on data collection for Team 10. The system pulls loan information from six bank websites, and every bank has its own scraper on top of a shared base class. Huy wrote BaseScraper and the BIDV scraper, Phước did VPBank and Vietcombank, and Quang took the two remaining banks – **MB Bank** and **Techcombank** – together with the runner that ties all six scrapers together and saves their output into one data file (loans.json).

### Personal mark in the product

**1. Two clean, minimal scrapers (MBBankScraper, TechcombankScraper)**  
Each scraper is a short subclass of BaseScraper, setting only the bank name, the list of pages to visit, and a fallback dataset. Keeping them this small was intentional – when a bank changes its website, only one short file needs to be fixed instead of the whole scraping module.

**2. The runner (runAll.js)**  
This script runs all six scrapers, catches errors from any single one so the others keep going, gives every loan record the same set of fields, and writes everything to loans.json in one pass. It also logs success/failure per bank and the total number of packages saved.

**3. Fallback data for MB Bank and Techcombank**  
Vietnamese bank sites load most content with JavaScript and change layout often, so live scraping is not reliable. The fallback datasets I prepared for MB Bank (Vay sản xuất kinh doanh 6.0%, MISA Lending 5.8%) and Techcombank (Vay doanh nghiệp SME 5.99%, Vay tín chấp doanh nghiệp 13.78%) are what the base class uses once its retries run out – this ensures the comparison screen always shows real loan packages during a demo.

### Things actually done

- Built the MB Bank scraper in **mbbank.js**: set the two MB Bank pages (the rates page and the personal‑loan page) and a fallback list of two packages.
- Built the Techcombank scraper in **techcombank.js** the same way, with a fallback list of two packages.
- Wrote **runAll.js** to load the six scrapers, run each one inside a try/catch, gather the successful results into a single array, and save that array to database/loans.json.
- Set up the common record format used while collecting (id, processingFee, maxLTV, minIncome, source timestamp, loanTypes, lastUpdated) so every bank’s data comes out in the same shape.
- Added a log line for each bank in the runner, either the number of packages it returned or its error message, so a broken bank is easy to spot.
- Read through BaseScraper to understand what the subclasses inherit (Puppeteer with stealth plugin, three retries five seconds apart, and the smartExtract logic) and checked that both scrapers fall back correctly when no rate table is found.
- Tested the whole flow with **runOnce.js**, confirming that loans.json comes out valid and that one failing scraper does not stop the rest.

### Files, features, logic contributed

| File | Path | Function |
|------|------|----------|
| mbbank.js | /backend/scrapers/mbbank.js | MB Bank scraper – target pages and fallback dataset |
| techcombank.js | /backend/scrapers/techcombank.js | Techcombank scraper – target pages and fallback dataset |
| runAll.js | /backend/scrapers/runAll.js | Runs all six scrapers, isolates errors, consolidates, writes loans.json once |
| runOnce.js | /backend/runOnce.js | One‑shot entry point that triggers runAll to set up the database |
| loans.json | /database/loans.json | Output written by runAll and read by the backend at GET /api/loans |

### How data flows end to end

1. runOnce.js, or a POST to /api/loans/refresh on the server, calls runAllScrapers().
2. The runner goes through the six scrapers in turn. Each `scrape()` tries the live pages up to three times, then falls back to its own dataset.
3. Each package that comes back is reshaped and added to one array. A bank that throws is recorded as an error and skipped, so it cannot take down the others.
4. The array is written to database/loans.json in a single pass, so the scrapers never fight over the file.
5. The backend serves that file at GET /api/loans, and the Bank Comparison tab on the frontend reads it and ranks the packages for the user.

### Evidence of contribution

- **Source code:** mbbank.js, techcombank.js, and runAll.js in the repository show the URLs, the fallback datasets, the error‑isolated loop, and the single write to loans.json.
- **Output data:** database/loans.json after a run contains the MB Bank and Techcombank packages with the shared fields (id, interestRate, maxTerm, source timestamp, lastUpdated).
- **Run logs:** The console output of `node runOnce.js` shows one success‑or‑fallback line per scraper and the final count of loans saved.
- **Demo:** The Bank Comparison tab in the running app shows MB Bank and Techcombank packages coming from these scrapers.

### How this connects to the final product

loans.json is the single file the rest of the system reads. The backend serves it at GET /api/loans, and the Bank Comparison tab on the frontend uses it to rank loan packages by how well they fit a user’s profile. Without my two banks, two of the six options in that comparison would be missing. Without the runner and fallback data, the comparison could come up empty or out‑of‑date during a demo, since the live pages often return nothing. In other words, this work ensures the comparison feature has a complete and steady set of data to work from.

### What I learned

- **Inheritance saved a lot of repetition.** Because the shared logic lived in BaseScraper, each new bank only took a few lines, and one fix in the base class helped every scraper at once.
- **It is safer to plan for scraping to fail than to assume it works.** Bank sites change and block bots, so good fallback data turned out to matter more than a perfect live scrape.
- **Handling failure separately for each source keeps the whole pipeline alive.** Wrapping every scraper in its own try/catch meant one bad bank did not bring down the run.
- **Letting a single place write the file saved a lot of trouble.** The scrapers just return data and the runner does the one write, which kept loans.json consistent.
- **I had to actually read the code I was building on.** Understanding what Puppeteer, the stealth plugin, and smartExtract were doing was the only way to explain why my scrapers behaved the way they did.

### Challenges and how they were handled

| Problem | Root cause | Proposed fix |
|---------|------------|---------------|
| **Both scrapers always fell back to static data** – neither ever returned a live rate. | In `smartExtract()`, `parseRate()` and `cleanText()` are called inside `page.evaluate()`, where `this` is not the scraper object and those functions (Node‑side) do not exist. | Pull only raw text out of the browser and do the parsing back in Node. (This fix sits in the shared base class.) |
| **A fully failed run could wipe the database** – if all six scrapers fail, `allLoans` becomes `[]` and the good data in loans.json is replaced with an empty array. | The write is unconditional. | Guard the write: only write if `allLoans.length > 0`; otherwise keep the old loans.json. |
| **The refresh runs the banks one at a time** – sequential execution + retries means a full refresh can take minutes. | Each scraper can retry 3 times with 5‑second delays, so total time is the sum of all banks. | Run the banks concurrently using `Promise.allSettled` – total time becomes roughly the slowest single bank, while keeping error isolation. |
| **Loan ids change on every run** – ids are reassigned from 1 each run, and there is no deduplication. | `PUT /api/loans/:id` edits a package by its id; after a refresh, an edit made before may land on a different package. | Generate a stable id from `bank name + package name`, and skip duplicates using a Set. |

### Message for future students

- **Read the base class before you write a scraper.** Most of the behaviour is already there; you mainly set the URLs and the fallback data.
- **Do not count on the live bank sites.** Always prepare fallback data so a demo does not break when a page is down or has changed.
- **Match tables by their text or structure rather than by CSS class.** Banks rename their classes often, and a fixed selector breaks the next week.
- **Keep each source in its own try/catch and let one module own the file write.**
- **If you want real live data from these JavaScript‑heavy pages, keep the Puppeteer path but tune it for each bank.** That is the obvious next step beyond fallback data.

---

*Team 10 (G10) – Financial Analyzer Pro – NHA408E – 2025–2026 – FTU Hanoi*
---

*Team 10 (G10) – Financial Analyzer Pro – NHA408E – 2025–2026 – FTU Hanoi*