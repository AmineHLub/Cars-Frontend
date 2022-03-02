import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import carReducer from './State/Car';
import reservationReducer from './Reservation';
import userReducer from './State/User';

const reducer = combineReducers({ carReducer, userReducer, reservationReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
