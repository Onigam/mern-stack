import { LOGIN, LOGOUT, SIGNUP } from './UserActions';

// Initial State
const initialState = {
    user: null,
    isLoggedIn: false,
    token: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    default:
      return state;
  }
};

// Export Reducer
export default UserReducer;