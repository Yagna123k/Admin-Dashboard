import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './App.css';

function WeeklyRiderRatings() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const riderData = [
      { name: 'Rider 7', rating: 4.8, deliveries: 50 },
      { name: 'Rider 14', rating: 4.7, deliveries: 45 },
      { name: 'Rider 42', rating: 4.4, deliveries: 40 },
      { name: 'Rider 5', rating: 4.3, deliveries: 35 },
      { name: 'Rider 18', rating: 4.1, deliveries: 30 }
    ];

    const labels = riderData.map(rider => rider.name);
    const ratings = riderData.map(rider => rider.rating);
    const deliveries = riderData.map(rider => rider.deliveries);

    const data = {
      labels: labels,
      datasets: [{
        label: 'Weekly Rider Ratings',
        data: ratings,
        backgroundColor: '#007bff',
        borderWidth: 1,
        hoverBackgroundColor: '#0056b3'
      }]
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const index = context.dataIndex;
                const rating = ratings[index];
                const deliveryCount = deliveries[index];
                return `Rating: ${rating}\nDeliveries: ${deliveryCount}`;
              }
            }
          },
          legend: {
            display: false
          }
        }
      }
    });
  }, []);

  return (
    <div className="weekly-rider-ratings">
      <h2 className='heading'>Top Rated Riders This Week</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default WeeklyRiderRatings;
