# Group Footprint

> Group footprint là phần ghi lại quá trình làm sản phẩm của cả nhóm: nhóm đã làm
> sản phẩm như thế nào, sản phẩm hoạt động ra sao, đã chọn cách làm nào, học được gì
> và còn hạn chế gì. File này dùng để giảng viên đối chiếu với sản phẩm thật trong repo.

| | |
|---|---|
| **Tên sản phẩm** | Financial Analyzer Pro |
| **Mã nhóm** | G10 (Team 10) |
| **Môn học** | NHA408E – Technology Applications in Finance & Banking |
| **Năm học** | 2025 – 2026 · Chương trình tiên tiến K62 TCNH, FTU Hà Nội |
| **Link repo** | https://github.com/FTU-Legacy-62/G10 |
| **Link demo** | https://financial-analyzer-ooel.onrender.com |

---

## Tên sản phẩm

**Financial Analyzer Pro** — nền tảng web phân tích sức khỏe tài chính doanh nghiệp
và so sánh gói vay ngân hàng cho doanh nghiệp vừa và nhỏ (SME), tất cả trong một giao
diện duy nhất, không cần cài đặt.

## Mã nhóm

G10 (Team 10).

**Thành viên & vai trò chính:**

- **Đạt** — Backend / DevOps
- **Huy** — Database / Scraper
- **Tuấn** — Frontend / UI
- **Phước** — Scraper VCB / VPB
- **Quang** — Scraper MBB / TCB

> Chi tiết đóng góp của từng người được ghi trong `INDIVIDUAL_FOOTPRINT.md`.

## Link repo

https://github.com/FTU-Legacy-62/G10

## Link demo

https://financial-analyzer-ooel.onrender.com

*(Render có thể "cold start" vài giây ở lần truy cập đầu tiên.)*

---

## Vấn đề nhóm muốn giải quyết

**Bức tranh toàn cảnh.** SME chiếm hơn 97% tổng số doanh nghiệp đang hoạt động tại
Việt Nam, nhưng lại là nhóm được phục vụ kém nhất về công cụ phân tích tài chính. Khi
cần vay vốn, phần lớn chủ SME không biết vị thế tài chính của mình đang ở đâu và không
có công cụ nào để so sánh các gói vay một cách hệ thống trước khi gặp nhân viên tín dụng.

**Năm vấn đề cốt lõi:**

1. SME khó tự đánh giá sức khỏe tài chính — không biết ROE, ROA, D/E, ICR của mình
   đang ở mức nào so với ngưỡng an toàn của ngân hàng.
2. Thông tin lãi suất phân tán — mỗi ngân hàng một trang web, khó so sánh trực tiếp.
3. Phải liên hệ trực tiếp từng ngân hàng — tốn thời gian và chịu áp lực bán hàng.
4. Thiếu công cụ phân tích rủi ro tự động — không biết mình thuộc nhóm rủi ro nào.
5. Quyết định vay dựa trên cảm tính — dễ chọn gói không tối ưu hoặc vay vượt khả năng trả.

**Ai bị ảnh hưởng.** Trực tiếp là chủ doanh nghiệp và bộ phận tài chính của SME; rộng
hơn, sự thiếu minh bạch này làm giảm hiệu quả phân bổ vốn cho cả khu vực kinh tế tư nhân.

## Người dùng mục tiêu

**Persona chính: chủ doanh nghiệp / quản lý tài chính SME tại Việt Nam.**

- **Đặc điểm:** vận hành doanh nghiệp doanh thu 1–50 tỷ VND/năm; có kiến thức kinh
  doanh nhưng không chuyên về phân tích tài chính ngân hàng; cần vay vốn để mở rộng
  hoặc bổ sung vốn lưu động.
- **Họ cần:** biết ngay doanh nghiệp có đủ điều kiện vay không, vay được khoảng bao
  nhiêu, nên chọn ngân hàng và gói nào phù hợp nhất với hồ sơ tài chính của mình.
- **Tình huống sử dụng:** truy cập sản phẩm trên máy tính/điện thoại, nhập số liệu từ
  BCTC gần nhất (hoặc upload file để AI tự điền), nhận kết quả phân tích trong vài phút
  — **trước khi** gặp nhân viên ngân hàng.

## Sản phẩm hiện làm được gì

Sản phẩm gồm **7 tab chức năng** tích hợp trên một giao diện web:

