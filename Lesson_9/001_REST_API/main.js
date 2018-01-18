const express = require('express');
const app =express();
const port = 8080;

const router = require('./route');

app.use('/api', router.route);

app.listen(port, function () {
  console.log(`app running on http://localhost:${port}`);
});