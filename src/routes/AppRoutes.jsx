import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="recipes" element={<Recipes />} />

    </Routes>
  );
}

export default AppRoutes;
