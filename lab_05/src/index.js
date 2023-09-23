import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// var creates a variable that can be updated.
//const creates a read-only variable.

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <h1>Michelle Yu</h1>
    <a href="mailto:mnyu@usc.edu">mnyu@usc.edu</a>
    <p id="color">lavender</p>
    <a href="youtube.com">favorite website</a>

    <hr />
    <strong>Fall 2023 Classes</strong>
    <ul>
      <li>BUAD308: Advanced Finance</li>
      <li>PSYCH353: Close Relationships</li>
      <li>ACAD178: Motion Graphics</li>
      <li>ITP301: Front Web Development</li>
      <li>ITP310: Design for User Experience</li>
    </ul>

    <hr />
    <p> Favorite Hobby </p>
    <img
      className="crochet"
      src="https://www.thesprucecrafts.com/thmb/0sd7Htmf1cA5QpCrTXOlZ9t_Yj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/directly-above-view-of-woman-hands-holding-crochet-hook-and-crocheting-with-ribbon-yarn-1249259826-c0645bc7105d4af886a1ac0fd3ea87ff.jpg"
      alt="person crocheting"
    />
  </React.StrictMode>
);
