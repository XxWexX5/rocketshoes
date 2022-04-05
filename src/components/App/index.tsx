import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../../global';

import Header from '../Header';

import ApplicationRoutes from '../../routes';

const App = () => (
  <BrowserRouter>
    <Header />
    <ApplicationRoutes />

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
