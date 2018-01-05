const fs = require('fs');
const writer = require('./002_writeFile');

if (fs.existsSync('./text.txt')) {
  reader();
} else {
  writer();
}

function reader() {
  fs.readFile('text.txt', {encoding: 'utf-8'}, function (err, data) {
    if (err) {
      console.log(err);
      return false;
    }
    
    let obj = JSON.parse(data);
    console.log(obj.fname, obj.lname, obj.age, obj.position);
  });
}