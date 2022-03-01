import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import carReducer from './State/Car';
import deleteReducer from './deleteReducer';

const reducer = combineReducers({ carReducer, myBan: deleteReducer, });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
