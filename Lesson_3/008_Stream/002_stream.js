const fs = require('fs');

let readerStream = fs.createReadStream('input.txt');
let writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

writerStream.on('finish', function () {
    console.log('data has written to output.txt');
});

writerStream.on('error', function (err) {
    console.log(err);
});