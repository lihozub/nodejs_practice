const event = require('events').EventEmitter;
const emitter = new event();

emitter.on('event' , () => {
  setImmediate(() => {
    console.log("Listener #1");
  });
});

emitter.on('event' , () => {
  console.log("Listener #2");
});

emitter.on('event' , () => {
  setImmediate(() => {
    console.log("Listener #3");
  });
});

emitter.emit('event');