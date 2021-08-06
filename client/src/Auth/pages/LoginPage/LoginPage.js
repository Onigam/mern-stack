import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Actions
import { loginRequest } from '../../../Auth/store/UserActions';
import UserDataForm from '../../components/UserDataForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isLoggedIn);

  const handleLogin = (user) => {
    dispatch(loginRequest(user));
  };

  return (
    <UserDataForm headerTitle='Login' onClickHandler={handleLogin}/>
  );
};

export default LoginPage;