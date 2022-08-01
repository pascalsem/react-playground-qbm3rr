import React, { useState, useEffect } from 'react';
import './style.css';
import { Product } from './Product';
import ProductService from './ProductService';
import ProductsTable from './ProductsTable.component';
import SelectedProduct from './SelectedProduct.component';

const App = () => {
  const [products, setProducts] = useState([] as Product[]);
  const [selectedProduct, setSelectedProduct] = useState('');
  useEffect(() => {
    new ProductService().fetch().then((products) => {
      setProducts(products);
    });
  }, []);
  useEffect(() => {
    console.log(`Selected product = ${selectedProduct}`);
  }, [selectedProduct]);
  return (
    <div>
      <h1>Catalog</h1>
      <h2>Available products</h2>
      <ProductsTable products={products} onSelect={setSelectedProduct} />
      <h2>Selected product</h2>
      <SelectedProduct id={selectedProduct} />
    </div>
  );
};

export default App;