| Tính năng | Mô tả | Kết quả cho người dùng |
|---|---|---|
| **Dashboard KPI** | Tự động tính ROE, ROA, D/E, ICR, Biên LN, Thanh khoản; biểu đồ cơ cấu tài sản, nguồn vốn, dòng tiền, lịch trả nợ. | Nắm sức khỏe tài chính ngay lập tức |
| **8-Factor Loan Scoring** | Chấm điểm từng gói vay trên thang 100 theo 8 tiêu chí có trọng số; xếp hạng + nhãn Best Match. | Chọn gói vay tốt nhất dựa trên dữ liệu |
| **Quick Risk 5 cấp** | Phân loại rủi ro Very Low → Very High kèm cảnh báo và điểm mạnh. | Biết mức rủi ro & gợi ý cải thiện |
| **Deep Risk 7 chiều** | Chấm 7 khía cạnh rủi ro (0–10), radar chart + phân tích DuPont. | Nhìn ra chiều yếu nhất để cải thiện |
| **AI Consultant** | Chatbot DeepSeek tư vấn theo ngữ cảnh & mục tiêu (tăng trưởng / lợi nhuận / giảm nợ / dòng tiền). | Tư vấn tiếng Việt 24/7 |
| **NPV/IRR Analysis** | NPV, IRR, hoàn vốn, phân tích độ nhạy, kịch bản bi quan/cơ sở/lạc quan, import Excel. | Hỗ trợ quyết định đầu tư dự án |
| **Admin DB** | Quản lý database gói vay: thêm/sửa/xóa, export/import JSON, cập nhật từ scraper. | Duy trì dữ liệu lãi suất sẵn sàng |

## Input

**1. Dữ liệu tài chính doanh nghiệp (người dùng nhập):**

- Thông tin doanh nghiệp: tên, ngành (Sản xuất / Thương mại / Dịch vụ / Công nghệ),
  số năm hoạt động, số nhân viên.
- Bảng cân đối: tổng tài sản, tài sản ngắn hạn, tài sản cố định (tự tính), tổng nợ, vốn CSH.
- Kết quả kinh doanh **nhập theo tháng** (doanh thu, giá vốn, chi phí hoạt động, khấu
  hao) — hệ thống tự tính LN trước thuế, thuế TNDN 20%, LN ròng và **quy đổi sang năm (×12)**.
- Thông tin vay: số tiền, thời hạn, tài sản đảm bảo, hình thức vay (thế chấp / tín chấp).
- **Tự động nhập từ file:** upload PDF (BCTC tiếng Việt), Excel (.xlsx) hoặc TXT — AI
  trích xuất dữ liệu vào form và chạy phân tích DuPont.

**2. Dữ liệu gói vay ngân hàng (database / scraper):**

- 5 ngân hàng tham chiếu: Vietcombank, BIDV, Techcombank, VPBank, Sacombank.
- Mỗi gói: lãi suất, hạn mức min/max, kỳ hạn tối đa, LTV tối đa, thu nhập tối thiểu,
  phí xử lý hồ sơ, ưu/nhược điểm và yêu cầu.

**3. Dữ liệu vĩ mô:** tăng trưởng GDP, lạm phát, lãi suất điều hành NHNN, tỷ giá
USD/VND — cập nhật tự động hoặc nhập thủ công.

> **Nguồn dữ liệu:** dữ liệu gói vay là **dữ liệu công khai / dữ liệu tự tổng hợp** từ
> website ngân hàng, có fallback tĩnh trong `loans.json`. Không sử dụng dữ liệu cá nhân
> hay dữ liệu riêng tư.

## Logic hoặc quy tắc xử lý

### 1. Chỉ số tài chính

| Chỉ số | Công thức |
|---|---|
| D/E | Nợ / (Tài sản − Nợ) |
| ROA | LN ròng / Tổng tài sản |
| ROE | LN ròng / Vốn CSH |
| Biên LN | LN ròng / Doanh thu |
| ICR | (LN + Chi phí lãi) / Chi phí lãi |
| PMT (trả/tháng) | P·r(1+r)ⁿ / ((1+r)ⁿ − 1) |
| NPV | Σ CFₜ / (1+r)ᵗ |
| IRR | Lãi suất chiết khấu khi NPV = 0 |

### 2. Mô hình chấm điểm gói vay – 8 tiêu chí (thang 100)

Bộ trọng số được thiết kế phản ánh cách ngân hàng đánh giá hồ sơ SME — **lãi suất và
khả năng trả nợ được ưu tiên cao nhất**:

