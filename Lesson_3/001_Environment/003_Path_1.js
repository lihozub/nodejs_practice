const path = require('path');
const  filename = path.basename(__filename);
console.log('Current file:', filename);

console.log(path.resolve('./test'));

const extension = path.extname(__filename);
console.log('Current file has', extension, 'extension!');

const abs = path.isAbsolute(__dirname);
console.log('path.isAbsolute(', __dirname, ') - ', abs);
console.log('path.isAbsolute(', 'public/myProject/test', ') - ', path.isAbsolute('public/myProject/test'));