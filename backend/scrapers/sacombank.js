const BaseScraper = require('./baseScraper');

class SacombankScraper extends BaseScraper {
    constructor() {
        super('Sacombank', [
            'https://www.sacombank.com.vn/lai-suat',
            'https://www.sacombank.com.vn/ca-nhan/vay-von'
        ]);
    }

    getFallbackData() {
        return [
            { packageName: "Vay sản xuất kinh doanh", interestRate: 7.49, maxTerm: 120, minLoan: 50000000, maxLoan: 5000000000, pros: "Thủ tục đơn giản", cons: "Lãi suất sau ưu đãi cao", requirements: "CMND, ĐKKD" }
        ];
    }
}

module.exports = new SacombankScraper();
