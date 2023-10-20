import React from 'react';
import { useState } from 'react';

export default function Products(prop) {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="whole-thing">
      <img
        className="product-img"
        src={prop.ppic}
        alt={prop.name + 'product image'}
      />
      <span className="name">{prop.name}</span>
      <p className="price">{prop.price}</p>

      <div className="counter">
        <button onClick={handleMinusClick}>-</button>
        <span>{count}</span>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
}
