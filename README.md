# Cassier
Cassier knows everything about money and can format it for you!

This small library was created in order to format different money values. For example if you store the value "4100.30" with currency "USD" in you database, using cassier you can display it in a nice way to the user based on his locale:
```javascript
cassier.formatMoney(4100.30, 'USD', 'en');
```
this will output ```$ 4,100.30```, however if your user is from Germany using the ```de``` locale
```javascript
cassier.formatMoney(4100.30, 'USD', 'de');
```
will output ```US$4.100,30```

# Available on NPM
```npm install cassier```

# Available on Bower
Sorry, not yet. Will do as soon as possible.

# Build and test
You need to have grunt in order to build and test cassier.

Run ```grunt build``` to test / hint / uglify cassier, or run ```grunt test``` to run only the tests.

# Supported locales
By default en_US (named ```en``` in cassier) is supported. I also added ```de``` however I'm not fluent in German and American English is not my native language, so if the locales are incorrect, please submit pull request (en locale is define inside cassier.js).

If you want to add your locale, please submit pull request **with test** (see ```tests/locale_de.js``` for test example). Pull requests without tests won't be merged.

# Supported currencies
The currency list comes from here https://gist.github.com/brickcap/43681dadc0b6c91ec0b8
So many thanks to @brickcap

If you notice an outdated / invalid information, again submit pull request.

# Special Thanks
To the guy who wrote the peotry answer to this SO question http://stackoverflow.com/questions/149055/how-can-i-locale-numbers-as-money-in-javascript

Inspired by:
- https://github.com/openexchangerates/accounting.js
- https://github.com/adamwdraper/Numeral-js

# Roadmap
* More locales
* Bower component

# License
MIT, see LICENSE file
