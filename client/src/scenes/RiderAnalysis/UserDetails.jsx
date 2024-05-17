import React from 'react';

function UserDetails() {
  // Dummy data (replace with actual data)
  const totalUsers = 1500;
  const activeUsers = 1200;
  const inactiveUsers = totalUsers - activeUsers;

  return (
    <div className="user-details">
      <h2 className='heading'>User Details</h2>
      <div className="user-details-container">
        <div className="user-box">
          <div className="user-value">{totalUsers}</div>
          <div className="user-text">Total Users</div>
        </div>
        <div className="user-stats">
          <div className="user-box">
            <div className="user-value">{activeUsers}</div>
            <div className="user-text">Active Users</div>
          </div>
          <div className="user-box">
            <div className="user-value">{inactiveUsers}</div>
            <div className="user-text">Inactive Users</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
