import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Theme
import { themeSettings } from "./theme";

// Scenes
import {
  Layout,
  Dashboard,
  Products,
  Customers,
  Transactions,
  Monthly,
  Admin,
  Performance,
  Orders,
  Registration,
  Items,
} from "./scenes";
import RestaurantList from "./scenes/Restaurants/RestaurantList";
import O_Assignment from "./scenes/order_assignment";
import Analysis from "./scenes/Analysis/App";
import Rider_analysis from "./scenes/RiderAnalysis/SuperAdminDashboard";

// App
const App = () => {
  // Dark/Light mode
  const mode = useSelector((state) => state.global.mode);
  // theme setting
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        {/* Theme Provider */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders_assignment" element={<O_Assignment />} />
              <Route path="/restaurants" element={<RestaurantList />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/rider_analysis" element={<Rider_analysis />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />   
              <Route path="/registration" element={<Registration />} />             
              <Route path="/orders/:id" element={<Items />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
