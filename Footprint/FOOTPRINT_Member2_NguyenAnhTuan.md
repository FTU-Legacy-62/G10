# INDIVIDUAL FOOTPRINT – Team 10 (G10)

**Financial Analyzer** – Automated financial health assessment & bank loan comparison platform for Vietnamese SMEs

**Course:** NHA408E – Technology Applications in Finance & Banking  
**Academic year:** 2025–2026

---

## Member 2: Nguyễn Anh Tuấn

| Field | Value |
|-------|-------|
| **Full name** | Nguyễn Anh Tuấn |
| **Student ID** | 2312380088 |
| **Role** | UI/UX Design, Financial Engine, Dashboard Charts, API Integration, PDF Export, BCTC AI Parser |
| **Team** | Team 10 |

### Role in the project

As **Frontend Developer and UI/UX Designer**, I was responsible for bridging the gap between complex data and the user, crafting the entire client‑side experience. I transformed raw backend databases and scraped loan information into an elegant, easy‑to‑navigate web application. My work was divided into six key areas: (1) designing and coding a comprehensive, responsive 7‑tab UI with dark/light modes; (2) building a proprietary financial engine from scratch to calculate six critical ratios plus PMT, NPV, and IRR; (3) implementing five interactive Chart.js dashboards with clean memory management; (4) wiring up backend APIs to feed real‑time loan data; (5) designing specialised visualisation components like KPI cards, radar charts, and bank comparison grids; and (6) developing advanced analytical features including AI financial statement parsing, DuPont decomposition, sensitivity analysis, scenario analysis, and PDF export.

### Personal mark in the product

**1. Front‑End Development & UI/UX Design (7‑Tab Responsive Interface)**  
By designing and coding a responsive 7‑tab web application from scratch using CSS Grid and Flexbox, I established a polished user layer with a global dark/light mode toggle. The interface features a Risk Assessment tab with a drag‑and‑drop upload zone, an NPV/IRR cash flow calculator, a card‑based Bank Comparison tool, a central Dashboard with five dynamic charts, a Deep Risk radar chart, an AI Consultant chatbot, and a developer database manager.

**2. Custom Financial Engine & Real‑Time Investment Analysis**  
I programmed the platform’s core mathematical engine from scratch, implementing custom algorithms for PMT, NPV, and IRR (powered by Newton‑Raphson iteration). This logic drives real‑time updates for six core financial metrics: ROE, ROA, D/E, ICR, Profit Margin, and Current Ratio. I also engineered advanced analytical tools: a sensitivity table mapped across 14 discount rates (2%–30%), a 3‑tier scenario analysis tool, a cash flow waterfall chart, and a comprehensive break‑even tracking system.

**3. AI Financial Statement Parsing, DuPont Analytics & PDF Exporting**  
I built an AI financial parser to extract text from uploaded statements, leveraging the DeepSeek AI API to automatically fill out forms with proper validation. I also created a DuPont decomposition card that breaks down ROE into three colour‑coded visual metrics with automated AI explanations. Finally, I developed a PDF export tool that generates a polished 3‑page financial report with full Vietnamese font support.

### Things actually done

- Designed and coded the complete 7‑tab responsive UI from scratch using CSS Grid and Flexbox, featuring smooth tab‑switching animations, 9 dynamic and colour‑coded KPI cards, and a global dark/light mode toggle with persistent localStorage tracking.
- Built the core Financial Engine by writing custom `calculatePMT()`, `npv()`, and `irr()` functions (Newton‑Raphson iteration), driving real‑time data updates for six core financial health ratios via `syncData()`.
- Implemented five interactive **Chart.js dashboards** covering key financial structures and schedules, using strict `.destroy()` memory management, plus a combo cash flow waterfall chart.
- Engineered the advanced **NPV & IRR analysis tab**, integrating a 14‑discount‑rate sensitivity table, a 3‑tier scenario analysis tool with factor multipliers, a comprehensive break‑even card, and an Excel/CSV cash flow import feature (powered by SheetJS).
- Built the **AI parsing and analytical modules**: a drag‑and‑drop zone using PDF.js/SheetJS to extract text, connection to the backend `/api/ai/parse-bctc` endpoint for DeepSeek AI form auto‑filling, and a DuPont decomposition card with automated explanations.
- Connected the frontend to backend API endpoints and services using async/await pipelines for real‑time loan data refreshes; developed a visual bank comparison module with a “Best Match” badge; constructed an interactive AI Consultant chat interface with typing indicators.

