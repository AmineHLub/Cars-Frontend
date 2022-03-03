import Axios from 'axios';
import baseUrl from '../State/baseUrl';

const GET_RESERVATIONS = 'reservation/GET_RESERVATIONS';
const UPDATE_RESERVATIONS = 'reservation/UPDATE_RESERVATIONS';

// initial state
const initialState = [];

// get resrevations
export const fetchReservations = () => async (dispatch) => {
  const response = await Axios.get(`${baseUrl}/reservations`);
  const fetchedData = response.data;

  dispatch({
    type: GET_RESERVATIONS,
    payload: fetchedData,
  });
};

export const handleDeleteReservation = (data) => async (dispatch) => {
  await Axios.delete(`${baseUrl}/reservations/${data.id}`);

  dispatch({
    type: UPDATE_RESERVATIONS,
    payload: data,
  });
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    case UPDATE_RESERVATIONS:
      return state.filter((element) => element.id !== action.payload.id);
    default:
      return state;
  }
};

export default reservationReducer;
