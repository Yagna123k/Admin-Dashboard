import React from 'react';
import './GridSection.css';
import './App.css';

const GridSection = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <h3>Total Users</h3>
        <p>11,238</p>
        <p>45% this month</p>
      </div>
      <div className="grid-item">
        <h3>Total Revenue</h3>
        <p>$50,000</p>
        <p>30% this month</p>
      </div>
      <div className="grid-item">
        <h3>Total Products</h3>
        <p>500</p>
        <p>20% this month</p>
      </div>
      <div className="grid-item">
        <h3>Total Ratio</h3>
        <p>50:50</p>
        <p>15% this month</p>
      </div>
    </div>
  );
};

export default GridSection;
