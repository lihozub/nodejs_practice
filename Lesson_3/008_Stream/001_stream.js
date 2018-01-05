const fs = require('fs');
let writeData = 'This is the file content';

let writerStream = fs.createWriteStream('output.txt');

writerStream.write(writeData, 'utf-8');
writerStream.end();

writerStream.on('finish', function () {
  console.log('Write completed');
});

writerStream.on('error', function (err) {
  console.log(err);
});

let readData = '';

let readerStream = fs.createReadStream('output.txt');

readerStream.setEncoding('utf-8');

readerStream.on('data', function (chunk) {
  readData += chunk;
});

readerStream.on('end', function () {
  console.log(readData);
});

readerStream.on('error', function (err) {
  console.log(err);
});