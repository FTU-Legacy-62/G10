const BaseScraper = require('./baseScraper');

class VietcombankScraper extends BaseScraper {
    constructor() {
        super('Vietcombank', [
            'https://www.vietcombank.com.vn/lai-suat/',
            'https://www.vietcombank.com.vn/san-pham-dich-vu/cho-vay-doanh-nghiep/'
        ]);
    }

    getFallbackData() {
        return [
            { packageName: "Cho vay sản xuất kinh doanh", interestRate: 4.6, maxTerm: 12, minLoan: 50000000, maxLoan: 30000000000, pros: "Lãi suất chỉ từ 4,6%/năm", cons: "Chỉ vay ngắn hạn", requirements: "Phương án SXKD khả thi" },
            { packageName: "Cho vay trung dài hạn TSCĐ", interestRate: 5.9, maxTerm: 120, minLoan: 100000000, maxLoan: 30000000000, pros: "Lãi suất từ 5,9%/năm", cons: "Yêu cầu phương án khả thi", requirements: "Phương án đầu tư TSCĐ" }
        ];
    }
}

module.exports = new VietcombankScraper();
