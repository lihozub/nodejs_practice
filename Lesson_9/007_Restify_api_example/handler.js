const errors = require('restify-errors');

let idCounter = 0;
let store = [];

function getItemById(id) {
  let found = false;
  
  for (let i = 0; i < store.length; i++) {
    if (store[i].id = id) {
      found = true;
      break;
    }
  }
  
  return found;
}

module.exports = {
  getItems(request, response) {
    console.log(store);
    response.send(store);
  },
  
  addItem(request, response) {
    let newItem = {
      id: idCounter++,
      name: 'Test',
      description: 'Test Item',
    };
    
    store.push(newItem);
    console.log(newItem);
    response.header('Allow', 'POST');
    response.send(store);
  },
  
  updateItem(request, response) {
    let updatedItem = {
      id: request.params.id,
      name: 'New name',
      description: 'New description'
    };
    
    if (getItemById(request.params.id)) {
      store.splice(request.params.id, 1, updatedItem);
      console.log(`item by id ${request.params.id} changed!`);
      response.send(updatedItem);
    } else {
      throw new errors.InternalError('Wrong item id. Update failed');
    }
  },
  
  removeItem(request, response) {
    
    if (getItemById(request.params.id)) {
      store.splice(request.params.id, 1);
      console.log(`item by id ${request.params.id} removed!`);
      response.send(`item by id ${request.params.id} removed!`);
    } else {
      throw new errors.InternalError('Wrong item id. Couldn\'t remove item');
    }
  }
};