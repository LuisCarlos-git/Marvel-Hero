import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './reducer';
import persist from './reducerPersists';

// reactotron
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(persist(reducer), enhancer);
const persistor = persistStore(store);

export { store, persistor };