| Tiêu chí | Trọng số | Công thức / Ngưỡng |
|---|---|---|
| Lãi suất | 25 | 25·(1 − (rate−4)/11); 4%→25đ, 15%→0đ |
| Khả năng trả nợ | 20 | PMT ≤ 50% thu nhập → 20đ; giảm tuyến tính |
| Đòn bẩy D/E | 10 | D/E ≤ 1.5 → 10đ; D/E ≥ 5 → 0đ |
| Phù hợp hạn mức | 10 | Linear scaling trong range [min, max] |
| Phù hợp kỳ hạn | 10 | Trong hạn mức → 10đ; vượt → giảm tuyến tính |
| LTV / TSĐB | 10 | LTV thấp hơn mức tối đa → điểm cao hơn |
| Yêu cầu thu nhập | 10 | Thu nhập ≥ mức tối thiểu → 10đ |
| Phí xử lý hồ sơ | 5 | Phí 0% → 5đ; phí ≥ 2% → 0đ |

### 3. Quick Risk – 5 cấp

`Điểm = D/E·30% + ICR·25% + Biên LN·25% + Thanh khoản·10% + Số năm·10%`

| Cấp | Điểm | Khuyến nghị |
|---|---|---|
| Very Low | ≥ 80 | Sức khỏe tài chính xuất sắc |
| Low | 60–79 | Tài chính ổn định |
| Medium | 40–59 | Rủi ro trung bình, cần xem xét thêm |
| High | 20–39 | Rủi ro cao, nên tái cơ cấu trước |
| Very High | < 20 | Rủi ro rất cao, khó phê duyệt |

### 4. Deep Risk – 7 chiều (radar chart)

`Điểm = (Tổng 7 chiều / 70) × 100`. Mỗi chiều chấm 0–10: Thanh khoản, Đòn bẩy, Sinh
lời, Hiệu quả, Rủi ro lãi vay, Kinh nghiệm, Quy mô.

### 5. Phân tích DuPont

`ROE = Biên LN ròng (NPM) × Vòng quay tổng tài sản (ATO) × Hệ số nhân vốn CSH (EM)`
— giúp xác định nhân tố nào đang kéo hiệu quả sinh lời lên/xuống.

## User flow

```
1. Mở sản phẩm trên trình duyệt (URL public trên Render, không cần cài đặt).
2. Nhập thông tin doanh nghiệp — hoặc upload PDF/Excel để AI tự điền.
3. Nhập thông tin khoản vay mong muốn (số tiền, thời hạn, TSĐB, hình thức).
4. Dashboard: xem KPI tài chính + biểu đồ cơ cấu tài sản, nguồn vốn, dòng tiền, lịch trả nợ.
5. Đánh giá rủi ro: xem Quick Risk 5 cấp kèm cảnh báo.
6. Rủi ro chuyên sâu: xem Deep Risk 7 chiều (radar) + phân tích DuPont.
7. So sánh ngân hàng: xem bảng gói vay xếp hạng, Best Match highlight; chỉnh số tiền/kỳ hạn.
8. AI Tư vấn: hỏi chatbot, nhận chiến lược theo mục tiêu.
9. NPV & IRR: nhập dòng tiền dự án; xuất kết quả ra PDF.
```

### Cách demo

1. Mở link demo: https://financial-analyzer-ooel.onrender.com
2. Nhập một bộ số liệu mẫu hoặc upload BCTC PDF/Excel để minh họa tính năng trích xuất.
3. Đi lần lượt qua các tab Dashboard → Rủi ro → Rủi ro chuyên sâu → So sánh ngân hàng
   → NPV/IRR → AI Tư vấn để trình bày trọn vòng phân tích.
4. Chỉnh số tiền vay / kỳ hạn để cho thấy điểm số gói vay thay đổi theo thời gian thực.
5. Xuất PDF kết quả. *(Phương án dự phòng: chạy local theo hướng dẫn trong `README.md`.)*

## Output

- **Dashboard KPI** — thẻ chỉ số có màu cảnh báo; biểu đồ cơ cấu tài sản, nguồn vốn,
  xu hướng lợi nhuận, dòng tiền, lịch trả nợ.
- **Bảng so sánh gói vay** — xếp hạng theo điểm 8 tiêu chí (0–100), PMT ước tính, nhãn
  Best Match / Phù hợp / Cân nhắc / Ít phù hợp.
- **Quick Risk** — phân loại 5 cấp, danh sách cảnh báo & điểm mạnh cụ thể.
- **Deep Risk** — radar chart 7 trục + phân tích DuPont 3 nhân tố.
- **NPV/IRR** — NPV, IRR, hoàn vốn, waterfall chart, bảng độ nhạy, 3 kịch bản.
- **AI Consultant** — tư vấn tiếng Việt cá nhân hóa theo ngữ cảnh tài chính.
- **Xuất PDF** — tổng hợp toàn bộ kết quả phân tích.

## Các lựa chọn thiết kế quan trọng

