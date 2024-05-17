import React from 'react';
import DashboardStats from './DashboardStats';
import AllOrders from './AllOrders';
import UserDetails from './UserDetails';
import RiderDetails from './RiderDetails';
import WeeklyRiderRatings from './WeeklyRiderRatings';
import './App.css';

function Rider_analysis() {
  return (
    <div className="super-admin-dashboard">
      <h1>Rider Analysis</h1>
      <div className="dashboard-section firstrow">
        <DashboardStats />
      </div>
      <div className="dashboard-section secondrow">
        <div className='allorders'>
          <AllOrders />
        </div>
        <div className='userdetails'>
          <UserDetails />
        </div>
      </div>
      <div className="dashboard-section thirdrow">
        <div className='riderdetails'>
          <RiderDetails />
        </div>
        <div className='weeklyriderratings'>
          <WeeklyRiderRatings />
        </div>
      </div>
    </div>
  );
}

export default Rider_analysis;
