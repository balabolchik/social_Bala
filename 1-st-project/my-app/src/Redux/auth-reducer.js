import { usersAPI } from "../api/api";

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
                isAuth: true
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, userData: {userId, login, email} });

export const auth = () => {
    return (dispatch) => {
        usersAPI.auth().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.id, response.data.login, response.data.email));
            }
        });
    }

}

export default authReducer;