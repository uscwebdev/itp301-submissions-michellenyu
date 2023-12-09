import React from 'react';

export default function Forumdetails(props) {
  return (
    <div className="card">
      <img
        className="foodpicture"
        src={props.foodpicture}
        alt={props.foodpicture + 'Picture'}
      />
      <div className="review">
        <h2>{props.foodname}</h2>
        <h3>{props.username}</h3>
        <p>{props.rating}</p>
        <p>{props.comment}</p>
      </div>
    </div>
  );
}
