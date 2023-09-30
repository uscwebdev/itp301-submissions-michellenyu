import React from 'react';

export default function Usercomments(prop) {
  return (
    <div className="test">
      <img
        className="profile"
        src={prop.ppic}
        alt={prop.name + 'profile picture'}
      />
      <span className="name">{prop.name}</span>
      <span className="date">{prop.date}</span>

      <span className="comment-word">{prop.caption}</span>
    </div>
  );
}
