import React from 'react';
import './App.css';

function DashboardStats() {
  // Dummy data (replace with actual data)
  const stats = [
    { title: 'Sales', value: '₹86,802' },
    { title: 'Items Delivered', value: '741' },
    { title: 'Number of Orders', value: '1067' },
    { title: 'Number of Customers', value: '1500' }
  ];

  return (
    <div className="dashboard-stats">
      {stats.map(stat => (
        <div key={stat.title} className="stat-box">
          <h2>{stat.title}</h2>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;
