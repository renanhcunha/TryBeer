import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product: { urlImage, name, price, quantityInCart = 0 } }) {
  return (
    <div>
      <img src={ urlImage } alt={ name } width="100px" />
      <p>{ name }</p>
      <p>{ quantityInCart > 1 ? price * quantityInCart : price }</p>
      <p>{ quantityInCart }</p>
    </div>
  );
}

ProductCard.defaultProps = { product: { quantityInCart: 0 } };

ProductCard.propTypes = {
  product: {
    picture: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantityInCart: PropTypes.number,
  },
};

export default ProductCard;
