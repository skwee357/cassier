var
    should = require('chai').should(),
    cassier = require('../src/cassier');

describe('Cassier with default english localization', function () {
    it('Localization should equal en', function () {
        cassier.locale('en').should.equal('en');
    });

    it('1234.56 USD should equals $ -1234.56', function () {
        cassier.formatMoney(-1234.56, 'USD').should.equal('$ -1,234.56');
    });

    it('456.20 EUR should equals € 456.20', function () {
        cassier.formatMoney(456.20, 'EUR').should.equal('€ 456.20');
    });

    it('456.249 USD should equals $ 456.25', function () {
        cassier.formatMoney(456.249, 'USD').should.equal('$ 456.25');
    });

    it('456.299 USD should equals $ 456.30', function () {
        cassier.formatMoney(456.299, 'USD').should.equal('$ 456.30');
    });

    it('456.299 AUD should equals AU$ 456.30', function () {
        cassier.formatMoney(456.299, 'AUD').should.equal('AU$ 456.30');
    });
});
