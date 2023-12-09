import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Home from './Home';
import Test from './Test';
import Forum from './Forum';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Test2" element={<Forum />} />
          <Route path="Test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
