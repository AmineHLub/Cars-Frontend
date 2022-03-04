import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from './Redux/State/User';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState('');
  const dispatch = useDispatch();
  const handleLogin = (name) => {
    if (name) {
      dispatch(login(name));
    } return null;
  };
  return (
    <div className="splash-container">
      <h1>You have to login to continue</h1>
      <input placeholder="username..." onChange={(e) => setLoginDetails(e.target.value)} />
      <button type="button" onClick={() => handleLogin(loginDetails)}>Login</button>
    </div>
  );
};

export default Login;
