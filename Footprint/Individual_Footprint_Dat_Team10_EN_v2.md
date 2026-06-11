**FOREIGN TRADE UNIVERSITY**

**Faculty of Banking and Finance**

*NHA408E - Technology Applications in Finance & Banking*

**INDIVIDUAL FOOTPRINT**

**Financial Analyzer**

*Automated SME Financial Health Assessment & Bank Loan Comparison*

  -----------------------------------------------------------------------
  **Full name**          Nguyễn Minh Đạt
  ---------------------- ------------------------------------------------
  **Student ID**         2312380006

  **Role in project**    Backend API, Deploy, Risk Scoring, DeepSeek AI

  **Team**               Team 10 - G10

  **Course**             NHA408E

  **Academic year**      2025 - 2026

  **Submission date**    12/06/2026
  -----------------------------------------------------------------------

*Hanoi, 2026*

**I. ROLE IN THE PROJECT**

In Team 10, I was responsible for the backend and DevOps side of the
project. That basically means I built and maintained everything between
the database and the live server - the API layer, the scoring logic, the
risk engines, the AI integration, and getting the whole thing deployed
online.

The job division was: Tuan took the frontend (the 7 - tab web
interface), Huy built the BaseScraper, BIDV scraper and managed the
database structure, Phuoc wrote the Vietcombank and VPBank scrapers, and
Quang did MBBank and Techcombank. My job was to wire it all together
through the backend API and make sure it actually ran in production.

Concretely, I owned 4 areas:

1.  The Express.js API server and all its endpoints.

2.  The 8-factor loan scoring, 8‑tier Quick Risk, and 7‑dimension Deep
    Risk.

3.  The DeepSeek AI Consultant integration.

4.  Deploying everything to Render with environment variables, health
    checks, and uptime monitoring.

**II. PERSONAL MARK IN THE PRODUCT**

Three most significant works of mine are

1.  **The 8 - factor loan scoring algorithm**

> It scores each bank loan package on a 100 - point scale across eight
> weighted criteria - interest rate gets 25 points, repayment
> affordability gets 20, and the remaining six criteria each get 10 or
> 5. What made this harder than just writing the code was figuring out
> whether the weights actually made financial sense. I ran the algorithm
> against 10 real loan packages from the five banks and adjusted the
> weights until the ranking output matched what you\'d expect a credit
> officer to prefer. That calibration process took longer than the
> coding.

2.  **The 7 - dimension Deep Risk engine:**

> Instead of giving a single risk number, it produces a radar chart
> across seven independent dimensions - liquidity, leverage,
> profitability, efficiency, interest risk, experience, and scale. Each
> dimension is scored 0--10 on its own formula. It makes it genuinely
> easy for a business owner to see which specific area is dragging them
> down.

3.  **Product deployment:**

> Setting up the backend on Render and using the DeepSeek API were
> significant challenges faced during development. While everything
> functioned well on the local end, deployment to production led to
> numerous failures related to API calls because of timeouts,
> authentication problems, and improperly set environment variables.
> This issue was tackled through setting up the appropriate build and
> start commands in Render, securing environment variables and allowing
> a 30-second timeout period for API calls.

**III. THINGS ACTUALLY DONE**

The following is a specific list of what I worked on throughout the
project:

-   Built the Express.js API server with six endpoints: GET /api/health,
    > GET /api/loans, POST /api/loans/refresh, POST /api/ai/chat, POST
    > /api/risk/quick, POST /api/risk/deep.

-   Wrote all eight scoring functions for the loan comparison model -
    > interest rate (25%), PMT affordability (20%), D/E leverage (10%),
    > loan limit fit (10%), term fit (10%), LTV/collateral (10%), income
    > requirement (10%), processing fee (5%).

-   Built the Quick Risk module: takes five financial ratios, produces a
    > weighted composite score, classifies it into one of five tiers,
    > and returns specific warnings and strengths for each.

-   Built the Deep Risk engine: seven independent dimensions each scored
    > 0--10 using different formulas (linear, logarithmic, average -
    > based), plus composite score calculation.

-   Integrated the DeepSeek AI API: wrote the system prompt for an SME
    > finance context, added a 30 - second AbortController timeout, and
    > handled three distinct error cases (401, 429, network failure)
    > with appropriate fallback messages.

-   Designed the database layer: loans.json schema, initDatabase /
    > readDatabase / writeDatabase helper functions, DEFAULT_LOANS
    > fallback so the app always has data even if the scrapers fail.

