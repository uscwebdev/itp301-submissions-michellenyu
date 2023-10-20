import React from 'react';
import { createRoot } from 'react-dom/client';
import Products from './user.js';
import './index.css';

//var creates a variable that can be updated.
// const creates a read-only variable.

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div className="header">
      <div className="row">
        <h1> angelty.pe </h1>
      </div>
    </div>

    <div className="showcase-container">
      <Products
        ppic="https://angelty.pe/cdn/shop/products/lostnew2.png?v=1677599125&width=2048"
        name="LOST PULLOVER"
        price="$50.00"
      />

      <Products
        ppic="https://angelty.pe/cdn/shop/files/SCARLETF.png?v=1686345733&width=2048"
        name="SCARLET KNITTED PULLOVER"
        price="$60.00"
      />

      <Products
        ppic="https://angelty.pe/cdn/shop/products/chainsaw.png?v=1673326138&width=1024"
        name="CHAINSAW KNITTED PULLOVER"
        price="$70.00"
      />

      <Products
        ppic="https://angelty.pe/cdn/shop/files/DEMONSWORDF.png?v=1686324299&width=2048"
        name="DEMON SWORD KNITTED PULLOVER"
        price="$80.00"
      />
    </div>
    <div className="footer">
      <p className="copyright">© 2023 ANGELTYPE POWERED BY SHOPIFY</p>
    </div>
  </React.StrictMode>
);
