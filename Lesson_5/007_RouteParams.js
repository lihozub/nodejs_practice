const express = require('express');
const app = express();
const port = 8080;

app.get('/category/:categoryId', function (request, response) {
  console.log(request.params);
  response.end(`<h1>${request.params['categoryId']}</h1>`);
});

app.get('/category/:categoryId/product/:productId', function (request, response) {
  console.log(`category: ${request.params['categoryId']}`);
  console.log(`product: ${request.params['productId']}`);
  response.end(`<h1>${request.params['categoryId']}</h1><h3>${request.params['productId']}</h3>`);
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});