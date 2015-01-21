var
    chai = require('chai'),
    cassier = require('../src/cassier');

chai.should();

cassier.locale('en');

describe('Cassier module in English', function () {
    beforeEach(function() {
        cassier.locale('en');
    });

    it('Localization should equal en', function () {
        cassier.locale().should.equal('en');
    });

    it('Should format 1200.30 as 1,200.30', function () {
        cassier.formatNumber(1200.30).should.equal('1,200.30');
    });

    it('Should format -1200.30 as -1,200.30', function () {
        cassier.formatNumber(-1200.30).should.equal('-1,200.30');
    });

    it('Should format 1200.399 as 1,200.40', function () {
        cassier.formatNumber(1200.399).should.equal('1,200.40');
    });

    it('Should format 1200.399 as 1,200.399', function () {
        cassier.formatNumber(1200.399, 3).should.equal('1,200.399');
    });

    it('Should format 1200.30 USD as $1,200.30', function () {
        cassier.formatMoney(1200.30, 'USD').should.equal('$1,200.30');
    });

    it('Should format -1200.30 USD as $-1,200.30', function () {
        cassier.formatMoney(-1200.30, 'USD').should.equal('$-1,200.30');
    });
});
