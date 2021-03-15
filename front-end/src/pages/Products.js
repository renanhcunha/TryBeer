import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <p>Products</p>
      <Link to="/profile">
        Profile
      </Link>
    </div>
  );
}

export default Products;
