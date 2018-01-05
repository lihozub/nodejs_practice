const repl = require('repl');

const server = repl.start();

server.defineCommand('hello', {
  action(name) {
    console.log('Hello', name);
  }
});