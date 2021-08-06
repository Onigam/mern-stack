import callApi, { extractErrorMessage } from '../../util/apiCaller';

// Export Constants
export const SIGNUP = 'SIGNUP';
export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';
export const LOGIN = 'LOGIN';
export const CLEAR_SIGNUP_INFO = 'CLEAR_SIGNUP_INFO';
export const LOGOUT = 'LOGOUT';

export function clearLoginError() {
    return {
        type: CLEAR_LOGIN_ERROR
    };
}

export function login(error, isLoggedIn) {
    return {
        type: LOGIN,
        error: error,
        isLoggedIn,
    };
}

export function loginRequest(user) {
    return (dispatch) => {
        if (!user.email || !user.password) {
            return;
        }

        return callApi('auth/login', 'post', user)
            .then(res => {
                if (res && !res.token) {
                    dispatch(login(extractErrorMessage(res), null));
                } else {
                    localStorage.setItem('token', res.token);
                    dispatch(login(null, true));
                }
            });
    };
}

// Export Actions
export function signup(error) {
    return {
        type: SIGNUP,
        error: error
    };
}

export function clearSignupInfo() {
    return {
        type: CLEAR_SIGNUP_INFO
    };
}

export function logout() {
    localStorage.removeItem('token');

    return {
        type: LOGOUT
    };
}

export function signupRequest(user) {
    return (dispatch) => {
        if (!user.email || !user.password) {
            return;
        }

        return callApi('auth/signup', 'post', user).then(res => {
            dispatch(signup(extractErrorMessage(res)));
        });
    };
}