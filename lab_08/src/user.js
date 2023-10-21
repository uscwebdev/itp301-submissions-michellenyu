import React from 'react';
import { useState } from 'react';

export default function Products(props) {
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
        src={props.ppic}
        alt={props.name + 'product image'}
      />
      <span className="name">{props.name}</span>
      <p className="price">{props.price}</p>

      <div className="counter">
        <button
          onClick={() => {
            handleMinusClick();
            props.MinusSubtotalHandler(props.price);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            handlePlusClick();
            props.AddSubtotalHandler(props.price);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
