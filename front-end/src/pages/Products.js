import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import API from '../services/API';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateProductList = async () => {
    const fetchedProductsList = await API.getProducts();

    setProductsList(fetchedProductsList);
  };

  useEffect(() => {
    updateProductList();
    setIsLoading(false);
  }, []);

  return (
    <div>
      { !isLoading && productsList.map((product) => {
        const { url_image: urlImage, name, price } = product;
        return (<ProductCard
          urlImage={ urlImage }
          name={ name }
          price={ price }
          key={ name }
        />);
      }) }
    </div>
  );
}

export default Products;
