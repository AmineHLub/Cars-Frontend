import Axios from 'axios';
import baseUrl from '../State/baseUrl';

const GET_RESERVATIONS = 'reservation/GET_RESERVATIONS';

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

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reservationReducer;
