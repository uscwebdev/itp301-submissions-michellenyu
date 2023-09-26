import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// var creates a variable that can be updated.
// const creates a read-only variable.

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <h1>A2K Final Rankings: Meet VCHA</h1>
    <p>
      The A2K final lineup, known as VCHA, comprises talented teenage girls
      selected through U.S. auditions, hailing from diverse locations, and
      rigorously trained for five months at JYP Entertainment in Seoul, aiming
      to excel as performers in the global girl group scene.
    </p>
    <p>
      On Thursday night, JYP’s K-pop audition show A2K introduced the world to
      VCHA, created from the A2K final lineup.
    </p>
    <p>Question of the day: What did you think of the line up?</p>
    <img
      className="thumbnail"
      src="https://0.soompi.io/wp-content/uploads/2023/09/21203517/kaylee.jpeg"
      alt="kaylee"
    />
    <img
      className="thumbnail"
      src="https://0.soompi.io/wp-content/uploads/2023/09/21203600/lexi.jpeg"
      alt="lexi"
    />
    <img
      className="thumbnail"
      src="https://0.soompi.io/wp-content/uploads/2023/09/21203548/KG.jpeg"
      alt="kg"
    />
    <img
      className="thumbnail"
      src="https://0.soompi.io/wp-content/uploads/2023/09/21203527/savanna.jpeg"
      alt="savanna"
    />
    <img
      className="thumbnail"
      src="https://0.soompi.io/wp-content/uploads/2023/09/21203538/camila.jpeg"
      alt="camila"
    />
    <img
      className="thumbnail"
      src="https://0.soompi.io/wp-content/uploads/2023/09/21203506/kendall.jpeg"
      alt="kendall"
    />
    <hr />

    <div className="test">
      <img
        className="profile"
        src="https://i.pinimg.com/1200x/8d/0f/0c/8d0f0cd7d10f4914a9a7d7e6aad613fd.jpg"
        alt="user 1 profile pic"
      />
      <span className="name"> @Kei_Vibes </span>
      <span className="date">3 days ago</span>
    </div>
    <span className="comment-word">
      Lexus has been my bias since the beginning and I am so proud of her!
    </span>

    <div className="test">
      <img
        className="profile"
        src="https://avatarfiles.alphacoders.com/843/84397.png"
        alt="user 2 profile pic"
      />
      <span className="name"> @myqueen_yuzuki </span>
      <span className="date">1 day ago</span>
    </div>
    <span className="comment-word">
      Rooted for Savanna the whole show, I'm glad she debuted!
    </span>

    <div className="test">
      <img
        className="profile"
        src="https://i1.sndcdn.com/avatars-CXRDbH9Zx7n3M1YD-78GV8A-t500x500.jpg"
        alt="user 3 profile pic"
      />
      <span className="name"> @jannamaria </span>
      <span className="date">4 hours ago</span>
    </div>
    <span className="comment-word">
      Kendall vc foi incrível querida! Boa sorte em sua estreia ❤❤
    </span>

    <div className="test">
      <img
        className="profile"
        src="https://i.pinimg.com/1200x/24/c9/d7/24c9d7db622d4604cf101ec5829e4afc.jpg"
        alt="user 1 profile pic"
      />
      <span className="name"> @Nami_swan</span>
      <span className="date">3 days ago</span>
    </div>
    <span className="comment-word">
      I literally cried and started screaming and jumping around when i heard
      kaylee debuted.. im so proud of her!!😭 im so glad she made it❤
    </span>
  </React.StrictMode>
);
