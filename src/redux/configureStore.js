import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import auth from './modules/auth';
import user from './modules/user';
import twit from './modules/twit';

// Get Combiner's Config
const persistConfig = {
  key: "root",
  storage
};

// Combine Reducers
const reducers = persistCombineReducers(
  persistConfig,
  {
    auth,
    user,
    twit
  });

// Combine Middlewares
const middlewares = [thunk];

// Create Configstore using Combined Reducer and Middlewares
const configureStore = () => {
  let store = createStore(reducers, applyMiddleware(...middlewares));  // Everything that we change on the store is also going to be saved on the phone.
  let persistor = persistStore(store);
  return { store, persistor }
};

// Export
export default configureStore;




