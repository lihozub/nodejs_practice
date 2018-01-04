function createConnection() {
  this.connect = () => {
    console.log('Connection established!');
  }
}

function testConnection() {
  console.log('Test connection...');
  new createConnection().connect();
}

if(module.parent) {
  module.exports = createConnection;
} else {
  testConnection();
}