const utils = require('util');

function Base() {
  this.name = 'Base';
}

Base.prototype.say = function () {
  console.log('Hello, this is a %s function', this.name);
};

function Derived() {
  this.name = 'Derived';
}

utils.inherits(Derived, Base);

Derived.prototype.getData = function () {
  console.log('Some data from Derived function');
};

const derived = new Derived();
const base = new Base();
derived.getData();
derived.say();
base.say();