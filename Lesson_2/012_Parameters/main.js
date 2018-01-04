const Event = require('events').EventEmitter;
const emitter = new Event();

emitter.on('myEvent' , (a, b, c) => {
  console.log(a, b, c);
});

let arr = [1, 2, 4]

emitter.emit('myEvent', ...arr);