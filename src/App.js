import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import GlobaStyle from './styles/global';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobaStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
