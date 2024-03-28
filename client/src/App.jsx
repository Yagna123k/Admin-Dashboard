import React from 'react';
import './App.css';
import "./styles/global.scss";

//components
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/Footer";
//pages
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
//Icons

//React-Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ]

    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
