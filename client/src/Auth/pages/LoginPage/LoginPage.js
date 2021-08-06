import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Actions
import { loginRequest, clearLoginError } from '../../../Auth/store/UserActions';
import UserDataForm from '../../components/UserDataForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.user.loginError);

  const handleLogin = (user) => {
    dispatch(loginRequest(user));
  };

  const cleanErrorMessage = () => {
    dispatch(clearLoginError());
  };

  useEffect(() => {
    return () => {
      cleanErrorMessage();
    }
  }, []);

  return (
    <UserDataForm
      headerTitle='Login'
      onClickHandler={handleLogin}
      error={loginError}
      onErrorDismiss={cleanErrorMessage}
    />
  );
};

export default LoginPage;