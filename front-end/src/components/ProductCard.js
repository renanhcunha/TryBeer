import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';
import AddBtn from './AddBtn';
import RemoveBtn from './RemoveBtn';

function ProductCard({ product: {
  url_image: urlImage,
  name,
  price,
}, indexNumber }) {
  const { itemsInCart } = useContext(ProductsContext);
  let quantity = 0;
  if (itemsInCart.length > 0) {
    const itemFound = itemsInCart.find((product) => name === product.name);
    if (itemFound) {
      quantity = itemFound.quantity;
    }
  }

  return (
    <div className="col-md">
      <img
        src={ urlImage }
        alt={ name }
        height="150px"
        data-testid={ `${indexNumber}-product-img` }
      />
      <p data-testid={ `${indexNumber}-product-name` }>{ name }</p>
      <p data-testid={ `${indexNumber}-product-price` }>
        { `R$ ${parseFloat(price).toFixed(2).replace('.', ',')}` }
      </p>
      <div className="col-md">
        <AddBtn
          productName={ name }
          index={ indexNumber }
          unitPrice={ +price }
        />
        <p data-testid={ `${indexNumber}-product-qtd` }>{ quantity }</p>
        <RemoveBtn
          productName={ name }
          index={ indexNumber }
          currentQuantity={ quantity }
          unitPrice={ +price }
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    url_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  indexNumber: PropTypes.number.isRequired,
};

export default ProductCard;
