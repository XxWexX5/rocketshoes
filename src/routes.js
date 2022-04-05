import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" exact element={<Cart />} />
  </Routes>
);

export default ApplicationRoutes;
