import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../global';

import ApplicationRoutes from '../routes';

const App = () => (
  <BrowserRouter>
    <ApplicationRoutes />

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
