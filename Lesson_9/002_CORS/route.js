const express = require('express');
const router = express.Router();

router.get('/:id', function (request, response) {
  response.status(200).send(`Get item by ID ${request.params.id}!`);
});

router.post('/', function (request, response) {
  response.status(201).send('Create item!');
});

router.put('/:id', function (request, response) {
  response.status(200).send(`Update item by ID ${request.params.id}!`);
});

router.delete('/:id', function (request, response) {
  response.status(200).send(`Remove item by ID ${request.params.id}!`);
});

module.exports = {route: router};