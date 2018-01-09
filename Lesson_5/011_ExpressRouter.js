const express = require('express');
const app = express();
const port = 8080;
const router = express.Router();

router.route('/')
  .get(function (request, response) {
    response.send('List of products. Get method');
  })
  .post(function (request, response) {
    response.send('List of products. Post method');
  });

router.route('/:id')
  .get(function (request, response) {
    response.send(`Product ${request.params.id}`);
  });

app.use('/products', router);

app.get('/', function (request, response) {
  response.send("Главная страница");
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});