# inequality-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/inequality-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/inequality-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/inequality-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/inequality-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/inequality-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/inequality-arbitrary-precision)

Inequality operations abstraction to extend [core-arbitrary-precision](https://github.com/javiercejudo/core-arbitrary-precision/)

## Install

    npm i inequality-arbitrary-precision

## Adapters

- [[adapter]](https://github.com/javiercejudo/floating-adapter) [[lib]](https://github.com/javiercejudo/floating) floating

## Usage

```js
var adapter = require('floating-adapter');
var inequalityEnhancer = require('inequality-arbitrary-precision');

var Decimal = inequalityEnhancer(require('core-arbitrary-precision')(adapter));

new Decimal('12').gt(new Decimal('5')); // => true
new Decimal('12').lt(new Decimal('5')); // => false
```

Operations: `gt`, `gte`, `lt`, `lte`, `cmp` (-1, 0, 1).

Individual extenders can be applied as `inequalityEnhancer.lt(Decimal)`.

See [spec](test/spec.js).
