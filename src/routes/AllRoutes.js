import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  ProductsList,
  CartPage,
  ProductDetails,
  Register,
  Login,
  Dashboard,
  OrderPage,
  NotFound,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/Notfound" />} />
      </Routes>
    </>
  );
};