-   Deployed to Render: configured build command, start command,
    > environment variables (DEEPSEEK_API_KEY, PORT,
    > NODE_ENV=production), health check, and auto - deploy from the
    > main branch.

-   Set up monitoring on /api/health with a 10 - minute interval to keep
    > the free server warm.

-   Handled an accidental API key commit: revoked the exposed key
    > immediately, generated a replacement, added .env to .gitignore,
    > and cleaned Git history.

**IV. FILES, FEATURES, AND LOGIC CONTRIBUTED**

  ------------------------------------------------------------------------------
  **File / Feature**  **Path**                **What it does**
  ------------------- ----------------------- ----------------------------------
  server.js           /backend/server.js      Main server - all endpoints,
                                              scoring logic, risk engines, AI
                                              integration

  package.json        /backend/package.json   Dependencies: express, cors,
                                              dotenv, axios, puppeteer

  package.json (root) /package.json           Build & start scri% for Render
                                              deployment

  POST                server.js               5 inputs → 5 - tier risk
  /api/risk/quick                             classification + warnings +
                                              strengths

  POST /api/risk/deep server.js               Full financials → 7 - dimension
                                              scores + radar data

  POST /api/ai/chat   server.js               User question → DeepSeek call →
                                              advisory response
  ------------------------------------------------------------------------------

**V. EVIDENCE OF CONTRIBUTION**

> My contributions are directly shown in these files:

1.  **backend/server,js**

> In this file, I implemented:

-   The Express.js API server with endpoints: GET /api/loans, POST
    > /api/loans/refresh, POST /api/ai/chat, and GET /api/ai/status.

-   The JSON database layer (initDatabase(), readDatabase(),
    > writeDatabase()) with DEFAULT_LOANS fallback data.

-   The DeepSeek AI integration - a POST /api/ai/chat endpoint with a
    > 30‑second timeout, error handling for 401 (authentication), 429
    > (rate limit), and network failures, plus fallback responses.

-   The web scraper refresh endpoint that calls six bank scrapers
    > (Vietcombank, BIDV, MB Bank, Techcombank, VPBank, Sacombank) and
    > stores the scraped loan packages into the database.

2.  **frontend/index.html**

> In this file, I implemented all the financial logic that runs in the
> browser:

-   Quick Risk Assessment (quickRiskAssessment()) - Calculates eight
    > financial ratios (Current Ratio, D/E, ICR, Profit Margin, Asset
    > Turnover, ROA, ROE, DSCR) with industry‑adjusted benchmarks,
    > produces a weighted composite score (0-100), classifies the
    > business into five risk tiers (Very Low, Low, Medium, High, Very
    > High), and returns specific warnings and strengths for each
    > indicator.

-   Deep Risk Assessment (fullRiskAssessment()) - Scores seven
    > independent dimensions (liquidity, leverage, profitability,
    > efficiency, interest risk, experience, scale + no.employees) on a
    > continuous 0-10 scale using linear and logarithmic formulas, then
    > generates radar chart data.

-   Loan Scoring (compareBankLoans()) - Ranks loan packages on a
    > 100‑point scale using eight weighted criteria: interest rate
    > (25%), affordability (20%), loan limit fit (10%), term fit (10%),
    > collateral/LTV (10%), business leverage (10%), income requirement
    > (10%), and processing fee (5%).

3.  **2 package.json files**

-   First package.json file in the backend folder is used to start the
    > server and install all necessary dependencies.

-   Second package.json locating outside is used to write the build and
    > start scripts specifically for the Render deployment environment,
    > ensuring the backend installs correctly and runs on the cloud
    > platform.

**VI. HOW THIS CONNECTS TO THE FINAL PRODUCT**

The backend is the layer everything else depends on. Without the API
server, the frontend has nothing to call. Without the scoring logic, the
product is just a data entry form. Without the deployment, no one
outside the team can see or test anything.

More specifically:

-   The 8-factor algorithm to determine the loan score transforms six
    > entries of the bank into a recommended choice. The user needs to
    > input the total loan amount, loan period, monthly income, and
    > value of collateral, and the website provides an output of which
    > bank package would be most advantageous.

-   The Quick Risk uses the information given by the user and provides a
    > precise 0-100 score along with a five-tier risk classification
    > system. The user doesn't have to worry about what the ICR or D/E
    > ratios mean when he gets an explanation such as \"your interest
    > coverage ratio is low, and you have fewer choices for high-rate
    > plans.\"

-   The Deep Risk engine offers a radar diagram that spans seven
    > independent areas, giving the users the ability to see immediately
    > which one is holding their back - whether it is poor liquidity,
    > high gearing, or inefficiency.

