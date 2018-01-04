console.log("Main module is starting.");

const a = require('./testA');
const b = require('./testB');

console.log('in main, testA.done =', a.done, 'testB.done =', b.done);