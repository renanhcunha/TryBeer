const connection = require('./connection');

const saveOrder = async ({ userId, totalPrice, deliveryAddress, deliveryNumber }) => {
  const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO sales (user_id, total_price, 
      delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, ?, ?)`,
    [userId, totalPrice, deliveryAddress, deliveryNumber, date, 'pendente'],
  );

  return insertId;
};

const saveOrderItems = async (userId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [userId, productId, quantity],
  );
};

module.exports = {
  saveOrder,
  saveOrderItems,
};