-   In the AI Consultant Tab, users can ask further clarifying questions
    > in everyday language rather than try to make sense of the figures
    > on their own. The backend will then send this request to DeepSeek,
    > which will provide an appropriate response in Vietnamese.

It is often easy to overlook the importance of the deployment phase;
however, it plays a very important role in a project. The availability
of an operational URL helped greatly as we were able to present and
receive valuable feedback from the lecturer as well as our competitors.
The whole application, from the calculations, the bank comparisons to
the artificial intelligence chatbot, operates entirely within the user's
browser and live backend system.

**VII. WHAT I LEARNED**

This project provided several practical lessons in software development,
API integration, and deployment.

-   **API security and environment configuration.** Early in my
    > development phase, I included an API key for DeepSeek in my .env
    > file, which was committed to the GitHub repository. The secret
    > scanning functionality in GitHub flagged the exposure of the key.
    > I quickly revoked the exposed key, created a new one, put .env
    > into .gitignore, and cleaned the Git commit history.

-   **Handling timeouts and errors.** Sometimes the DeepSeek API could
    > take a while to respond, resulting in a freezing frontend. I used
    > an AbortController to introduce a timeout of 30 seconds and
    > classified errors in several categories depending on their nature
    > -- auth failure (401), rate limit exceeded (429), and network
    > timeout - each with its own message for the user. This little
    > tweak helped greatly enhance the AI Consultant.

-   I also learned that **algorithms need to be tested against
    > reality**, not just mathematically validated. The weight set I
    > designed initially produced rankings that didn\'t feel right when
    > I looked at actual bank packages - a high - rate package was
    > scoring above a clearly cheaper one. It took five rounds of
    > adjusting weights before the results matched what a financially
    > literate person would expect.

-   On the **deployment side**: the differences between localhost and a
    > Linux cloud environment caught me off guard more than once - file
    > path separators, environment variable handling, cold starts. The
    > lesson is to deploy early and treat production parity as something
    > to maintain continuously, not fix at the end.

**[VIII. CHALLENGES AND HOW I HANDLED THEM]{.underline}**

**1. DeepSeek API timeout**

The issue was that requests would sometimes hang indefinitely, causing
the UI to freeze. I added a 30 - second AbortController timeout to the
axios call, and wrote fallback response messages classified by error
type so the user always sees a readable message instead of a blank
screen or a stack trace.

**2. Render free - tier cold starts**

After 15 minutes of inactivity, Render puts the server to sleep. The
first request after that takes about 30 seconds - which is bad for a
demo. I set up to ping /api/health every 10 minutes, which keeps the
server warm. I also added a skeleton loader on the frontend to signal
that something is loading, in case a cold start does happen.

**3. Scoring weight calibration**

The first version of the scoring model produced rankings that didn\'t
feel right when checked against real loan packages. I ran five
calibration rounds - manually checking whether the algorithm\'s top -
ranked package for a given profile was actually the most financially
sensible choice - and adjusted the weights until the output was
consistently reasonable.

**4. Accidental API key exposure**

I committed the .env file to the public repository during an early push.
GitHub flagged it. I revoked the key immediately, generated a new one,
added .env to .gitignore, and used git filter - branch to remove the
commit from history. It was fixable, but it took time and was entirely
avoidable.

**IX. MESSAGE FOR FUTURE STUDENTS**

If you\'re continuing this project or building something similar, a few
things that would have saved me time:

-   Set up .gitignore before your first commit, not after. Include .env,
    > node_modules, and any file that might contain credentials or local
    > paths. It takes two minutes and prevents a painful cleanup later.

-   Deploy early. Even with just one working endpoint, get it running on
    > Render (or wherever) in week one. Production surfaces problems
    > that localhost hides, and finding them early is much less
    > stressful than finding them the day before a deadline.

-   The JSON database is fine for a demo, but if you want to let
    > multiple users save their analysis history, switch to a real
    > database early. Supabase has a free tier and a straightforward
    > setup. Refactoring from JSON to SQL after building ten features on
    > top of it is not fun.

-   If you keep the AI Consultant, pass the user\'s risk scores and loan
    > ranking into the system prompt. Right now the AI gives generic
    > financial advice; if it knows the user\'s D/E is 3.2 and their ICR
    > is 1.8, the advice becomes actually specific and useful.

-   Validate the scoring weights with someone from a bank or a finance
    > background. The current set is calibrated against public data, but
    > it hasn\'t been reviewed by a real credit officer. That review
    > would make the model a lot more credible.
