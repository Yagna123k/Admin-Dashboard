import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import './App.css';

const TotalVisitContainer = styled.div`
  margin-top: 20px;
`;

const TotalVisit = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Weekly Visit',
            data: [100, 150, 200, 180, 220, 250, 230],
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false // Hide the x-axis grid lines
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                display: false // Hide the numerical labels on the y-axis
              },
              grid: {
                display: false // Hide the y-axis grid lines
              }
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
    <TotalVisitContainer className='total-visit-container'>
      <h2>Total Visit</h2>
      <canvas className='visit-graph' ref={chartRef}></canvas>
    </TotalVisitContainer>
  );
};

export default TotalVisit;
