import React from 'react';
import { createRoot } from 'react-dom/client';
import Products from './user.js';
import './index.css';
import { useState } from 'react';
import Main from './main.js';

//var creates a variable that can be updated.
// const creates a read-only variable.

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
