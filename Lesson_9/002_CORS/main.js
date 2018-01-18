const express = require('express');
const app =express();
const port = 8080;

const router = require('./route');

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router.route);

app.listen(port, function () {
  console.log(`app running on http://localhost:${port}`);
});