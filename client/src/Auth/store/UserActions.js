import callApi from '../../util/apiCaller';

// Export Constants
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Export Actions
export function login(user) {
    return {
        type: LOGIN,
        user,
    };
}

export function loginRequest(user) {
    return (dispatch) => {
        return callApi('auth/login', 'post', user).then(res => dispatch(login(res.user)));
    };
}

// Export Actions
export function signup() {
    return {
        type: SIGNUP
    };
}

export function signupRequest(user) {
    return (dispatch) => {
        return callApi('auth/signup', 'post', user).then(res => {
            console.log(res)
            dispatch(signup);
        });
    };
}
