/*! German locale for Cassier. */

(function () {
    var hasModule = (typeof module !== "undefined" && module.exports),
        locale = 'de',
        settings = {
            decimal: ',',
            thousand: '.',
            format: '%s%c%v',
            native_currency: 'EUR'
        };

    if (hasModule) {
        module.exports = function (cassier) {
            cassier.locale(locale, settings);
        };
    } else if (typeof define !== "undefined" && define.amd) {
        define(['cassier'], function (cassier) {
            cassier.locale(locale, settings);
        });
    } else {
        if (typeof window.cassier === "object" && window.cassier.locale) {
            window.cassier.locale(locale, settings);
        }
    }
})();