import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  handleDelete: (id: number) => void;
  handleCardClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleDelete, handleCardClick }) => {
  return (
    <div className="ProductCard" onClick={() => handleCardClick(product)}>
      <h2>{product.title}</h2>
      <button onClick={(e) => {
        e.stopPropagation(); 
        handleDelete(product.id);
      }}>Delete</button>
    </div>
  );
};

export default ProductCard;
