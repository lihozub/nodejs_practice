const Event = require('events').EventEmitter;
const emitter = new Event();

emitter.on('myEvent' , () => {
  console.log('First listener');
});

emitter.on('myEvent' , () => {
  console.log('Second listener');
});

let listeners = emitter.listeners('myEvent');

for (let i = 0; i < listeners.length; i++) {
  listeners[i]();
}