- **Chọn SME làm người dùng:** phân khúc nhu cầu lớn nhất nhưng thiếu công cụ phù hợp;
  nhóm muốn làm thứ mà người không chuyên tài chính vẫn dùng được.
- **Tách backend (Node/Express) & frontend (HTML/JS):** 5 thành viên làm song song
  không chặn nhau, dễ gỡ lỗi.
- **Dùng file JSON thay database thật:** đủ để minh chứng tính năng trong phạm vi học
  thuật; ghi nhận là điểm cần nâng cấp.
- **Chọn DeepSeek thay vì model cao cấp:** chi phí API rất thấp, tiếng Việt tốt, phù
  hợp demo không giới hạn.
- **Bỏ web scraping live khỏi MVP:** scrape website ngân hàng dễ bị anti-bot/Cloudflare
  chặn; dùng dữ liệu tĩnh + fallback để sản phẩm luôn chạy ổn định khi demo.

## Điểm nhóm thấy làm tốt

- ✅ **Scoring 8 tiêu chí có chiều sâu tài chính** — bộ trọng số 25/20/10/10/10/10/10/5
  được thiết kế có chủ đích theo cách ngân hàng đánh giá hồ sơ SME, không phải ngẫu nhiên.
- ✅ **Deep Risk 7 chiều + radar chart** — không chỉ một con số rủi ro mà cả bức tranh
  đa chiều, kèm phân tích DuPont.
- ✅ **Phân công theo tầng, ít phụ thuộc chéo** — UI / API / scraper chạy song song.
- ✅ **Deploy được & truy cập được** — URL public chạy thật trên Render, không chỉ localhost.

## Hạn chế hiện tại

- ⚠ **Web scraper chưa ổn định** — đôi khi bị anti-bot chặn; đang dùng dữ liệu tĩnh
  làm fallback nên lãi suất có thể chưa real-time.
- ⚠ **Database là file JSON — không mở rộng** — nhiều người ghi đồng thời có thể gây
  write collision; cần PostgreSQL/MongoDB/Supabase cho production.
- ⚠ **Mobile responsiveness chưa tối ưu** — một số bảng/biểu đồ tràn layout trên điện thoại.
- ⚠ **Chưa có authentication** — dùng chung database, chưa lưu hồ sơ/lịch sử theo doanh nghiệp.
- ⚠ **AI Consultant chưa đủ ngữ cảnh** — nếu truyền kết quả scoring/risk vào prompt,
  tư vấn sẽ chính xác hơn nhiều.

## Điều nhóm học được

- **Phân tích vấn đề & người dùng:** xác định đúng vấn đề khó hơn viết code. Từ ý định
  ban đầu là "tool so sánh lãi suất", nhóm nhận ra vấn đề thật là SME thiếu khung tham
  chiếu để tự đánh giá — dẫn đến việc bổ sung tính năng đánh giá rủi ro.
- **Làm việc nhóm:** phân công theo *tầng kiến trúc* (không theo tính năng) giảm xung
  đột rõ rệt; ai sở hữu layer nào thì toàn quyền trong layer đó.
- **Thiết kế logic tài chính:** công thức chuẩn không khó; cái khó là bộ trọng số &
  ngưỡng scoring phản ánh đúng thực tiễn — cần kiểm chứng với người trong ngành.
- **Deploy & vận hành:** "works on my machine" vô nghĩa ở production — gặp lỗi biến môi
  trường, CORS, cold start, đường dẫn Windows vs Linux. Bài học: deploy sớm, test thường xuyên.
- **Quản lý thời gian:** tạm hoãn scraping live để hoàn thiện phần cốt lõi trước
  deadline — quyết định đúng, sản phẩm demo tốt hơn dự kiến.

## Gợi ý cho khóa sau

1. **Bắt đầu từ bài toán, không từ công nghệ** — hỏi "SME cần gì khi đi vay?" trước,
   rồi mới chọn stack.
2. **Deploy từ tuần đầu** — ngay cả khi chỉ có 1 endpoint; nhiều lỗi chỉ xuất hiện trên production.
3. **Kiểm chứng thuật toán với người trong ngành** — sách giáo khoa chỉ là điểm xuất phát.
4. **Nâng cấp database trước khi thêm tính năng** — thay JSON bằng PostgreSQL/Supabase sớm.
5. **Truyền ngữ cảnh cho AI Consultant** — đưa kết quả risk/scoring vào system prompt
   để AI trả lời theo tình huống cụ thể thay vì lời khuyên chung chung.

---

<div align="center">

**Group 10 · Financial Analyzer Pro · NHA408E · 2025–2026 · FTU Hà Nội**

</div>
