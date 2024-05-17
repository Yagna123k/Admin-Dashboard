import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './LeadsBySource.css'
import './App.css'

const LeadsBySource = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Mobile', 'Desktop', 'Laptop', 'Tablet'],
          datasets: [{
            data: [30, 25, 20, 25],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }, []);

  return (
    <div className='leads-by-source-container'>
      <h2>Leads By Source</h2>
      <div>
        <canvas className='leads-by-source-pie-chart' ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default LeadsBySource;
