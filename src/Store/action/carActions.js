import cars from '../../api/cars';
import ActionTypes from '../types/types';

export const receiveCars = (cars) => ({
  type: ActionTypes.RECEIVE_CARS,
  cars,
});
export const fetchCars = () => (dispatch) => {
  cars.fetchCars().then((cars) => {
    dispatch(receiveCars(cars));
    return cars;
  });
};
export const removeCar = (userId, id) => (dispatch) => {
  cars.removeCar(userId, id).then((response) => {
    dispatch(fetchCars());
    return response;
  });
};
export const addCar = (car) => (dispatch) => {
  cars.addCar(car).then((response) => {
    if (response.id) {
      dispatch(fetchCars());
    }
    return response;
  });
};
