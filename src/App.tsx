// import React from 'react';
// import logo from './logo.svg';
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { lazy, ReactNode, Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Sidebar from "./components/Sidebar";

const RestaurantsPage = lazy(() => import("./pages/RestaurantsPage"));
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const DishPage = lazy(() => import("./pages/DishPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

const AppLayout = () => (
  <>
    <Sidebar />
    <div>
      <Outlet />
    </div>
  </>
);

function CenterSpinner() {
  return <CircularProgress />;
}
export function suspense(children: ReactNode) {
  return <Suspense fallback={<CenterSpinner />} children={children} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={suspense(<RestaurantsPage />)} />
            <Route
              path="/restaurant/:id"
              element={suspense(<RestaurantPage />)}
            />
            <Route path="/dish/:id" element={suspense(<DishPage />)} />
            <Route path="/cart" element={suspense(<CartPage />)} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
