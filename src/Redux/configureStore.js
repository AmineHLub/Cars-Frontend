import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import carReducer from './State/Car';
import reservationReducer from './Reservation/Reservation';

const reducer = combineReducers({ carReducer, reservationReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
