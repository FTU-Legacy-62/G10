# INDIVIDUAL FOOTPRINT – Team 10 (G10)

**Financial Analyzer Pro** – Automated financial health assessment & bank loan comparison platform for Vietnamese SMEs

**Course:** NHA408E – Technology Applications in Finance & Banking  
**Academic year:** 2025–2026

---

## Member 1: Nguyễn Minh Đạt

| Field | Value |
|-------|-------|
| **Full name** | Nguyễn Minh Đạt |
| **Student ID** | 2312380006 |
| **Role** | Backend API, Deployment, Risk Scoring, DeepSeek AI |
| **Team** | Team 10 |

### Role in the project

In Team 10, I was responsible for the backend and DevOps side – building the entire API layer, scoring logic, risk engines, AI integration, and deploying the product to production. My work sat between the database (loans.json) and the live server, ensuring that all financial calculations, loan comparisons, and AI consultations worked reliably. I owned four main areas: (1) the Express.js API server and all its endpoints; (2) the 8‑factor loan scoring, 5‑level Quick Risk, and 7‑dimension Deep Risk engines; (3) the DeepSeek AI Consultant integration; and (4) deploying everything to Render with environment variables, health checks, and uptime monitoring.

### Personal mark in the product

**1. 8‑factor loan scoring algorithm**  
I designed and implemented a scoring system that evaluates each bank loan package on a 100‑point scale across eight weighted criteria: interest rate (25 pts), repayment affordability (20 pts), D/E leverage (10 pts), loan limit fit (10 pts), term fit (10 pts), LTV/collateral (10 pts), income requirement (10 pts), and processing fee (5 pts). The difficult part was not coding but calibrating the weights to reflect real bank underwriting practices. I ran the algorithm against 10 real loan packages from five banks and adjusted weights across five rounds until the rankings matched what a credit officer would expect.

**2. 7‑dimension Deep Risk engine**  
Instead of a single risk number, this engine produces a radar chart across seven independent dimensions: liquidity, leverage, profitability, efficiency, interest risk, experience, and scale. Each dimension scores 0–10 using its own formula (linear, logarithmic, or average‑based). This makes it easy for a business owner to see exactly which area is dragging them down – poor liquidity, high leverage, or low efficiency – without needing to interpret raw financial ratios.

**3. Product deployment and DevOps**  
I deployed the entire backend on Render, configured build and start scripts, set environment variables (DEEPSEEK_API_KEY, PORT, NODE_ENV), and added a health check endpoint. I also set up a monitoring ping every 10 minutes to keep the free‑tier server warm and avoid cold starts during demos. When I accidentally committed an API key to GitHub, I immediately revoked it, generated a new one, added .env to .gitignore, and cleaned the Git history.

### Things actually done

- Built the Express.js API server with endpoints: GET /api/health, GET /api/loans, POST /api/loans/refresh, POST /api/ai/chat, POST /api/risk/quick, POST /api/risk/deep.
- Wrote all eight scoring functions for the loan comparison model, each with its own linear or threshold‑based logic.
- Built the Quick Risk module: takes five financial ratios (D/E, ICR, Profit Margin, Current Ratio, Years), computes a weighted composite score, classifies into five risk levels (Very Low to Very High), and returns specific warnings and strengths for each.
- Built the Deep Risk engine: seven independent dimensions each scored 0–10 using different formulas, plus a composite score calculation.
- Integrated DeepSeek AI API: wrote a system prompt for SME finance context, added a 30‑second AbortController timeout, and handled three distinct error cases (401 authentication, 429 rate limit, network failure) with appropriate fallback messages.
- Designed the database layer: loans.json schema, initDatabase / readDatabase / writeDatabase helper functions, and DEFAULT_LOANS fallback so the app always has data even if scrapers fail.
- Deployed to Render: configured build command, start command, environment variables, health check, and auto‑deploy from the main branch.
- Set up monitoring on /api/health with a 10‑minute interval to keep the free server warm.
- Handled accidental API key leak: revoked the exposed key immediately, generated a replacement, added .env to .gitignore, and cleaned Git history using git filter‑branch.

### Files, features, logic contributed

