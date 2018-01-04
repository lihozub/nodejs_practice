const event = require('events').EventEmitter;
const emitter = new event();

emitter.on('myEvent' , () => {
  console.log("test string 1");
});

emitter.prependListener('myEvent' , () => {
  console.log("test string 2");
});

emitter.once('once' , () => {
  console.log("First once listener");
});

emitter.prependOnceListener('once' , () => {
  console.log("Second once listener");
});

emitter.emit('myEvent');
emitter.emit('once');