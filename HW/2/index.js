const event = require('events');

function FileStream(filename = '') {
  this.filename = filename;
}

FileStream.prototype = new event.EventEmitter();

FileStream.prototype.readFile = function () {
  this.emit('read');
  console.log('File was read!');
};

FileStream.prototype.writeFile = function () {
  this.emit('write');
  console.log('File was write!');
};

let reader = new FileStream();

reader.on('read', function () {
  console.log('Reading the file...');
});

reader.on('write', function () {
  console.log('Writing the file...');
});

reader.writeFile();