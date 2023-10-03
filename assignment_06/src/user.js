import React from 'react';

export default function Products(prop) {
  return (
    <div className="whole-thing">
      <img
        className="product-img"
        src={prop.ppic}
        alt={prop.name + 'product image'}
      />
      <span className="name">{prop.name}</span>
      <p className="price">{prop.price}</p>
    </div>
  );
}
