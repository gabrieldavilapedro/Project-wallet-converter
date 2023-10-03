// configure aqui sua store

import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
if (window.Cypress) {
  window.store = store;
}

export default store;
