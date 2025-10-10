import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipe from "../pages/Recipes";
import About from "../pages/About";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";
import Fav from "../pages/Fav";
import Register from "../pages/Register";
import { useAuth } from "../context/auth";

const SellerRoute = ({ children }) => {
  const { isSeller, user } = useAuth() || {};
  if (!user) return <Navigate to="/login" replace />;
  if (!isSeller) return <Navigate to="/" replace />;
  return children;
}

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Primary list route */}
        <Route path="/recipes" element={<Recipe />} />
        {/* Backwards compatibility redirect */}
        <Route path="/recipe" element={<Navigate to="/recipes" replace />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
  <Route path="/create" element={<SellerRoute><Create /></SellerRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