### Files, features, logic, and demo parts contributed

| File / Feature | Path | Specific function |
|----------------|------|--------------------|
| index.html | /frontend/index.html | Contains all HTML, CSS, and JavaScript for the 7‑tab application – primary contribution |
| 7‑tab UI structure | index.html | Tab containers for all 7 tabs |
| BCTC upload zone + parser | index.html | Drag‑and‑drop file upload, PDF.js/SheetJS parsing, AI backend call, auto‑fill form |
| DuPont decomposition card | index.html | ROE decomposition into NPM, ATO, EM with colour‑coded boxes |
| Sensitivity analysis table | index.html | NPV at 14 discount rates (2%–30%) with colour‑coded rows |
| Scenario analysis (3 scenarios) | index.html | Pessimistic (-20%), Baseline, Optimistic (+20%) with verdict |
| Cash flow waterfall chart | index.html | Bar chart (annual) + line chart (cumulative) combo |
| Break‑even analysis | index.html | Total investment, inflows, net profit, simple ROI |
| PDF export (jsPDF + autoTable) | index.html | 3‑page report with Vietnamese font, balance sheet, income statement, ratios, loan comparison |
| `calculatePMT()`, `npv()`, `irr()` | index.html | Core financial functions; IRR uses Newton‑Raphson |
| `syncData()` – 6 financial ratios | index.html | Real‑time calculation of ROE, ROA, D/E, ICR, Profit Margin, Current Ratio |
| 5 Chart.js dashboard charts | index.html | Doughnut, pie, line, bar, stacked bar with `.destroy()` pattern |
| `refreshFromWebScraper()` – API call | index.html | Calls backend API to refresh loan data |
| `compareBankLoans()` – display | index.html | Renders bank cards with progress bars, score badges, “Best Match” |
| KPI cards (Tab 1 & Tab 5) | index.html | 4 + 5 KPI cards with dynamic values |
| AI Consultant chat interface | index.html | Chat UI with quick buttons, typing indicator |

### Evidence of contribution

