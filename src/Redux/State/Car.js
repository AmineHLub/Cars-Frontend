import Axios from 'axios';
import baseUrl from './baseUrl';

const GET_CARS = 'cars/GET_CARS';
const MARK_DELETED = 'cars/MARK_DELETED';

export const markDeleted = (payload) => ({
  type: MARK_DELETED,
  payload,
});

// dispatch modified const cars, added property toShow: true by default
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
    case MARK_DELETED: {
      const updatedState = state.map((car) => {
        if (car.id !== action.payload.id) { return car; }

        return { ...car, toShow: false };
      });
      return [...updatedState];
    }
    default:
      return state;
  }
};

export default carReducer;
