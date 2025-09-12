import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipe from "../pages/Recipe";
import About from "../pages/About";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default MainRoutes;
