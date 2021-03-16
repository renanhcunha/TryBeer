import React from 'react';
import PropTypes from 'prop-types';
import MenuAndTopBar from '../components/MenuAndTopBar';

function Orders({ location: { pathname } }) {
  return (
    <MenuAndTopBar pathname={ pathname } text="Meus Pedidos" />
  );
}

Orders.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Orders;
