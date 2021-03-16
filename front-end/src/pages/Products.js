import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductsContext from '../context/ProductsContext';
import API from '../services/API';
import { getCartItems } from '../services/localStorage';

function Products() {
  const history = useHistory();
  const {
    productsList,
    setProductsList,
    itemsInCart,
    setItemsInCart,
  } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);
  const updateProductList = async () => {
    const fetchedProductsList = await API.getProducts();

    setProductsList(fetchedProductsList);
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };

  useEffect(() => {
    updateProductList();
    setItemsInCart(getCartItems());
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        { !isLoading && productsList.map((product, index) => {
          const { name } = product;

          return (<ProductCard
            product={ product }
            indexNumber={ index }
            key={ name }
          />);
        }) }
      </div>
      <button type="button" data-testid="checkout-bottom-btn" onClick={ goToCheckout }>
        <span data-testid="checkout-bottom-btn-value">
          { `Ver carrinho R$${parseFloat(itemsInCart
            .reduce((acc, curr) => acc + +curr.price, 0)).toFixed(2).replace('.', ',')}` }
        </span>
      </button>
    </div>
  );
}

export default Products;
