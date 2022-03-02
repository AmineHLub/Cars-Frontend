import Axios from 'axios';
import baseUrl from './baseUrl';

const GET_CARS = 'cars/GET_CARS';

export const fetchCars = () => async (dispatch) => {
  const response = await Axios.get(`${baseUrl}/cars`);
  const fetchedData = response.data;
  const cars = fetchedData.map((car) => ({ ...car, toShow: true }));
  dispatch({
    type: GET_CARS,
    payload: cars,
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
