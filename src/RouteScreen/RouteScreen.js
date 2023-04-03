import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vegetable from '../screen/Vegetable/Vegetable';
import Food from '../screen/Food/Food';
import Fruit from '../screen/Fruit/Fruit';
const RouteScreen = () => {
  return (
    <Routes>
          <Route path="/" element={<Vegetable />} />
          <Route path="food" element={<Food />} />
          <Route path="fruit" element={<Fruit />} />
      </Routes>
  )
}

export default RouteScreen