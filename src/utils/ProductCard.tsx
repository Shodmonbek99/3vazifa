import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
  handleDelete: (id: number) => void;
  handleCardClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleDelete, handleCardClick }) => {
  return (
    <div className="card" onClick={() => handleCardClick(product)}>
      <img src={product.thumbnail} alt={product.title} className="card-image" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}>Delete</button>
    </div>
  );
};

export default ProductCard;