| File / Feature | Path | Function |
|----------------|------|----------|
| server.js | /backend/server.js | Main server – endpoints, scoring, risk, AI, database helpers |
| package.json | /backend/package.json | Dependencies: express, cors, dotenv, axios, puppeteer |
| package.json (root) | /package.json | Build & start scripts for Render deployment |
| POST /api/risk/quick | server.js | 5 inputs → 5‑tier risk classification + warnings/strengths |
| POST /api/risk/deep | server.js | Full financials → 7‑dimension scores + radar data |
| POST /api/ai/chat | server.js | User question → DeepSeek call → advisory response |

### Evidence of contribution

- **backend/server.js** – Contains all API endpoints, scoring logic, risk engines, AI integration, and database layer. This file is the core of the backend.
- **frontend/index.html** – I also contributed to the frontend financial logic, including the Quick Risk Assessment, Deep Risk Assessment, and Loan Scoring functions that run in the browser.
- **Two package.json files** – One in the backend folder for server dependencies, one in the root for Render deployment scripts.
- **Public URL** – [https://financial-analyzer-ooel.onrender.com](https://financial-analyzer-ooel.onrender.com) – the live product, which is the strongest evidence that my deployment work succeeded.

### How this connects to the final product

The backend is the layer everything else depends on. Without the API server, the frontend has nothing to call. Without the scoring logic, the product is just a data entry form. Without deployment, no one outside the team can see or test anything.

- The **8‑factor algorithm** turns six inputs from the user into a recommended loan package with a clear “Best Match” label.
- The **Quick Risk** module gives users a precise 0–100 score and a five‑tier risk classification, along with plain‑language warnings (e.g., “Your interest coverage ratio is low – you have fewer options for high‑rate plans”).
- The **Deep Risk** engine produces a radar chart showing which of the seven dimensions is weakest, enabling targeted improvements.
- The **AI Consultant** allows users to ask follow‑up questions in everyday Vietnamese and receive personalised advice.

### What I learned

- **API security and environment configuration** – I accidentally committed a DeepSeek API key to GitHub. GitHub’s secret scanning flagged it. I learned to revoke keys immediately, use .gitignore from day one, and clean history with git filter‑branch.
- **Handling timeouts and errors** – DeepSeek API sometimes takes a long time. I added an AbortController with a 30‑second timeout and categorised errors (401, 429, network) with user‑friendly messages.
- **Algorithms need real‑world validation** – My first weight set produced rankings that didn’t feel right. I ran five calibration rounds manually, comparing algorithm output to what a financially literate person would expect, until the results were consistently reasonable.
- **Deploy early, maintain production parity** – Differences between localhost and a Linux cloud environment (file paths, environment variables, cold starts) caught me off guard. Deploying early and testing often saved us from last‑minute surprises.

### Challenges and how they were resolved

| Problem | Solution |
|---------|----------|
| DeepSeek API timeout – requests would hang indefinitely, freezing the UI | Added AbortController with 30s timeout, plus fallback messages for each error type |
| Render free‑tier cold starts – first request after 15 minutes of inactivity takes ~30 seconds | Set up a ping to /api/health every 10 minutes to keep the server warm; added a skeleton loader on the frontend |
| Scoring weight calibration – initial weights produced unrealistic rankings | Ran five calibration rounds, manually checking each profile and adjusting weights until output was consistently reasonable |
| Accidental API key exposure – committed .env to public repository | Revoked key immediately, generated a new one, added .env to .gitignore, used git filter‑branch to remove the commit from history |

### Message for future students

- **Set up .gitignore before your first commit** – include .env, node_modules, and any file with credentials. It takes two minutes and prevents a painful cleanup later.
- **Deploy early** – even with just one working endpoint, get it running on Render in week one. Production surfaces problems that localhost hides.
- **JSON database is fine for a demo, but switch to a real database (Supabase) early if you plan to scale** – refactoring from JSON to SQL after building many features is not fun.
- **The AI Consultant becomes much more useful with context** – pass the user’s risk scores and loan ranking into the system prompt. The AI will then give specific, situation‑aware advice.
- **Validate scoring weights with someone from a bank** – textbook knowledge is only a starting point; real credit officers can tell you what weights actually make sense.
---

*Team 10 (G10) – Financial Analyzer Pro – NHA408E – 2025–2026 – FTU Hanoi*