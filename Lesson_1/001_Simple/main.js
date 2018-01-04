function User(name) {
  this.name = name;
  this.sayHello = () => {
    console.log('Hello', this.name);
  };
}

let John = new User('John');

John.sayHello();