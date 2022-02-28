import Axios from 'axios';
import baseUrl from './baseUrl';

const GET_CARS = 'cars/GET_CARS';

export const fetchCars = () => async (dispatch) => {
  const response = await Axios.get(`${baseUrl}/cars`);
  dispatch({
    type: GET_CARS,
    payload: response.data,
  });
};

const initialState = [];

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
