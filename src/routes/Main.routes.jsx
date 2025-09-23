import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipe from "../pages/Recipes";
import About from "../pages/About";
import SingleRecipe from '../pages/SingleRecipe';
import { Navigate } from 'react-router-dom';

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
      </Routes>
    </div>
  )
}

export default MainRoutes;
