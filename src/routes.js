import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" exact element={<Cart />} />
  </Routes>
);

export default ApplicationRoutes;
