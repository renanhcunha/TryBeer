import React from 'react';
import { Link } from 'react-router-dom';

import dateFormatter from '../services/dateFormatter';

const OrderCard = ({ order, index }) => {

  const { address, number, date, total, orderId, status } = order
  const pathname = window.location.href;
  const isAdmin = pathname.includes('admin');
  const correctDate = dateFormatter(date);
  console.log(date)
  return (
    <div style={ { border: '2px solid black' } } data-testid={ `${ index }-order-card-container` }>
      <Link to={ isAdmin ? `/admin/orders/${orderId}` : `/orders/${orderId}` }>
        <h3 data-testid={ `${ index }-order-number` }>Pedido { orderId }</h3>
      </Link>
      { isAdmin && <h3 data-testid={ `${ index }-order-address` }>Endereço { `${address} ${number}` }</h3> }
      { isAdmin && <h3 data-testid={ `${ index }-order-status` }>Status { status }</h3> }
      { !isAdmin && <h3 data-testid={ `${ index }-order-date` }>{ correctDate }</h3> }
      <h3 data-testid={ `${ index }-order-total-value` }>{ `R$ ${parseFloat(total).toFixed(2).replace('.', ',')}` }</h3>
    </div>
  );
}

export default OrderCard;
