let arr1 = new Uint16Array(11);
const buf1 = Buffer.from(arr1.buffer);

let arr2 = new Uint16Array(4);
const buf2 = Buffer.from(arr2.buffer);

let arr4 = new Uint16Array(10);
const buf4 = Buffer.from(arr4.buffer);

buf1.write('123', 2, 2);
buf2.write('1234', 2, 3);

let bufData = buf1.toString('utf-8', 2, 3);
console.log(bufData);

let buf3 = Buffer.concat([buf1, buf2], 28);
console.log(buf3.toString());

buf2.copy(buf4, 0, 0, 3);
console.log(buf4.toString());
