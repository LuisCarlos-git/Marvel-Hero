import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persisted = persistReducer(
    {
      key: 'list',
      storage,
      // nome do estado do reducer
      whitelist: ['list'],
    },
    reducers
  );

  return persisted;
};
