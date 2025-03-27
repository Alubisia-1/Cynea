import React from 'react';

const ProductCard = ({ icon, title, target, description }) => {
  return (
    <div className="product-card">
      <i className={`fas ${icon} card-icon`}></i>
      <h3>{title}</h3>
      <p className="target">{target}</p>
      <p className="description">{description}</p>
      <button className="learn-more">Learn More</button>
    </div>
  );
};

export default ProductCard;