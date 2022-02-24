import Axios from 'axios';

const URL = '';
const GET_CARS = 'cars/GET_CARS';

export const fetchCars = () => async (dispatch) => {
  const response = await Axios.get(URL);
  dispatch({
    type: GET_CARS,
    payload: response.data,
  });
};

const initialState = [];

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default carReducer;
