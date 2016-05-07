/*jshint node:true */

'use strict';

var binaryOpExtender = require('binary-op-arbitrary-precision').asIs;

var operations = ['gt', 'gte', 'lt', 'lte', 'cmp'];

var extenderFactory = function extenderFactory(op) {
  return function(Decimal) {
    return binaryOpExtender(Decimal, op);
  };
};

var extenders = operations.reduce(function(acc, op) {
  acc[op] = extenderFactory(op);

  return acc;
}, {});

var inequalityExtender = function(Decimal) {
  return operations.reduce(function(acc, opExtenderKey) {
    return extenders[opExtenderKey](Decimal);
  }, Decimal);
};

operations.forEach(function(key) {
  inequalityExtender[key] = extenders[key];
});

module.exports = inequalityExtender;
