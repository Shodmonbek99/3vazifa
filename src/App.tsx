import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './utils/ProductCard';
import ProductDetail from './utils/ProductDetail';
import Navbar from './utils/Navbar';

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
  thumbnail: string;
}

function App() {
  const [products, setProducts] = useState<Products | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

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

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setSelectedProduct(null); 
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} cartItems={cart.length} />
      {selectedProduct ? (
        <ProductDetail 
          product={selectedProduct} 
          setSelectedProduct={setSelectedProduct} 
          addToCart={addToCart}
        />
      ) : (
        <div className="product-grid">
          {products &&
            products.products.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleDelete={handleDelete}
                handleCardClick={handleCardClick}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
