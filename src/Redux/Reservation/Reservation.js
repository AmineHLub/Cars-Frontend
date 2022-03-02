import Axios from 'axios';

const URL = '';
const GET_RESERVATIONS = 'reservation/GET_RESERVATIONS';
// const CREATE_RESERVATION = 'reservation/CREATE_RESERVATION';

export const fetchCars = () => async (dispatch) => {
  const response = await Axios.get(URL);
  dispatch({
    type: GET_RESERVATIONS,
    payload: response.data,
  });
};

const initialState = [];

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reservationReducer;
