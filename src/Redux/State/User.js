import Axios from 'axios';
import baseUrl from './baseUrl';

const GET_USER = 'cars/GET_USER';

export const login = (name) => async (dispatch) => {
  const details = { username: name };
  const response = await Axios.post(`${baseUrl}/login`, details);
  const userObj = {
    username: response.data.username,
    id: response.data.id,
  };
  dispatch({
    type: GET_USER,
    payload: userObj,
  });
};

const carReducer = (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
