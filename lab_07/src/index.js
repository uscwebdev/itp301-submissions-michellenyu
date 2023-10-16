import React from 'react';
import { createRoot } from 'react-dom/client';
import PhotoGallery from './PhotoGallery.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div className="container-heading">
      <div className="row">
        <h1 className="heading-content">Activity: Choose Your Character</h1>
      </div>
    </div>

    <PhotoGallery />
  </React.StrictMode>
);
