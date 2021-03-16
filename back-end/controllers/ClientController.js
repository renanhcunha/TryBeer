const { Router } = require('express');
const { updateUserName } = require('../models/Client');

const ClientController = new Router();

const SUCCESS = 200;

ClientController.put('/update', async (req, res) => {
  const { name, email } = req.body;
 
  await updateUserName(name, email);
  
  res.status(SUCCESS).send();
});

module.exports = ClientController;
