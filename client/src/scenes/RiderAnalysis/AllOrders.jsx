import React from 'react';

function AllOrders() {
  // Dummy data (replace with actual data)
  const newOrders = 1067;
  const ordersPrice = "₹86,802";

  return (
    <div className="all-orders">
      <h2 className='heading'>All Orders</h2>
      <div className="order-box">
        <div className="order-value">{newOrders}</div>
        <div className="order-text">New Orders</div>
      </div>
      <div className="order-box">
        <div className="order-value">{ordersPrice}</div>
        <div className="order-text">Orders Price</div>
      </div>
    </div>
  );
}

export default AllOrders;
