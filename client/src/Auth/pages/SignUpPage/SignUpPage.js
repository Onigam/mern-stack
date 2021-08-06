import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Import Actions
import { signupRequest, clearSignupInfo } from '../../../Auth/store/UserActions';
import UserDataForm from '../../components/UserDataForm';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const signUpError = useSelector(state => state.user.signUpError);
  const signUpDone = useSelector(state => state.user.signUpDone);

  const handleSignup = (user) => {
    dispatch(signupRequest(user));
  };

  const cleanErrorMessage = () => {
    dispatch(clearSignupInfo());
  };

  useEffect(() => {
    return () => {
      cleanErrorMessage();
    }
  }, []);

  return (
    signUpDone ? <Redirect to="/login" />
      : (
        <UserDataForm
          headerTitle='SignUp'
          onClickHandler={handleSignup}
          error={signUpError}
          onErrorDismiss={cleanErrorMessage}
        />
      )
  );
};

export default SignUpPage;