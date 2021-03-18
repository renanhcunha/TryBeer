const connection = require('./connection');

const saveOrder = async ({ userId, totalPrice, deliveryAddress, deliveryNumber }) => {
  const date = new Date();

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

const getOrdersByUserId = async (userId) => {
  const [sales] = await connection.execute('SELECT * FROM sales WHERE user_id=? ORDER BY id', [userId]);
  console.log(sales, 'teste')
  const formattedSales = sales.map(({
    delivery_address,
    delivery_number,
    sale_date,
    total_price,
    user_id,
    id,
    status,
  }) => ({
    address: delivery_address,
    number: delivery_number,
    date: sale_date,
    total: total_price,
    user: user_id,
    orderId: id,
    status,
  }));
  return formattedSales;
};

const getAllOrders = async () => {
  const [sales] = await connection.execute('SELECT * FROM sales ORDER BY id');
  console.log(sales, 'teste')
  const formattedSales = sales.map(({
    delivery_address,
    delivery_number,
    sale_date,
    total_price,
    user_id,
    id,
    status,
  }) => ({
    address: delivery_address,
    number: delivery_number,
    date: sale_date,
    total: total_price,
    user: user_id,
    orderId: id,
    status,
  }));
  return formattedSales;
};

module.exports = {
  saveOrder,
  saveOrderItems,
  getOrdersByUserId,
  getAllOrders,
};
