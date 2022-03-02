// import Axios from 'axios';
// import baseUrl from '../State/baseUrl';

// const GET_RESERVATIONS = 'reservation/GET_RESERVATIONS';
const CREATE_RESERVATION = 'reservation/CREATE_RESERVATION';

// initial state
const initialState = {
  reservations: [],
};

// Actions
export const createReservationAction = (json) => ({
  type: CREATE_RESERVATION,
  json,
});

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return { reservations: action.json };
    default:
      return state;
  }
};

export default reservationReducer;
