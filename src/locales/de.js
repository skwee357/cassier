/*! German locale for Cassier formatter. */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../cassier'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('../cassier'));
    } else {
        if (typeof this.cassier !== "object") {
            throw new Error('No cassier defined');
        }
        factory(this.cassier);
    }
}(this, function (cassier) {
    cassier.locale('de', {
        decimal: ',',
        thousand: '.',
        number_format: '%s%v',
        money_format: '%c%n',
        decimal_digits: 2,
        native_currency: 'EUR'
    });
}));
