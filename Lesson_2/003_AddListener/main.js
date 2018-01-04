'use strict';

let count = 0;
let print = () => {
  count++;
  console.log('Click -', count, '\n');
};

const evt = require('events');
const emitter = new evt.EventEmitter;

emitter.on('click', print);
emitter.addListener('click', print);
emitter.once('click', print);

emitter.emit('click');
emitter.emit('click');