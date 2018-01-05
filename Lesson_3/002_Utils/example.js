const utils = require('util');

function oldFunction() {
  console.log('This is an old function!');
}

function newFunction() {
  console.log('This is a new function!');
}

exports.oF = utils.deprecate(oldFunction, 'Function deprecated. Use a newFunction!');
exports.nF = newFunction;