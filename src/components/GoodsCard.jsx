import React from 'react';

function GoodsCard({ name, price, image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img className='fruitImg' src={image} alt={name} />
      <p>Cost: {price}</p>
    </div>
  );
}

export default GoodsCard;
