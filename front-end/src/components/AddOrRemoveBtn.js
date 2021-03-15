import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton({ productName, type, index }) {
  const addItemInCart = (productName) => {
    const alreadyInCart = itemsInCart.find((product) => productName === product.name);
    if (alreadyInCart) {
      setItemsInCart(itemsInCart.map((product) => {
        if (productName === product.name) product.quantity += 1;
      }));
    } else {
      const newItem = {
        name: productName,
        quantity: 1,
      };
      setItemsInCart(itemsInCart.concat(...itemsInCart, newItem));
    }
  };

  return (
    <div>
      <button
        type="button"
        disabled={ disabled }
        data-testid={ id }
        onClick={ onClick }
      >
        { name }
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default SubmitButton;
