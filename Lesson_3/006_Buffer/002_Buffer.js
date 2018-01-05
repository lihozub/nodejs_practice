console.log(Buffer.byteLength('hello world', 'utf-8'));

let buff1 = Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90]);
let buff2 = Buffer.from('Hello world!!!', 'utf8');
let buff3 = Buffer.from([50, 60, 70, 80, 90, 10, 20, 30, 40]);

console.log(buff1[2]);

console.log('Compare buffer:', buff1.compare(buff2));
console.log('Index compare:', buff1.compare(buff3, 5, 9, 0, 4));

let newBuff = Buffer.concat([buff1, buff2]);
console.log(newBuff);
console.log(Buffer.isBuffer(newBuff));

console.log("Position of symbol 'l' from start", buff2.indexOf('l'));
console.log("Position of symbol 'l' from end", buff2.lastIndexOf('l'));