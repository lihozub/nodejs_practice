const evt = require('events');
const emitter = new evt.EventEmitter();

emitter.on('create', () => {
  console.log('Folder was created');
});

emitter.emit('create');