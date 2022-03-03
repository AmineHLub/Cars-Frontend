import Axios from 'axios';
import baseUrl from '../State/baseUrl';

const GET_RESERVATIONS = 'reservation/GET_RESERVATIONS';
const CREATE_RESERVATION = 'reservation/CREATE_RESERVATION';

// initial state
const initialState = {
  reservations: [],
};

// Actions
export const createReservationAction = (json) => async (dispatch) => {
  const response = await Axios.post(`${baseUrl}/reservations`, json);

  if (response.data.status === 200) {
    dispatch({
      type: CREATE_RESERVATION,
      json,
    });
  }
};

// get resrevations
export const fetchReservations = () => async (dispatch) => {
  const response = await Axios.get(`${baseUrl}/reservations`);
  const fetchedData = response.data;

  dispatch({
    type: GET_RESERVATIONS,
    payload: fetchedData,
  });
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return { reservations: action.json };
    case GET_RESERVATIONS:
      return { reservations: action.payload };
    default:
      return state;
  }
};

export default reservationReducer;
