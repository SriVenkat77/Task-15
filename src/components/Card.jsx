
import React from 'react';
import './Card.css';

function Card({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
