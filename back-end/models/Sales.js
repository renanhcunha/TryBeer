const { date } = require('faker');
const connection = require('./connection');



const getSales = async (userId) => {
  const [sales] = await connection.execute('SELECT * FROM sales WHERE user_id=? ORDER BY id', [userId]);
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
  getSales,
};
