console.log('File A is loading...');

exports.done = false;

const b = require('./testB');
console.log('in TestA, testB =', b.done);

exports.done = true;

console.log('File A is done!');