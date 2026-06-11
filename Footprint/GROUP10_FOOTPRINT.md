# GROUP FOOTPRINT – Financial Analyzer

**NHA408E · Technology Applications in Finance & Banking**  
**Semester:** 2025 – 2026 · **Group:** Team 10 (G10)  
**Members:** Đạt (Backend/DevOps) · Huy (Database/BaseScraper/BIDV Scraper) · Tuấn (Frontend/UI) · Phước (VCB/VPB Scraper) · Quang (MBB/TCB Scraper)

**Links:**  
- Repo: [https://github.com/FTU-Legacy-62/G10](https://github.com/FTU-Legacy-62/G10)  
- Demo: [https://financial-analyzer-ooel.onrender.com](https://financial-analyzer-ooel.onrender.com)

---

## 1. Product Name & Team

**Financial Analyzer** – A web system that helps SMEs automatically assess their financial health and compare bank loan packages.

The team consists of 5 members, with clear role assignments across: frontend, backend, database/scraper, and dedicated bank scrapers.

---

## 2. Problem the Team Aims to Solve

SMEs account for >97% of businesses in Vietnam, but when seeking loans they face 5 key challenges:

1. **Cannot self-assess financial health** (ROE, ROA, D/E, ICR vs. safety thresholds).
2. **Interest rate information is scattered**, making cross-bank comparisons difficult.
3. **Must contact each bank individually** → time-consuming and stressful.
4. **Lack of automated risk analysis tools** based on established standards.
5. **Borrowing decisions based on intuition** → choosing suboptimal packages or overborrowing.

**Context:** The SME credit market is growing rapidly but lacks transparency. Interest rates fluctuate with SBV policy, promotional packages are complex, and SME owners typically lack a formal finance background.

**Who is affected?** SME owners and household business operators — people who need to make borrowing decisions but lack the time or expertise for in-depth analysis.

---

## 3. Target Users

**Primary Persona:** SME owners / household business operators in Vietnam  
- Annual revenue of 1–50 billion VND  
- Business-savvy but without formal banking/finance expertise  
- Key questions: Am I eligible for a loan? How much can I borrow? Which bank/package is best?

**Usage Flow:** Access the web, enter figures from financial statements, receive analysis and comparison results within minutes — before meeting with a bank officer.

---

## 4. What the Product Can Do (7 Tabs)

| Tab | Feature | Brief Description |
|-----|---------|-------------------|
| KPI Dashboard | Calculate ROE, ROA, D/E, ICR, Margin, Current Ratio | Includes asset structure charts and debt repayment schedule |
| Risk Assessment | Quick Risk 5-level + specific warnings | Very Low → Very High, with improvement suggestions |
| Deep Risk | Deep Risk 7 dimensions (0–10), radar chart | 3-factor DuPont analysis |
| Bank Comparison | 8-Factor Loan Scoring (0–100) | Ranks 5 banks, highlights Best Match |
| AI Advisor | DeepSeek API Chatbot | Vietnamese-language advice tailored to business context |
| NPV & IRR | Project cash flow analysis | Calculates NPV, IRR, sensitivity, scenarios |
| Admin DB | Loan package management | Add/edit/delete, import/export JSON |

---

## 5. Input

- **Business data:** total assets, liabilities, revenue, profit, interest expenses, years in operation, collateral… (supports PDF/Excel upload for auto-fill)
- **Loan package data:** 5 banks (VCB, BIDV, TCB, VPB, Sacombank) – interest rates, credit limits, loan terms, LTV, income requirements, processing fees.
- **Macroeconomic data:** GDP, inflation, exchange rate, SBV policy interest rate.

---

## 6. Core Processing Logic

### 6.1 Financial Ratios
- D/E = Debt / (Total Assets − Debt)  
- ROA = Net Profit / Total Assets  
- ROE = Net Profit / Equity  
- ICR = (Net Profit + Interest Expense) / Interest Expense  
- PMT = P×r(1+r)^n / ((1+r)^n−1) – monthly repayment  

### 6.2 8-Criteria Scoring (100 points)
| Criterion | Weight | Formula |
|-----------|--------|---------|
| Interest Rate | 25 | 25×(1−(rate−4)/11) |
| Repayment Capacity | 20 | PMT/Income ≤50% → 20pts |
| D/E Leverage | 10 | D/E ≤1.5 →10pts; ≥5→0pts |
| Credit Limit | 10 | Linear scaling within [min, max] |
| Loan Term | 10 | Within limit range → 10pts |
| LTV | 10 | Lower LTV than max → higher score |
| Income Requirement | 10 | ≥ minIncome → 10pts |
| Processing Fee | 5 | 0%→5pts; ≥2%→0pts |

### 6.3 Quick Risk (5 Levels)
Score = D/E×30% + ICR×25% + Profit Margin×25% + Current Ratio×10% + Years×10%  
- ≥80: Very Low (dark green) – excellent  
- 60–79: Low – stable  
- 40–59: Medium – moderate risk  
- 20–39: High – high risk  
- <20: Very High – very difficult to secure a loan

| Indicator | Weight | Calculation |
|-----------|--------|-------------|
| Current Ratio | 15% | ≥1.5→15pts, 1.0–1.5→10pts, >2.5→8pts, <1.0→3pts |
| D/E Ratio | 15% | ≤1.5→15pts, 1.5–2.5→10pts, 2.5–3.5→5pts, >3.5→0pts |
| ICR | 10% | ≥2.0→10pts, 1.5–2.0→6pts, <1.5→0pts |
| Profit Margin | 15% | ≥5%→15pts, 2.5–5%→10pts, <2.5%→3pts |
| Asset Turnover | 10% | ≥1.0→10pts, 0.6–1.0→6pts, <0.6→2pts |
| ROA | 10% | ≥6%→10pts, 3–6%→6pts, <3%→0pts |
| ROE | 15% | ≥12%→15pts, 6–12%→10pts, <6%→3pts |
| DSCR | 10% | ≥1.25→10pts, 1.0–1.25→6pts, <1.0→0pts |

### 6.4 Deep Risk – 7 Dimensions (0–10 each)
Liquidity, leverage, profitability, efficiency, interest rate risk, experience, scale.  
Total Score = (Sum of 7 dimensions / 70) × 100, displayed as a radar chart.

| Factor | Formula |
|--------|---------|
| Liquidity | CR≤0.5→1pt, 0.5–1.2→2–5pts, 1.2–2.0→5–9pts, 2.0–3.0→9–6pts |
| Leverage | D/E≤0.5→8–10pts, 0.5–2.0→8–4pts, 2.0–3.5→4–1pts |
| Profitability | PM≤0→0pts, 0–5%→0–3pts, 5–10%→3–7pts, 10–20%→7–10pts |
| Asset Efficiency | AT≤0.3→1pt, 0.3–0.8→1–5pts, 0.8–1.5→5–10pts |
| Interest Rate Risk | ICR<1.5→0–2pts, 1.5–3.0→2–5pts, 3.0–5.0→5–8pts, >5→8–10pts |
| Experience | Years≤2→2–5pts, 2–5→5–8pts, 5–10→8–10pts |
| Scale | Combined 70% assets (log) + 30% headcount |

---

## 7. User Flow (Main Flow)

1. Open the web in a browser  
2. Enter business data (or upload a file)  
3. Enter the desired loan details  
4. View KPI Dashboard – instantly see all financial ratios  
5. View Quick Risk – understand risk level + warnings  
6. View Deep Risk radar chart – identify the weakest dimension  
7. View bank comparison table – Best Match is highlighted  
8. Adjust loan amount/term to see the impact  
9. Ask the AI advisor for further guidance  
10. (Optional) Calculate NPV/IRR for project financing decisions  

---

## 8. Output

- **KPI Dashboard:** Color-coded metric cards, pie charts, detailed repayment schedule  
- **Comparison Table:** 5 banks ranked, 8-criteria scores, Best Match label  
- **Quick Risk:** 5-level classification + list of strengths / warnings  
- **Deep Risk Radar Chart:** 7-axis spider chart + DuPont analysis  
- **NPV/IRR:** Net present value, internal rate of return, waterfall chart, sensitivity analysis  
- **AI Consultant:** Vietnamese-language responses from DeepSeek, personalized to business context  
- **PDF Export:** Consolidated summary of all results  

---

## 9. Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Target SMEs as users | The largest underserved segment with the greatest need |
| Separate backend (Node.js) + frontend (plain HTML/JS) | Allows team members to work independently, avoids delays |
| Use JSON files instead of a real database | Keeps focus on financial logic & UI within an academic scope |
| Choose DeepSeek API (free tier) | Token cost is manageable; handles typical tasks reliably |

---

## 10. What the Team Did Well

✅ **8-Criteria Scoring Algorithm** – the 25/20/10/… weightings reasonably reflect how banks evaluate SMEs before approving loans  
✅ **Deep Risk with 7 components + radar chart** – lets users see what risks their business faces and which dimension carries the most weight  
✅ **File-based task assignment** – 5 members worked in parallel with minimal cross-dependencies  
✅ **Auto-deploy on latest commit via Render.com** – public URL running on Render, automatically redeployed with every GitHub push  

---

## 11. Current Limitations

⚠ Web scraper is unstable (prone to being blocked) – currently using static fallback data. (Improved for 4 banks: VCB, BIDV, MBB, VPB; TCB and STB still cannot be parsed reliably)  
⚠ Database is a JSON file – does not scale and is prone to write collisions.  
⚠ No authentication – all users share the same database, no history is saved.  
⚠ AI Consultant lacks context from analysis results – only answers standalone questions.  
⚠ API connections to macroeconomic data sources sometimes fail (mainly when fetching data from SBV).  

---

## 12. What Team Learned

- **Identifying the right problem is harder than writing code** – the scope evolved from "an interest rate comparison tool" to "a financial health assessment framework for SMEs."  
- **Structured task assignment** reduces conflicts and speeds up development when each member owns different modules.  
- **Financial formulas are straightforward, but weights & benchmarks are the real challenge** – requires thorough validation and testing with many different weight combinations to find the most appropriate set.  
- **Deploy early to catch environment issues** – environment variables, CORS, cold starts, Windows/Linux path differences, and accidental API key exposure.  
- **Time management:** AI integration and web scraping took significantly longer than expected → unable to deploy the latest scraper version due to errors + overly complex scraping logic.  

---

## 13. Suggestions for Future Cohorts

💌 **Start from the problem, not the technology** – think from the user's perspective first: what do they need, and what can they realistically provide?  
💌 **Deploy early** – get the web live as soon as possible to surface operational issues like traffic overload, too many simultaneous users causing lag, or even downtime.  
💌 **Validate your logic** – financial formulas are easy, but scoring is hard; test many data sets to arrive at the most reasonable weighting.  
💌 **Upgrade the database before adding features** – JSON is only suitable for prototypes.  
💌 **AI features become much more powerful with context** – pass risk/scoring results into the system prompt.  

---

*Group 10 – Financial Analyzer – NHA408E – 2025–2026 – FTU*
