import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import MenuAndTopBar from '../components/MenuAndTopBar';
import { getUserToken } from '../services/localStorage';
import dateFormatter from '../services/dateFormatter';
import API from '../services/API';
import OrderDetailCard from '../components/OrderDetailCard';

function OrderDetails({ location: { pathname } }) {
  const { id } = useParams();
  const [currentOrder, setCurrentOrder] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const history = useHistory();
  const isAdmin = pathname.includes('admin');

  const orderById = async () => {
    const order = await API.getOrderProducts(id);
    setCurrentOrder(order);
    setDelivered(order[0].status === 'Entregue');
  };

  const checkToken = async () => {
    const token = getUserToken();
    const response = await API.validateUserToken(token);
    if (!response) history.push('/login');
  };

  const handleStatus = (orderId) => {
    setDelivered(true);
    API.changeStatus(orderId);
  };

  useEffect(() => {
    checkToken();
    orderById();
    setDelivered();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    orderById();
    // eslint-disable-next-line
  }, [currentOrder]);

  return (
    <div>
      { currentOrder && (
        <div>
          <MenuAndTopBar title="Cliente - Detalhes do Pedido" pathname={ pathname } />
          <h1 data-testid="order-number">
            { `Pedido ${currentOrder[0].id}` }
          </h1>
          { isAdmin ? (
            <h1 data-testid="order-status">
              { currentOrder[0].status }
            </h1>
          ) : (
            <h1 data-testid="order-date">
              { dateFormatter(currentOrder[0].date) }
            </h1>
          ) }
          <ul>
            { currentOrder.map((product, index) => (
              <OrderDetailCard product={ product } index={ index } key={ product.name } />
            )) }
          </ul>
          <h1 data-testid="order-total-value">
            { `Total: R$ ${parseFloat(currentOrder[0].total)
              .toFixed(2).replace('.', ',')}.` }
          </h1>
          { isAdmin && (
            <button
              data-testid="mark-as-delivered-btn"
              type="button"
              onClick={ () => handleStatus(currentOrder[0].id) }
              style={ { display: delivered ? 'none' : 'block' } }
            >
              Marcar como entregue
            </button>
          ) }
        </div>
      ) }
    </div>
  );
}

OrderDetails.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default OrderDetails;
