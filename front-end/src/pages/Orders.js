import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuAndTopBar from '../components/MenuAndTopBar';
import OrderCard from '../components/OrderCard';
import { getSales } from '../services/API';

function Orders({ location: { pathname } }) {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    getSales(user.id).then((result) => setOrders(result));
  }, []);
  if(orders.length === 0) return (
    <div>
      <MenuAndTopBar pathname={ pathname } title="Meus Pedidos" />
    </div>
  );
  return (
    <div>
      <MenuAndTopBar pathname={ pathname } title="Meus Pedidos" />
      { orders.map((order, index) => <OrderCard key={ order.orderId } order={ order } index={ index } />) }
    </div>
  );
}

Orders.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Orders;
