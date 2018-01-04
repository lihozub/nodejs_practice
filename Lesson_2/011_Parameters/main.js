'use strict';

const Event = require('events').EventEmitter;
const emitter = new Event();

emitter.on('myEvent' , (a, b, c) => {
  console.log('listener 1');
  console.log(a, b, c);
});

emitter.on('myEvent' , function() {
  console.log('listener 2');
  
  let paramsArray = [];
  
  for(let item of arguments) {
    paramsArray.push(item);
  }
  console.log(...paramsArray);
});

let arr = [1, 2, 4];

emitter.emit('myEvent', ...arr);