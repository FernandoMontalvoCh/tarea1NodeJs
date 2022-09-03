const express = require('express');

//Controllers
const { getAllClients, getOneClient, createClient, updateClient, deleteClient} = require('../controller/client.controller');

const clientRouter = express.Router();

clientRouter.get('/', getAllClients);

clientRouter.get('/:id', getOneClient);

clientRouter.post('/', createClient);

clientRouter.patch('/:id', updateClient);

clientRouter.delete('/:id', deleteClient);

module.exports = { clientRouter }