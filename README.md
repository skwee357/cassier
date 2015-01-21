# Cassier
Cassier knows everything about money and can format it for you!

This small library was created in order to format different money values and to provide money arithmetic based on big.js.

# Available on NPM
```npm install cassier```

# Available on Bower
```bower install cassier```

# Build and test
You need to have grunt in order to build and test cassier.

Run ```grunt build``` to test / hint / uglify cassier, or run ```grunt test``` to run only the tests.

# Supported locales
By default en_US (named ```en``` in cassier) is supported. I also added ```de``` however I'm not fluent in German and American English is not my native language, so if the locales are incorrect, please submit pull request (en locale is define inside cassier.js).

If you want to add your locale, please submit pull request **with test** (see ```tests/locale_de.js``` for test example). Pull requests without tests won't be merged.

# How to add new locale?
1. Create a new locale file name <locale>.js when locale is either 2 letter (en, de, fr) or 4 letter (en_US, en_GB) name.
2. Use ```de.js``` as reference on how to support nodejs module or requirejs define/require.
3. You locale name should match the locale file name (i.e. en.js define locale named "en").
4. Locale settings consist of the following fields:
  1. *decimal* - this is the decimal separator character (i.e. 500.30 - dot is the separating character)
  2. *thousand* - this is the thousands separator character (i.e. 1,500,300 - comma is the separating character)
  3. *number_format* - the format of the number when
    1. %s - is the minus sign position
    2. %v - is the value position
  4. *money_format* - the format of the money when
    1. %c - is currency symbol position
    2. %n - is number position
  5. *native_currency* - is the native currency for this locale.

# API
cassier.isValidCurrency(code):boolean - Checks whether give currency code is valid or not.

cassier.currencyInfo(code):object|null - Returns currency info by code (null if no such currency). Info includes the following fields: name, symbol, symbol_native, decimal_digits, rounding, code, name_plural.

cassier.allCurrencies()|object - Return an object of all supported currencies.

cassier.locale(locale, obj)|string - Defines / changes / get locale. If no arguments given will return the current locale used. If only locale is given, will try to switch to this locale if possible (if not Error will be thrown). If both locale and obj given, defines a new locale and switches to it.

cassier.formatNumber(value, decimal_digits, locale)|string - Formats a number using the formatting rules of given locale. If no locale given - uses the currently active locale. If no decimal_digits given, will use 2 as fallback.

cassier.formatMoney(amount, currency, locale)|string - Formats money using the formatting rules of given locale. If no locale given - uses the currency active locale.

cassier.Money(amount, currency)|Money - A money object constructor. Creates new money using big.js.

cassier.Money.add(amount, currency)|Money - Adds given amount to this money object. Currency conversion is not yet supported.

cassier.Money.sub(amount, currency)|Money - Subtracts given amount from this money object. Currency conversion is not yet supported.

cassier.Money.toString()|string - Formats the current money value as string based on currently active locale.

# Supported currencies
The currency list comes from here https://gist.github.com/brickcap/43681dadc0b6c91ec0b8
So many thanks to @brickcap

If you notice an outdated / invalid information, please submit pull request.

# Special Thanks
To the guy who wrote the peotry answer to this SO question http://stackoverflow.com/questions/149055/how-can-i-locale-numbers-as-money-in-javascript

Inspired by:
- https://github.com/openexchangerates/accounting.js
- https://github.com/adamwdraper/Numeral-js

# Roadmap
* More locales
* Currency conversion

# License
The MIT License (MIT)

Copyright (c) 2015 Dmitry <skwee357> Kudryavtsev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
