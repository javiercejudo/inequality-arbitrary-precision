/*jshint node:true, mocha:true */

'use strict';

require('should');

var flow = require('lodash.flow');

var adapter = require('floating-adapter');
var arbitraryPrecisionFactory = require('core-arbitrary-precision');
var cpmparisonEnhancers = require('../src/');

var ltTest = function(Decimal) {
  return function() {
    new Decimal('12').lt(new Decimal('5')).should.be.exactly(false);
    new Decimal('5').lt(new Decimal('12')).should.be.exactly(true);
    new Decimal('5').lt(new Decimal('5')).should.be.exactly(false);
  };
};

var lteTest = function(Decimal) {
  return function() {
    new Decimal('12').lte(new Decimal('5')).should.be.exactly(false);
    new Decimal('5').lte(new Decimal('12')).should.be.exactly(true);
    new Decimal('5').lte(new Decimal('5')).should.be.exactly(true);
  };
};

var gtTest = function(Decimal) {
  return function() {
    new Decimal('12').gt(new Decimal('5')).should.be.exactly(true);
    new Decimal('5').gt(new Decimal('12')).should.be.exactly(false);
    new Decimal('5').gt(new Decimal('5')).should.be.exactly(false);
  };
};

var gteTest = function(Decimal) {
  return function() {
    new Decimal('12').gte(new Decimal('5')).should.be.exactly(true);
    new Decimal('5').gte(new Decimal('12')).should.be.exactly(false);
    new Decimal('5').gte(new Decimal('5')).should.be.exactly(true);
  };
};

var cmpTest = function(Decimal) {
  return function() {
    new Decimal('12').cmp(new Decimal('5')).should.be.exactly(1);
    new Decimal('5').cmp(new Decimal('12')).should.be.exactly(-1);
    new Decimal('5').cmp(new Decimal('5')).should.be.exactly(0);
  };
};

describe('inequality-arbitrary-precision', function() {
  var Decimal = arbitraryPrecisionFactory(adapter);
  Decimal = cpmparisonEnhancers(Decimal);

  it('contains all inequality functions', flow(
    ltTest(Decimal),
    lteTest(Decimal),
    gtTest(Decimal),
    gteTest(Decimal),
    cmpTest(Decimal)
  ));
});

describe('lt', function() {
  var Decimal = arbitraryPrecisionFactory(adapter);
  Decimal = cpmparisonEnhancers.lt(Decimal);

  it('a < b', ltTest(Decimal));
});

describe('lte', function() {
  var Decimal = arbitraryPrecisionFactory(adapter);
  Decimal = cpmparisonEnhancers.lte(Decimal);

  it('a ≤ b', lteTest(Decimal));
});

describe('gt', function() {
  var Decimal = arbitraryPrecisionFactory(adapter);
  Decimal = cpmparisonEnhancers.gt(Decimal);

  it('a > b', gtTest(Decimal));
});

describe('gte', function() {
  var Decimal = arbitraryPrecisionFactory(adapter);
  Decimal = cpmparisonEnhancers.gte(Decimal);

  it('a ≥ b', gteTest(Decimal));
});

describe('cmp', function() {
  var Decimal = arbitraryPrecisionFactory(adapter);
  Decimal = cpmparisonEnhancers.cmp(Decimal);

  it('a ⊥ b', cmpTest(Decimal));
});
