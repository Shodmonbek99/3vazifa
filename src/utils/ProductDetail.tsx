import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ProductDetailProps {
  product: Product;
  setSelectedProduct: (product: Product | null) => void;
  addToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, setSelectedProduct, addToCart }) => {
  return (
    <div className="product-detail">
      <button className="btn btn-outline btn-info" onClick={() => setSelectedProduct(null)}>Back</button>
      <img src={product.thumbnail} alt={product.title} className="detail-image" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="btn btn-success" onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
  );
};

export default ProductDetail;
