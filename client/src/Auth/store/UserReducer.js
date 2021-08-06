import { LOGIN, CLEAR_LOGIN_ERROR, CLEAR_SIGNUP_INFO, LOGOUT, SIGNUP } from './UserActions';

// Initial State
const initialState = {
  isLoggedIn: false,
  loginError: null,
  signUpError: null,
  signUpDone: false
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        loginError: action.error
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginError: null
      };
    case SIGNUP:
      return {
        ...state,
        signUpError: action.error,
        signUpDone: !action.error
      };
    case CLEAR_SIGNUP_INFO:
      return {
        ...state,
        signUpError: null,
        signUpDone: false
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

// Export Reducer
export default UserReducer;