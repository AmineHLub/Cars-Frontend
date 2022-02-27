import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservations';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import carReducer from './State/Car';
import itemsReducer from './items/items';
import usersReducer from './users/users';

const reducer = combineReducers({ carReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
