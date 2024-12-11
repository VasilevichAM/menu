import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { lazy, ReactNode, Suspense } from "react";
import { CircularProgress, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import "./i18n";

const RestaurantsPage = lazy(() => import("./pages/RestaurantsPage"));
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));

const AppLayout = () => (
  <>
    <Sidebar />
    <div>
      <Outlet />
    </div>
  </>
);

function CenterSpinner() {
  return <CircularProgress sx={{ margin: "10rem" }} />;
}
export function suspense(children: ReactNode) {
  return <Suspense fallback={<CenterSpinner />} children={children} />;
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={suspense(<RestaurantsPage />)} />
            <Route
              path="/restaurant/:id"
              element={suspense(<RestaurantPage />)}
            />
            <Route path="/orders/:id" element={suspense(<OrdersPage />)} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
