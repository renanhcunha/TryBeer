import React from 'react';

const OrderCard = ({ order, index }) => {
  const pathname = window.location.href;
  const isAdmin = pathname.includes('admin');
  return (
    <div style={ { border: '2px solid black' } } data-testid={ `${ index }-order-card-container` }>
      <h3 data-testid={ `${ index }-order-number` }>Pedido: { order.pedidoNumero }</h3>
      { isAdmin && <h3 data-testid={ `${ index }-order-address` }>Endereço: { order.endereco }</h3> }
      { isAdmin && <h3 data-testid={ `${ index }-order-status` }>{ order.status }</h3> }
      { !isAdmin && <h3 data-testid={ `${ index }-order-date` }>Data: { order.data }</h3> }
      <h3 data-testid={ `${ index }-order-total-value` }>Total: { order.total }</h3>
    </div>
  );
}

export default OrderCard;
