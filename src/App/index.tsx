import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ApplicationRoutes from '../routes';

const App = () => (
  <BrowserRouter>
    <ApplicationRoutes />
  </BrowserRouter>
);

export default App;
