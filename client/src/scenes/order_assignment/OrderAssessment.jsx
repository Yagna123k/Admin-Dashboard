import React, { useState } from 'react';
import './OrderAssessment.css'; // Import CSS file
import RiderList from './RiderList';
import OrderStatus from './OrderStatus';

const OrderAssessment = ({ riders }) => {
  // Dummy array of orders
  const [orders, setOrders] = useState([
    { id: 1, customerName: "John Doe", items: ["Burger", "Fries"], total: 15.99, assignedRider: null },
    { id: 2, customerName: "Jane Smith", items: ["Pizza", "Salad"], total: 19.99, assignedRider: null },
    { id: 3, customerName: "Alice Johnson", items: ["Sushi", "Edamame"], total: 24.99, assignedRider: null },
    { id: 4, customerName: "Michael Brown", items: ["Steak", "Mashed Potatoes"], total: 29.99, assignedRider: null },
    { id: 5, customerName: "Sarah Williams", items: ["Chicken Tikka Masala", "Naan"], total: 18.99, assignedRider: null },
    { id: 6, customerName: "David Garcia", items: ["Pad Thai", "Spring Rolls"], total: 22.99, assignedRider: null },
    { id: 7, customerName: "Michel Marsh", items: ["Biryani", "Chicken Chap"], total: 22.85, assignedRider: null },
  ]);

  const handleAssignOrder = (orderId) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, assigningRider: true }; // Set assigningRider flag to true for this order
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleRiderSelect = (orderId, riderId) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, assignedRider: riderId, assigningRider: false }; // Set assignedRider and reset assigningRider
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Function to check if a rider is already assigned to an order
  const isRiderAssigned = (riderId) => {
    return orders.some(order => order.assignedRider === riderId);
  };

  return (
    <div className="OrderAssessment">
      <ul className="OrderList">
        {orders.map(order => (
          <li key={order.id} className="OrderListItem">
            <div className="OrderDetails">
              <strong>Order ID:</strong> {order.id}<br />
              <strong>Customer Name:</strong> <span className="CustomerName">{order.customerName}</span><br />
              <strong>Items:</strong> {order.items.join(", ")}<br />
            </div>
            <div className="Total">
              <strong>Total:</strong> ${order.total.toFixed(2)}
            </div>
            <div className="Actions">
              {order.assignedRider ? (
                <p>Assigned to: {riders.find(rider => rider.id === order.assignedRider).name}</p>
              ) : (
                order.assigningRider ? (
                  <div className="RidersList">
                    <p>Select Rider:</p>
                    <select onChange={(e) => handleRiderSelect(order.id, parseInt(e.target.value))}>
                      <option value="">Select Rider</option>
                      {riders.filter(rider => !isRiderAssigned(rider.id) && rider.available).map(rider => (
                        <option key={rider.id} value={rider.id}>{rider.name}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <button className="AssignButton" onClick={() => handleAssignOrder(order.id)}>Assign Order</button>
                )
              )}
              <button className="DeleteButton" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Keep RiderList and OrderStatus components but set their display to "none" */}
      <div>
        <RiderList riders={riders} orders={orders} />
        <OrderStatus orders={orders} />
      </div>
    </div>
  );
};

export default OrderAssessment;
