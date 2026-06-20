# Financial Analyzer

## Group

G10

## Members

| Full Name | Student ID | Primary Role |
|---|---|---|
| Đạt | 2312380006 | Backend API, Database, Deploy, Risk Scoring, DeepSeek AI |
| Huy | 2312380011 | BaseScraper Engine, BIDV Scraper, Database |
| Tuấn | 2312380088 | UI/UX, Financial Engine, Dashboard, AI Consultant |
| Phước | 2312380026 | Web Scraper VPBank + Vietcombank |
| Quang | 2312380029 | Web Scraper MBBank + Techcombank, Scraper Integration |

## Product Overview

Financial Analyzer is a business financial analysis platform designed for small and medium-sized enterprises (SMEs) in Vietnam. The product helps businesses automatically calculate key financial indicators such as ROE, ROA, D/E, and ICR; assess credit risk; compare bank loan packages across 8 criteria using an intelligent scoring system; and receive AI-powered advisory. It also supports project investment analysis via NPV, IRR, and sensitivity analysis, as well as ROE breakdown using the 3-factor DuPont model.

## Problem the Product Solves

**What problem does it solve?**  
SMEs in Vietnam struggle to self-assess their financial health, compare bank loan packages, and make informed borrowing decisions due to fragmented and hard-to-find loan information.

**Who faces this problem?**  
SME owners and in-house finance staff at small and medium-sized enterprises who lack access to professional analysis tools.

**Why does this problem matter?**  
Statistics show that SMEs account for over 90% of all businesses in Vietnam and contribute significantly to GDP. Effective access to credit is a critical factor for this group's growth and survival. A comprehensive, easy-to-use financial analysis tool will help SMEs make more accurate borrowing decisions and minimize financial risk.

## Target Users

**Who are the primary users?**  
SME owners and finance staff at small and medium-sized enterprises. Household business operators are also potential users of this product.

**In what situations do they use it?**  
- When assessing the financial health of their business before applying for a loan.
- When comparing loan packages from multiple banks to find the best fit.
- When analyzing the viability of an investment project.
- When seeking a clearer understanding of their financial ratios and business risks.

## Key Features

- **Quick Risk Assessment:** Calculates 8 core financial indicators (CR, D/E, ICR, PM, ATO, ROA, ROE, DSCR) with industry benchmarks, scores them, and classifies risk into 5 levels with specific warnings.
- **Deep Risk Assessment:** Analyzes 7 risk dimensions (liquidity, leverage, profitability, asset efficiency, interest rate risk, experience, scale) with an intuitive radar chart.
- **Bank Loan Comparison (8 Criteria):** Scores and ranks loan packages based on interest rate, repayment capacity, credit limit, loan term, LTV, business leverage, income requirement, and processing fee.
- **NPV/IRR Investment Analysis:** Calculates NPV, IRR, and payback period, with sensitivity analysis (14 interest rate levels) and scenario analysis (pessimistic, base, optimistic).
- **Visual Dashboard:** Charts for asset structure, capital structure, profit trends, cash flow, and repayment schedule.
- **DuPont Analysis:** Breaks down ROE into 3 factors: Net Profit Margin × Asset Turnover × Equity Multiplier.
- **AI Consultant:** A virtual financial advisory assistant (integrated with DeepSeek API).
- **PDF Report Export:** Automatically generates a comprehensive financial analysis report.

## Demo Link
**Web:** *https://g10-bjcd.onrender.com*

## Data Notes

- **Bank data:** Sample data is embedded directly in the code (6 loan packages from Vietcombank, BIDV, Techcombank, VPBank, Sacombank). Can be updated manually via the "Admin DB" tab or through the web scraper.
- **Macroeconomic data:** Fetched from public APIs — World Bank (GDP, inflation), SBV (refinancing interest rate), and ExchangeRate-API (USD/VND exchange rate).
- **Business data:** Entered directly by the user via input forms.
- **AI Consultant:** Integrated with the DeepSeek API (requires an API Key to function).

## Additional Notes

- The product supports light/dark mode toggle and bilingual interface (Vietnamese – English).
- Analysis results can be exported as a PDF report using the "Export PDF" button on the navigation bar.
- The "Admin DB" tab is only visible when Dev mode is enabled (click the Dev button and enter the password `admin123`).
- In order to deploy through render.com, need to follow these steps:
+ Step 1:choose web services and region Singapore
+ Step 2: Build Command: npm run build
+ Step 3: Start Command: npm start
+ Step 4: Set Environment Variables:
+ DEEPSEEK_API_KEY: (your keys)
+ PUPPETEER_EXECUTABLE_PATH: /usr/bin/google-chrome-stable
+ PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: true
+ Auto-Deploy: On Commit
+ Then Deploy services 
