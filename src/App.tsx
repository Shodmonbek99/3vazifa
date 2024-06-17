import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './utils/ProductCard';
import ProductDetail from './utils/ProductDetail';

interface Products {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Products | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data: Products) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    if (products) {
      const result = products.products.filter((prod: Product) => {
        return prod.id !== id;
      });
      setProducts({ ...products, products: result });
    }
  };

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} setSelectedProduct={setSelectedProduct} />
      ) : (
        products && 
          products.products.map((product: Product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              handleDelete={handleDelete} 
              handleCardClick={handleCardClick} 
            />
          ))
      )}
    </div>
  );
}

export default App;

