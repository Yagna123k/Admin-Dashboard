import React from 'react';
import OrderAssessment from './OrderAssessment';
import RiderList from './RiderList';
import OrderStatus from './OrderStatus';
import { Header } from '../../components';
import { Box, useTheme } from "@mui/material";

const O_Assignment = () => {
  const riders = [
    { id: 1, name: "Rider 1", available: true },
    { id: 2, name: "Rider 2", available: true },
    { id: 3, name: "Rider 3", available: false },
    { id: 4, name: "Rider 4", available: true },
    { id: 5, name: "Rider 5", available: false },
  ];

  const orders = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'assigned', rider: 'John' },
    { id: 3, status: 'completed', rider: 'Jane' }
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Order Assignment" subtitle=""/>
      <OrderAssessment riders={riders} />
      <div style={{ display: "none" }}>
        <RiderList riders={riders} />
        <OrderStatus orders={orders} />
      </div>
    </Box>
  );
};

export default O_Assignment;
