const Event = require('events').EventEmitter;
const emitter = new Event();

emitter.on('error' , (error) => {
  console.log('Processing error!');
  console.log(error);
});

emitter.emit('error', new Error('test error'));