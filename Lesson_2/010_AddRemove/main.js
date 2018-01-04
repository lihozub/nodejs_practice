const Event = require('events').EventEmitter;
const emitter = new Event();
let count = 0;

emitter.on('newListener' , (event, listener) => {
  if(event == 'myEvent') {
    console.log("myEvent was added to emitter");
  }
});

emitter.on('removeListener', (event, listener) => {
  if(event == 'myEvent') {
    console.log("myEvent was removed from emitter");
  }
});

emitter.on('myEvent', test);

console.log(emitter.listenerCount('myEvent'));

emitter.removeListener('myEvent', test);
console.log(emitter.listenerCount('myEvent'));

function test() {
  console.log('test event!');
}