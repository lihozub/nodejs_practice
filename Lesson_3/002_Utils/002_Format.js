const utils = require('util');

let user = {
  name: 'Ivan',
  age: 25,
  salary: 10000,
  bonus: 15
};

let str = utils.format('Hello, my name is %s. I\'m %d years old! My bonuses from the salary are %d%%', user.name, user.age, user.bonus);

console.log(str);
console.log('');
console.log('%j', user);