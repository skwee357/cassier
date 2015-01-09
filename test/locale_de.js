var
    should = require('chai').should(),
    cassier = require('../src/cassier');

describe('Cassier with german localization', function () {
    it('Localization should equal de', function () {
        cassier.locale('de').should.equal('de');
    });

    it('400.90 EUR should equal €400,90', function () {
        cassier.formatMoney(400.90, 'EUR').should.equal('€400,90');
    });

    it('1400.949 EUR should equal €1.400,95', function () {
        cassier.formatMoney(1400.949, 'EUR').should.equal('€1.400,95');
    });

    it('-200.30 USD should equal -US$200,30', function () {
        cassier.formatMoney(-200.30, 'USD').should.equal('-US$200,30');
    });
});