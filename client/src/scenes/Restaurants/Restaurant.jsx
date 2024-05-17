import React from 'react';

const Restaurant = ({ name, cuisine, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Restaurant;
