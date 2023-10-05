// configure aqui sua store

import { applyMiddleware, combineReducers,
  legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';
import { walletReducer } from './reducers/wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

if (window.Cypress) {
  window.store = store;
}

export default store;
