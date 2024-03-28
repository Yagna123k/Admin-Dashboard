# Super Admin Dashboard for Food Delivery Application

## Description
The Super Admin Dashboard is a web application designed to empower administrators to manage various aspects of a food delivery system. It provides functionalities for user authentication, order management, menu management, analytics, access control, and security.

## Deployed Links
- Frontend: https://kirabiz-admin-dashboard.vercel.app
- Backend: https://admin-dashboard-server-21.vercel.app

## Technologies Used
- Frontend:
  - React.js
  - HTML5
  - CSS3, SCSS
  - JavaScript (ES6+)

- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ORM)

- Authentication:
  - JSON Web Tokens (JWT) for secure user authentication

- Other Tools and Libraries:
  - Axios for handling HTTP requests
  - Chart.js for data visualization
  - bcrypt for password hashing
  - cors for enabling Cross-Origin Resource Sharing
  - dotenv for managing environment variables

## Features
- User Authentication: Secure login and registration functionalities for users.
- Dashboard: Intuitive and responsive dashboard layout for administrators.
- User Management: CRUD operations for managing user accounts.
- Order Management: View, update, and track customer orders.
- Menu Management: Add, edit, and delete menu items and restaurant details.
- Analytics: Display order trends, user activity, and revenue through interactive charts.
- Access Control: Role-based access control to restrict access to certain functionalities.
- Security: Implementation of secure coding practices and regular updates to ensure application security.

## Getting Started
To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Yagna123k/Admin-Dashboard.git`
2. Navigate to the project directory: `cd Admin-Dashboard`
3. Install dependencies:
   - Frontend: `cd client && npm install`
   - Backend: `cd server && npm install`
4. Set up environment variables:
   - Create a `.env` file in the backend directory and add necessary environment variables (e.g., MongoDB connection string, JWT secret key).
5. Start the development server:
   - Frontend: `cd client && npm run dev`
   - Backend: `cd server && npm run dev`
6. Access the application in your web browser: `http://localhost:5137` (frontend) and `http://localhost:3001` (backend).

## License
This project is licensed under the Kirabiz License.

