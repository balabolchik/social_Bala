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
            debugger
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
        usersAPI.auth().then((data) => {
            if (data.resultCode === 0) {
                debugger
                dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email));
            }
        });
    }

}

export default authReducer;