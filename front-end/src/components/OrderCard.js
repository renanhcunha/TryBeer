import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dateFormatter from '../services/dateFormatter';

const OrderCard = ({ order, index }) => {
  const { address, number, date, total, orderId, status } = order;
  const pathname = window.location.href;
  const isAdmin = pathname.includes('admin');
  const correctDate = dateFormatter(date);
  const link = isAdmin ? `/admin/orders/${orderId}` : `/orders/${orderId}`;
  return (
    <Link to={ link }>
      <div
        style={ { border: '2px solid black' } }
        data-testid={ `${index}-order-card-container` }
      >
        <h3 data-testid={ `${index}-order-number` }>
          { `Pedido ${orderId}` }
        </h3>
        { isAdmin && (
          <h3 data-testid={ `${index}-order-address` }>
            { `${address}, ${number}` }
          </h3>
        ) }
        { isAdmin && <h3 data-testid={ `${index}-order-status` }>{ status }</h3> }
        { !isAdmin && <h3 data-testid={ `${index}-order-date` }>{ correctDate }</h3> }
        <h3 data-testid={ `${index}-order-total-value` }>
          { `R$ ${parseFloat(total).toFixed(2).replace('.', ',')}` }
        </h3>
      </div>
    </Link>
  );
};

OrderCard.propTypes = {
  order: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCard;
