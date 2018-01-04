const Event = require('events').EventEmitter;
const emitter = new Event();

emitter.setMaxListeners(20);

for(let index = 0; index < 15; index++) {
  let current = index;
  emitter.on('myEvent' , function() {
    console.log(current);
  });
}

console.log('EMT has', emitter.listenerCount('myEvent'), 'listeners.');

emitter.emit('myEvent');