var
    chai = require('chai'),
    cassier = require('../src/cassier');

chai.should();

describe('Cassier module in German', function () {
    beforeEach(function() {
        cassier.locale('de');
    });

    it('Localization should equal de', function () {
        cassier.locale().should.equal('de');
    });

    it('Should format 1200.30 as 1.200,30', function() {
        cassier.formatNumber(1200.30).should.equal('1.200,30');
    });

    it('Should format -1200.30 as -1.200,30', function() {
        cassier.formatNumber(-1200.30).should.equal('-1.200,30');
    });

    it('Should format 1200.399 as 1.200,40', function() {
        cassier.formatNumber(1200.399).should.equal('1.200,40');
    });

    it('Should format 1200.30 EUR as €1.200,30', function() {
        cassier.formatMoney(1200.30, 'EUR').should.equal('€1.200,30');
    });

    it('Should format -1200.30 EUR as €-1.200,30', function() {
        cassier.formatMoney(-1200.30, 'EUR').should.equal('€-1.200,30');
    });

    it('Should format 1200.30 USD as US$1.200,30', function() {
        cassier.formatMoney(1200.30, 'USD').should.equal('US$1.200,30');
    });
});
