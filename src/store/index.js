import { createStore } from 'redux';
import reducer from './reducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(reducer, enhancer);

export default store;
