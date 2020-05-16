import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';

import Dashboard from './components/Dashboard/index';

ReactDOM.render(
  <>
    <Dashboard />
    <GlobalStyle />
  </>,
  document.getElementById('root'),
);
