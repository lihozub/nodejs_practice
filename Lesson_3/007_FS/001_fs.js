const fs = require('fs');
console.log('Going to open file!');

fs.open('demofile.txt', 'w+', function (err, fd) {
  console.log('Opening file!');
  
  if (err) {
    console.log(err);
  } else {
    fs.write(fd, 'This is the file content!', {encoding: 'utf-8'}, function (err, written, string) {
      console.log('Writing to file!');
      
      if (err) {
        throw err;
      }
  
      console.log(written);
      console.log(string);
    });
    
    let arr = new Uint16Array(1024);
    let buf = Buffer.from(arr.buffer);
    
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      console.log("Reading from file!");
      
      if (err) throw err;
  
      console.log(bytes);
      console.log(buf.slice(0, bytes).toString());
    });
    
    fs.close(fd, function (err) {
      if (err) throw err;
      console.log('File closed!');
    });
  }
});