- **Source code:** Complete `index.html` file in the repository – contains all HTML, CSS, and JavaScript for the 7‑tab UI, financial engine, 5 dashboard charts, BCTC AI parser, DuPont decomposition, sensitivity/scenario analysis, PDF export, and API integration.
- **Root `index.html`** – includes all Chart.js configurations, jsPDF export logic, and responsive CSS Grid layouts.
- **Live demo** – The web service runs from the team’s GitHub repository, accessible via the public URL [https://financial-analyzer-ooel.onrender.com](https://financial-analyzer-ooel.onrender.com).

### How this connects to the final product

The frontend is the user‑facing layer of the entire system. Without it, the backend server would have no interface, and users could not access any analysis features.

| Module built by me | How it helps the product and the user |
|--------------------|----------------------------------------|
| 7‑tab responsive UI + dark/light mode | Users access all features from one place on any device |
| Financial Statement AI parser | Users upload PDF/Excel – system auto‑fills all numbers, saving 15+ minutes of manual entry |
| Financial Engine (6 ratios + PMT/NPV/IRR) | Users get instant, accurate financial calculations without manual Excel |
| Sensitivity + Scenario analysis | Users understand how NPV changes with different discount rates and cash flow scenarios – essential for investment decisions |
| DuPont decomposition | Users see exactly which factor (profit margin, asset turnover, or leverage) drives their ROE – actionable insight |
| 5 dashboard charts | Users visualise asset structure, capital structure, profit trends, cash flow, and repayment schedules |
| PDF export | Users download a professional 3‑page report to share with banks, investors, or management |
| API connection | Users refresh loan data from real banks via web scraper, then see updated packages instantly |
| Bank comparison display | Users see which loan package best fits their profile with colour‑coded progress bars |

### What I learned

- **Integrating AI into frontend requires careful error handling.** The BCTC parser calls DeepSeek AI via the backend. I learned to implement loading states, timeout handling, and fallback messages – otherwise users see a frozen UI.
- **PDF export with Vietnamese fonts is challenging.** jsPDF does not natively support Unicode. I learned to fetch Roboto fonts from CDN, convert them to base64, add them to jsPDF’s virtual file system, and set the font before rendering text – otherwise all Vietnamese accents appear garbled.
- **Chart.js memory management is critical.** Each chart instance consumes memory. I learned to store chart instances in global variables and call `.destroy()` before creating new ones – otherwise the browser slows down after 5–6 tab switches.
- **IRR convergence needs iteration limits.** Newton‑Raphson sometimes fails to converge. I learned to set a maximum of 1000 iterations, add an early exit condition (change < 1e‑7), and return NaN instead of freezing the browser.
- **Responsive design is not just media queries.** Using `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` saved me from writing 10+ breakpoints. This single pattern handles mobile, tablet, and desktop elegantly.
- **Dark/light mode requires planning CSS variables early.** I restructured all colours into CSS variables on day one. When dark mode was requested later, I just added a `.dark` class that overrides these variables – zero refactoring needed.

### Challenges encountered and how they were resolved

| Problem | Solution |
|---------|----------|
| **Financial Statement AI parser fails to extract numbers correctly** – Vietnamese PDFs have inconsistent formats; DeepSeek sometimes returned incomplete or misformatted JSON. | Added comprehensive error handling – if AI response lacks required fields, show a detailed error message and do not overwrite existing form data. Also added a timeout (60 seconds) and retry logic. |
| **PDF export garbles Vietnamese accents** – jsPDF default font (Helvetica) does not support Vietnamese characters like ă, â, đ, ê, ô, ơ, ư. | Fetched Roboto font from CDN, converted to base64, added to jsPDF via `addFileToVFS()` and `addFont()`, then set `doc.setFont('Roboto')`. Tested on multiple devices. |
| **Sensitivity analysis table becomes too wide** – 14 discount rates produced a table that overflowed on mobile screens. | Made the table horizontally scrollable using `overflow-x: auto` in a wrapper div. Added responsive CSS so the table font size reduces on small screens. |
| **Scenario analysis multipliers affect Year 0 incorrectly** – Applying ±20% to all cashflows also changed the initial investment (Year 0), which should remain fixed. | Modified scenario logic to apply multipliers only to cashflows at index ≥ 1. Year 0 (initial investment) stays unchanged across all scenarios. |

### Message for future students

- **→ Migrate from vanilla JavaScript to React/Vue.** The current codebase is a single 3000+ line HTML file, which becomes unmaintainable quickly. React components would make the 7 tabs, BCTC upload zone, DuPont card, and PDF export much easier to manage, test, and extend.
- **→ Add caching for BCTC AI responses.** Users may upload the same financial statement file multiple times. Caching parsed results in localStorage or IndexedDB with a 24‑hour TTL would reduce API costs and improve response time by 50–70%.
- **→ Improve PDF export performance and add Excel export.** Currently PDF export takes 2–3 seconds. Optimise by using web workers and add an Excel export option using SheetJS for users who prefer spreadsheets.
- **→ Validate the BCTC parser with real Vietnamese SME files.** The current parser works with standard PDFs, but many Vietnamese SMEs use scanned or handwritten financial statements. Adding OCR (Tesseract.js) would significantly improve real‑world usability.
- **→ Deploy on day one – not after the product is ‘ready’.** Netlify and similar platforms surface environment issues that never appear on localhost (CORS, file paths, API timeouts, font loading). The earlier you find them, the less painful they are to fix.
---

*Team 10 (G10) – Financial Analyzer – NHA408E – 2025–2026 – FTU Hanoi*