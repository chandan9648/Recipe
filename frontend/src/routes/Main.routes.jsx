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
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
