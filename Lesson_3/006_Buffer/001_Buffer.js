let buff1 = Buffer.alloc(10);
console.log('empty buffer:', buff1);

let nibuff = Buffer.allocUnsafe(10);
console.log('uninitialized buffer:', nibuff);
console.log('Length of buffer:', buff1.length);