import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { 
                ...state,
                ...action.userData,
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, userData: {userId, login, email, isAuth} });


export const auth = () => {
    return (dispatch) => {
        authAPI.auth().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.id, response.data.login, response.data.email, true));
            }
        });
    }
}

export const login = ( email, password, rememberMe ) => {
    return (dispatch) => {
        authAPI.login( email, password, rememberMe ).then((response) => {
            if (response.resultCode === 0) {
                dispatch(auth());
            } else {
                dispatch(stopSubmit('login', {_error: response.messages}));
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;