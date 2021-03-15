import React, { useState, useContext, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductsContext from '../context/ProductsContext';
import API from '../services/API';

function Products() {
  const { productsList, setProductsList } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);

  const updateProductList = async () => {
    const fetchedProductsList = await API.getProducts();
    console.log(fetchedProductsList)

    setProductsList(fetchedProductsList);
  };

  useEffect(() => {
    updateProductList();
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      { !isLoading && productsList.map((product, index) => {
        const { url_image: urlImage, name, price } = product;
        
        return (<ProductCard
          urlImage={ urlImage }
          name={ name }
          price={ price }
          key={ name }
          indexNumber={ index }
        />);
      }) }
    </div>
  );
}

export default Products;
