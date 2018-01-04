console.log("Cache activate");
module.exports = {
  fname: "Ivan",
  lname: "Ivanov",
  age: 25,
  sayHello: function () {
    console.log('Hello!', 'My name is', this.fname, 'I\'m', this.age, 'y.o!');
  }
};