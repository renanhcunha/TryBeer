import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import MenuAndTopBar from '../components/MenuAndTopBar';
import {
  getCartItems,
  getUserToken,
} from '../services/localStorage';
import API from '../services/API';

function OrderDetails({ location: { pathname }, id }) {

  const {orders, setOrders, products} = useContext(ProductsContext);
  const [currentOrder, setCurrentOrder] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  const orderById = () => {
    const orderFinder = orders.find((order, index) =>  order.orderId === id );
    setCurrentOrder(orderFinder);
    console.log(orderFinder);
  }

  const history = useHistory();

  const checkToken = async () => {
    const token = getUserToken();
    const response = await API.validateUserToken(token);
    if (!response) history.push('/login');
  };

  useEffect(() => {
    checkToken();
    orderById()
  }, []);

  //const ordersFinder = order.find((order, index) => order.orderId === orders.ordersId)

  return (
    <div>
      <MenuAndTopBar title="Cliente - Detalhes do Pedido" pathname={ pathname } />
      <h2 data-testid="top-title">Detalhes do Pedido</h2>
          <ul>
            { ordersFinder.map((product, index) => (
              <li key={ product.name }>
                <span data-testid={ `${index}-product-qtd` }>
                  { product.quantity }
                </span>
                -
                <span data-testid={ `${index}-product-name` }>{ product.name }</span>
                -
                <span data-testid={ `${index}-product-total-value` }>
                  { `(R$ ${parseFloat(product.price * product.quantity)
                    .toFixed(2).replace('.', ',')} un)` }
                </span>
                -
                <span data-testid={ `order-total-value` }>
                  { `R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}` }
                </span>
               
              </li>
            )) }
          </ul>
        
      <h1 data-testid="order-total-value">
        { `Total: R$ ${parseFloat(itemsInCart
          .reduce((acc, curr) => acc + +curr.price, 0)).toFixed(2).replace('.', ',')}.` }
      </h1>
     
    </div>
  );
}

OrderDetails.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default OrderDetails;