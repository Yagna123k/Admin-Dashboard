import React from 'react';

const OrderStatus = ({ orders }) => {
  return (
    <div>
      <h2>Order Status</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
