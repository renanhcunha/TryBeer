import React from 'react';
import PropTypes from 'prop-types';
import MenuAndTopBar from '../components/MenuAndTopBar';

function Products({ location: { pathname } }) {
  return (
    <div>
      <MenuAndTopBar title="TryBeer" pathname={ pathname } />
    </div>
  );
}

Products.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
