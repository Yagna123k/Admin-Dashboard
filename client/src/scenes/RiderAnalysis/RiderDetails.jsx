import React from 'react';

function RiderDetails() {
  // Dummy data (replace with actual data)
  const totalRiders = 50;
  const busyRiders = 20;
  const freeRiders = totalRiders - busyRiders;

  return (
    <div className="rider-details">
      <h2 className='heading'>Rider Details</h2>
      <div className="rider-details-container">
        <div className="rider-box">
          <div className="rider-value">{totalRiders}</div>
          <div className="rider-text">Total Riders</div>
        </div>
        <div className="rider-stats">
          <div className="rider-box">
            <div className="rider-value">{busyRiders}</div>
            <div className="rider-text">Busy Riders</div>
          </div>
          <div className="rider-box">
            <div className="rider-value">{freeRiders}</div>
            <div className="rider-text">Free Riders</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderDetails;
