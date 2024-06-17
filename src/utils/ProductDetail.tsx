import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ProductDetailProps {
  product: Product;
  setSelectedProduct: (product: Product | null) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, setSelectedProduct }) => {
  return (
    <div className="ProductDetail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => setSelectedProduct(null)}>Back</button>
    </div>
  );
};

export default ProductDetail;
