import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Actions
import { signupRequest } from '../../../Auth/store/UserActions';
import UserDataForm from '../../components/UserDataForm';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isLoggedIn);

  const handleSignup = (user) => {
    dispatch(signupRequest(user));
  };

  return (
    <UserDataForm headerTitle='SignUp' onClickHandler={handleSignup} />
  );
};

export default SignUpPage;