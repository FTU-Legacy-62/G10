# Financial Analyzer

## Mã nhóm

G10

## Thành viên

| Họ tên | Mã sinh viên | Vai trò chính |
|---|---|---|
| Đạt |2312380006 | Backend API, Database, Deploy, Risk Scoring, DeepSeek AI |
| Huy |2312380011 | BaseScraper Engine, BIDV Scraper, Database |
| Tuấn |2312380088 | UI/UX, Financial Engine, Dashboard, AI Consultant |
| Phước |2312380026 | Web Scraper VPBank + Vietcombank |
| Quang |2312380029 | Web Scraper MBBank + Techcombank, Tích hợp scraper |

## Mô tả ngắn về sản phẩm

Financial Analyzer là nền tảng phân tích tài chính doanh nghiệp dành cho các doanh nghiệp vừa và nhỏ (SME) tại Việt Nam. Sản phẩm giúp doanh nghiệp tự động tính toán các chỉ số tài chính quan trọng như ROE, ROA, D/E, ICR, đánh giá rủi ro tín dụng, so sánh các gói vay ngân hàng theo 8 tiêu chí với hệ thống chấm điểm thông minh, và nhận tư vấn từ AI. Ngoài ra, sản phẩm còn hỗ trợ phân tích đầu tư dự án qua NPV, IRR và phân tích độ nhạy, cũng như phân tích ROE theo mô hình DuPont 3 nhân tố.

## Vấn đề sản phẩm giải quyết

**Sản phẩm giải quyết vấn đề gì?**  
Các doanh nghiệp SME tại Việt Nam gặp khó trong việc tự đánh giá sức khỏe tài chính, so sánh các gói vay ngân hàng, và ra quyết định vay do thông tin về các gói vay thường không tập trung và khó tìm kiếm.

**Ai đang gặp vấn đề này?**  
Chủ doanh nghiệp vừa và nhỏ, các chuyên viên tài chính tại các SME chưa có công cụ phân tích chuyên nghiệp.

**Vì sao vấn đề này đáng quan tâm?**  
Theo thống kê, SME chiếm hơn 90% số lượng doanh nghiệp tại Việt Nam và đóng góp lớn vào GDP. Khả năng tiếp cận tín dụng hiệu quả là yếu tố sống còn cho sự phát triển của nhóm doanh nghiệp này. Một công cụ phân tích tài chính toàn diện, dễ sử dụng sẽ giúp SME ra quyết định vay vốn chính xác hơn, giảm thiểu rủi ro tài chính.

## Người dùng mục tiêu

**Người dùng chính của sản phẩm là ai?**  
Chủ doanh nghiệp SME và chuyên viên tài chính tại các doanh nghiệp vừa và nhỏ. Ngoài ra các hộ kinh doanh cũng là người dùng tiềm năng của sản phâme này.

**Họ dùng sản phẩm trong tình huống nào?**  
- Khi cần đánh giá sức khỏe tài chính của doanh nghiệp trước khi vay vốn.
- Khi muốn so sánh các gói vay từ nhiều ngân hàng để chọn gói phù hợp nhất.
- Khi cần phân tích hiệu quả của một dự án đầu tư.
- Khi muốn hiểu rõ các chỉ số tài chính và rủi ro của doanh nghiệp.

## Tính năng chính

- **Đánh giá rủi ro nhanh (Quick Risk):** Tính toán 8 chỉ số tài chính cốt lõi (CR, D/E, ICR, PM, ATO, ROA, ROE, DSCR) với benchmark theo ngành, chấm điểm và phân loại rủi ro 5 cấp độ kèm cảnh báo.
- **Đánh giá rủi ro chuyên sâu (Deep Risk):** Phân tích 7 chiều rủi ro (thanh khoản, đòn bẩy, sinh lời, hiệu quả TS, rủi ro lãi suất, kinh nghiệm, quy mô) với biểu đồ radar trực quan.
- **So sánh gói vay ngân hàng (8 tiêu chí):** Chấm điểm và xếp hạng các gói vay dựa trên lãi suất, khả năng trả nợ, hạn mức, thời hạn, LTV, đòn bẩy DN, thu nhập và phí xử lý.
- **Phân tích đầu tư NPV/IRR:** Tính NPV, IRR, thời gian hoàn vốn, kèm phân tích độ nhạy (14 mức lãi suất) và phân tích kịch bản (bi quan, cơ sở, lạc quan).
- **Dashboard trực quan:** Biểu đồ cơ cấu tài sản, cơ cấu nguồn vốn, xu hướng lợi nhuận, dòng tiền và lịch trả nợ.
- **Phân tích DuPont:** Phân rã ROE thành 3 nhân tố: Biên lợi nhuận ròng × Vòng quay tài sản × Hệ số nhân vốn.
- **AI Consultant:** Trợ lý ảo tư vấn tài chính (tích hợp DeepSeek API).
- **Xuất báo cáo PDF:** Tự động xuất báo cáo phân tích tài chính toàn diện.

## Link demo
**Link web:** *https://financial-analyzer-ooel.onrender.com*

## Ghi chú về dữ liệu nếu có

- **Dữ liệu ngân hàng:** Dữ liệu mẫu được nhúng sẵn trong code (6 gói vay từ Vietcombank, BIDV, Techcombank, VPBank, Sacombank). Có thể cập nhật thủ công qua tab "Admin DB" hoặc thông qua web scraper.
- **Dữ liệu vĩ mô:** Lấy từ API công khai của World Bank (GDP, lạm phát), SBV (Lãi suất tái cấp vốn) và ExchangeRate-API (tỷ giá USD/VND).
- **Dữ liệu doanh nghiệp:** Do người dùng nhập trực tiếp vào form.
- **AI Consultant:** Tích hợp API DeepSeek (yêu cầu API Key để hoạt động).

## Ghi chú thêm

- Sản phẩm hỗ trợ chuyển đổi giao diện sáng/tối và song ngữ Việt - Anh.
- Có thể xuất báo cáo PDF kết quả phân tích bằng nút "Xuất PDF" trên thanh điều hướng.
- Tab "Admin DB" chỉ hiển thị khi bật chế độ Dev (nhấn nút Dev và nhập mật khẩu `admin123`).
