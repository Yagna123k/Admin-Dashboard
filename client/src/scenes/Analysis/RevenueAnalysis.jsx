import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './App.css';

const RevenueAnalysis = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            data: [500, 600, 700, 800, 900, 1000, 1100],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false // Hide the legend
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className='revenue-analysis-container'>
      <h2>Revenue Analysis (Daily)</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RevenueAnalysis;