import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';
import { updateCartItemsQty, getCartItems } from '../services/localStorage';

function RemoveBtn({ productName, index, currentQuantity, unitPrice }) {
  const { setItemsInCart } = useContext(ProductsContext);

  const changeProductQuantity = () => {
    const cartItems = getCartItems();

    const updatedList = cartItems.reduce((newList, currentProduct) => {
      if (productName === currentProduct.name && currentQuantity > 1) {
        currentProduct.quantity -= 1;
        currentProduct.price = unitPrice * currentProduct.quantity;
        return newList.concat(currentProduct);
      }
      if (productName === currentProduct.name && currentQuantity === 1) return newList;
      return newList.concat(currentProduct);
    }, []);
    updateCartItemsQty(updatedList);
    setItemsInCart(updatedList);
  };

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-product-minus` }
        onClick={ changeProductQuantity }
      >
        -
      </button>
    </div>
  );
}

RemoveBtn.propTypes = {
  productName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
};

export default RemoveBtn;
