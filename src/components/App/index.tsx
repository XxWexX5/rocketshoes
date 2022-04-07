import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../../store';

import GlobalStyle from '../../global';

import Header from '../Header';

import ApplicationRoutes from '../../routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <ApplicationRoutes />

      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

export default App;
