import React, { useState } from 'react';
import './styles.css'
import { Header } from '../../components';
import { Box, useTheme } from "@mui/material";

const initialFormData = {
  name: '',
  branchAddress: '',
  phoneNumber: '',
  email: '',
  foodList: ''
};

const initialRestaurants = [
  {
    serialNumber: 1,
    name: 'Restaurant 1',
    branchAddress: 'Address 1',
    phoneNumber: '123-456-7890',
    email: 'restaurant1@example.com',
    foodList: 'Pizza, Pasta, Salad'
  },
  {
    serialNumber: 2,
    name: 'Restaurant 2',
    branchAddress: 'Address 2',
    phoneNumber: '987-654-3210',
    email: 'restaurant2@example.com',
    foodList: 'Tacos, Burritos, Quesadillas'
  },
  {
    serialNumber: 3,
    name: 'Restaurant 3',
    branchAddress: 'Address 3',
    phoneNumber: '456-789-0123',
    email: 'restaurant3@example.com',
    foodList: 'Sushi, Ramen, Tempura'
  },
  {
    serialNumber: 4,
    name: 'Restaurant 4',
    branchAddress: 'Address 4',
    phoneNumber: '321-759-8167',
    email: 'restaurant4@example.com',
    foodList: 'Yogurt, Chinese, Italian'
  },
  {
    serialNumber: 5,
    name: 'Restaurant 5',
    branchAddress: 'Address 5',
    phoneNumber: '154-047-5137',
    email: 'restaurant5@example.com',
    foodList: 'Caviar, Saffron, Truffles'
  },
];

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [formData, setFormData] = useState(initialFormData);
  const [showForm, setShowForm] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = { ...formData, serialNumber: restaurants.length + 1 };
    setRestaurants([...restaurants, newRestaurant]);
    setFormData(initialFormData);
  };

  const handleDelete = (serialNumber) => {
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.serialNumber !== serialNumber);
    setRestaurants(updatedRestaurants);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Restaurant List" subtitle="" />
      {/* <h1>Restaurant List</h1> */}
      <button onClick={() => setShowForm(!showForm)}>Add New Restaurant</button>
      {showForm && (
        <div>
          <h2>Add New Restaurant</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Restaurant Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Branch Address:
              <input type="text" name="branchAddress" value={formData.branchAddress} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Email ID:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Food List (Comma-separated):
              <input type="text" name="foodList" value={formData.foodList} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Add now</button>
          </form>
        </div>
      )}
      <table>
        {/* Table headers */}
        <thead>
          {/* Header row */}
          <tr>
            <th>SL No.</th>
            <th>Restaurant Name</th>
            <th>Branch Address</th>
            <th>Phone Number</th>
            <th>Email ID</th>
            <th>Food List</th>
            <th>Action</th> {/* Added for delete button */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Existing restaurant data */}
          {restaurants.map((restaurant, index) => (
            <tr key={index}>
              <td>{restaurant.serialNumber}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.branchAddress}</td>
              <td>{restaurant.phoneNumber}</td>
              <td>{restaurant.email}</td>
              <td>
                <ul>
                  {restaurant.foodList.split(',').map((food, idx) => (
                    <li key={idx}>{food}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button onClick={() => handleDelete(restaurant.serialNumber)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

export default RestaurantList;
