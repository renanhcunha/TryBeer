import React from 'react';
import PropTypes from 'prop-types';
import MenuAndTopBar from '../components/MenuAndTopBar';
import OrderCard from '../components/OrderCard';

const data = [
  { pedidoNumero: 1, data: '10/1/2000', total: '1234', endereco: 'rua 1, 2', status: 'pendente' },
  { pedidoNumero: 2, data: '12/5/2000', total: '4543', endereco: 'rua 3, 12', status: 'entregue' },
  { pedidoNumero: 3, data: '31/12/2000', total: '3847', endereco: 'rua 6, 23', status: 'entregue' },
];

function Orders({ location: { pathname } }) {
  return (
    <div>
      <MenuAndTopBar pathname={ pathname } title="Meus Pedidos" />
      { data.map((item, index) => <OrderCard index={ index } order={ item } />) }
    </div>
    
  );
}

Orders.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Orders;
