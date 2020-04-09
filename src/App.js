import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import './config/reactotron';

import GlobaStyle from './styles/global';

import Routes from './routes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <GlobaStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
