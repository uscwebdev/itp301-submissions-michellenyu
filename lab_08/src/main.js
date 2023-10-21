import React from 'react';
import Products from './user.js';
import './index.css';
import { useState } from 'react';

export default function Main() {
  //var creates a variable that can be updated.
  // const creates a read-only variable.

  const [subtotal, setSubtotal] = useState(0);

  function AddSubtotal(props) {
    setSubtotal(parseFloat(props.price) + subtotal);
  }

  function MinusSubtotal(props) {
    if (subtotal > 0) {
      setSubtotal(subtotal - parseFloat(props.price));
    }
    if (subtotal < 0) {
      setSubtotal(0);
    }
  }

  return (
    <div>
      <div className="header">
        <div className="row">
          <h1> angelty.pe </h1>
        </div>
      </div>

      <div className="showcase-container">
        <Products
          AddSubtotalHandler={AddSubtotal}
          MinusSubtotalHandler={MinusSubtotal}
          ppic="https://angelty.pe/cdn/shop/products/lostnew2.png?v=1677599125&width=2048"
          name="LOST PULLOVER"
          price="$50.00"
        />

        <Products
          AddSubtotalHandler={AddSubtotal}
          MinusSubtotalHandler={MinusSubtotal}
          ppic="https://angelty.pe/cdn/shop/files/SCARLETF.png?v=1686345733&width=2048"
          name="SCARLET KNITTED PULLOVER"
          price="$60.00"
        />

        <Products
          AddSubtotalHandler={AddSubtotal}
          MinusSubtotalHandler={MinusSubtotal}
          ppic="https://angelty.pe/cdn/shop/products/chainsaw.png?v=1673326138&width=1024"
          name="CHAINSAW KNITTED PULLOVER"
          price="$70.00"
        />

        <Products
          AddSubtotalHandler={AddSubtotal}
          MinusSubtotalHandler={MinusSubtotal}
          ppic="https://angelty.pe/cdn/shop/files/DEMONSWORDF.png?v=1686324299&width=2048"
          name="DEMON SWORD KNITTED PULLOVER"
          price="$80.00"
        />
      </div>
      <div className="footer">
        <p className="copyright">© 2023 ANGELTYPE POWERED BY SHOPIFY</p>
      </div>

      <div>
        <p>
          Subtotal: $<span id="total">{subtotal}</span>
        </p>
      </div>
    </div>
  );
}
