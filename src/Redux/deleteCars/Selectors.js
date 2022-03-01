import axios from 'axios';
import baseUrl from '../State/baseUrl'

// eslint-disable-next-line import/prefer-default-export
/*eslint semi: [2, "never"]*/
export const isConnect = async () => {
  let answer = false;
  let token = '';
  if (localStorage.getItem('token') != null) {
    token = localStorage.getItem('token');
  }
  await axios.get(`${baseUrl}/member-data`, {
    headers: {
      authorization: token,
    },
  })
    .then((response) => response)
    .then((response) => {
      if (response.data.message === "Welcome, you're logged in!") {
        answer = true;
      } else {
        localStorage.setItem('token', '');
      }
      return answer;
    })
    .catch((error) => error);
  return answer;
};

export const goBack = () => {
  isConnect().then((data) => {
    if (data !== true) {
      window.location.href = '/login';
    }
    return true;
  });
};

export const synchronousIsConnect = () => {
  let answer = null;
  isConnect().then((data) => {
    if (data !== true) {
      answer = false;
    } else {
      answer = true;
    }
  });
  return answer;
};

export const sessionDestroy = async () => {
  let answer = false;
  let token = localStorage.getItem('token');
  if (token === null) {
    token = '';
  }
  await axios.delete(`${baseUrl}/users/sign_out`, {
    headers: {
      authorization: token,
    },
  })
    .then((response) => response)
    .then((response) => {
      answer = response;
      localStorage.setItem('token', '');
      window.location.href = '/login';
      return true;
    })
    .catch((error) => error);
  return answer;
};
