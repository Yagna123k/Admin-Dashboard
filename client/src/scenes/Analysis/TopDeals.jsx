// TopDeals.js
import React from 'react';
import './TopDeals.css';
import './App.css';

const TopDeals = () => {
  // Example data for top deals
  const topDealsData = [
    { name: 'Elva McDonald', amount: ' ₹ 5700' },
    { name: 'John Doe', amount: ' ₹ 5500' },
    { name: 'Jane Smith', amount: ' ₹ 5000' },
    { name: 'Bob Brown', amount: ' ₹ 4500' },
    { name: 'Emily Davis', amount: ' ₹ 4400' },
    { name: 'Michael Wilson', amount: ' ₹ 4100' },
    { name: 'Emma Martinez', amount: ' ₹ 3900' },
  ];

  return (
    <div className="top-deals-container">
      <h2 className="section-title">Top Deals</h2>
      <div className="deals-list">
        {topDealsData.map((deal, index) => (
          <div key={index} className="deal-item">
            <span className="deal-name">{deal.name}</span>
            <span className="deal-amount">{deal.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
