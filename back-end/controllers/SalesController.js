const { Router } = require('express');
const { getSales } = require('../models/Sales');

const SalesController = new Router();

const SUCCESS = 200;
const BAD_REQUEST = 400;

SalesController.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  const sales = await getSales(userId);
  
  if (!sales) {
    return res.status(BAD_REQUEST).json({ message: 'Você não fez pedidos' }); 
  }

  res.status(SUCCESS).json(sales);
});

module.exports = SalesController;
