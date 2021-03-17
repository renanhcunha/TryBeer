const { Router } = require('express');
const { saveOrder, saveOrderItems } = require('../models/Orders');

const OrdersController = new Router();

const BAD_REQUEST = 400;

OrdersController.post('/addOrder', async (req, res) => {
  const { cartWithId, user } = req.body;
  if (!cartWithId || !user) res.status(BAD_REQUEST).json({ message: 'Bad Request.' });

  const { id: userId, deliveryAddress, deliveryNumber } = user;
  const totalPrice = cartWithId.reduce((acc, curr) => acc + +curr.price, 0);
  
  const order = {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  };
  
  const saleId = await saveOrder(order);

  await cartWithId.forEach(async ({ productId, quantity }) => {
    await saveOrderItems(saleId, productId, quantity);
  });
});

module.exports = OrdersController;
