import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';
import { updateCartItemsQty, getCartItems } from '../services/localStorage';

function AddBtn({ productName, index, unitPrice }) {
  const { setItemsInCart } = useContext(ProductsContext);

  const changeProductQuantity = () => {
    const cartItems = getCartItems();
    const alreadyInCart = cartItems.find((product) => productName === product.name);
    if (alreadyInCart) {
      const updatedList = cartItems.reduce((newList, currentProduct) => {
        if (productName === currentProduct.name) {
          currentProduct.quantity += 1;
          currentProduct.price = unitPrice * currentProduct.quantity;
          return newList.concat(currentProduct);
        }
        return newList.concat(currentProduct);
      }, []);
      updateCartItemsQty(updatedList);
      setItemsInCart(updatedList);
    } else {
      const newItem = {
        name: productName,
        quantity: 1,
        price: unitPrice,
      };
      const updatedList = cartItems.concat(newItem);
      updateCartItemsQty(updatedList);
      setItemsInCart(updatedList);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-product-plus` }
        onClick={ changeProductQuantity }
      >+</button>
    </div>
  );
}

AddBtn.propTypes = {
  productName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
};

export default AddBtn;
