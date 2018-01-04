const fileReader = require('./readFile');
const reader = new fileReader.Reader();

reader.readDataFromFile('file.js', (response) => {
  console.log(response);
});