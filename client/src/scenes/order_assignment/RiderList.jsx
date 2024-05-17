import React from 'react';

const RiderList = ({ riders }) => {
  return (
    <div>
      <h2>Rider List</h2>
      <ul>
        {riders.map(rider => (
          <li key={rider.id}>{rider.name} - {rider.available ? 'Available' : 'Busy'}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiderList;
