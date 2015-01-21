var
    chai = require('chai'),
    assert = chai.assert,
    cassier = require('../src/cassier');

chai.should();

describe('Cassier currency module', function () {
    it('Should return USD currency', function () {
        var usd = cassier.currencyInfo('USD');
        usd.should.have.property('code', 'USD');
        usd.should.have.property('symbol', 'US$');
        usd.should.have.property('symbol_native', '$')
    });

    it('Should return null because currency XXX does not exist', function () {
        assert(cassier.currencyInfo('XXX') === null, "Not null");
    });
});
