const Event = require('events').EventEmitter;
const emitter = new Event();

emitter.on('myEvent' , function() {
  console.log('Ordinary Function');
  console.log(this);
});

exports.x = 10;

emitter.on('myEvent' , () => {
  console.log('Arrow Function');
  console.log(this);
});

emitter.emit('myEvent');