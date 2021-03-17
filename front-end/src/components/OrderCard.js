import React from 'react';
import { Link } from 'react-router-dom';

import dateFormatter from '../services/dateFormatter';

const OrderCard = ({ order, index }) => {

  const { address, number, date, total, orderId, status } = order
  const pathname = window.location.href;
  const isAdmin = pathname.includes('admin');
  return (
    <Link to={ isAdmin ? `/admin/orders/${orderId}` : `/orders/${orderId}` }>
      <div style={ { border: '2px solid black' } } data-testid={ `${ index }-order-card-container` }>
        <h3 data-testid={ `${ index }-order-number` }>Pedido: { orderId }</h3>
        { isAdmin && <h3 data-testid={ `${ index }-order-address` }>Endereço: { `${address} ${number}` }</h3> }
        { isAdmin && <h3 data-testid={ `${ index }-order-status` }>Status: { status }</h3> }
        { !isAdmin && <h3 data-testid={ `${ index }-order-date` }>Data: { dateFormatter(date) }</h3> }
        <h3 data-testid={ `${ index }-order-total-value` }>Total: { total }</h3>
      </div>
    </Link>
  );
}

export default OrderCard;
