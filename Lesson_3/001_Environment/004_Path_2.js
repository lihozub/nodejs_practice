const path = require('path');
const file = '004_Path_2.js';
const filePath = path.join(__dirname, file);

console.log(filePath);

const pathParts = path.parse(filePath);
console.log(pathParts);

console.log('System separator:', path.sep);

let objFormated = {
  root: '/',
  dir: `${__dirname}/uploads`,
  ext: '.gif',
  name: 'gaga'
};

const obj = path.format(objFormated);
console.log(obj);