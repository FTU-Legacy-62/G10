const BaseScraper = require('./baseScraper');

class VPBankScraper extends BaseScraper {
    constructor() {
        super('VPBank', [
            'https://www.vpbank.com.vn/lai-suat',
            'https://www.vpbank.com.vn/khach-hang-ca-nhan/vay-von'
        ]);
    }

    getFallbackData() {
        return [
            { packageName: "Vay doanh nghiệp vừa và nhỏ", interestRate: 6.9, maxTerm: 120, minLoan: 50000000, maxLoan: 6000000000, pros: "Thủ tục nhanh", cons: "Phí xử lý", requirements: "Hoạt động có lãi" }
        ];
    }
}

module.exports = new VPBankScraper();
