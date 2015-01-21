var
    chai = require('chai'),
    cassier = require('../src/cassier');

chai.should();

describe('Cassier money module', function () {
    beforeEach(function () {
        cassier.locale('en');
    });

    it('Should return $1.00', function () {
        var money = new cassier.Money(1, 'USD');
        money.toString().should.equal('$1.00');
    });

    it('Bad JS arithmetic 0.3 - 0.1 = 0.19999999999999998', function () {
        (0.3 - 0.1).should.equal(0.19999999999999998);
    });

    it('Good money arithmetic $0.3 - $0.1 = $0.20', function () {
        var money = new cassier.Money(0.3, 'USD');
        money.sub(0.1, 'USD').toString().should.equal('$0.20');
    });

    it('More arithmetic $1200.30 + $0.70 - $1000.00 = $201.00', function () {
        var money = new cassier.Money(1200.30, 'USD');
        money.add(0.7, 'USD').sub(1000, 'USD').toString().should.equal('$201.00');
    })
});
