import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {       
    userPosts: [
        { id: 1, text: "My first post!" },
        { id: 2, text: "My second post!" },
        { id: 3, text: "My third post!" },
        { id: 4, text: "My last post! My last post! My last post! My last post! My last post! My last post! My last post! My last post! My last post!    My last post!     My last post!" },
    ],
    profile: null,
    status: "",
    fake: 10,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                userPosts: action.newPostText?[...state.userPosts,{ id: 5, text: `${action.newPostText}`}]:[...state.userPosts],
                newPostText: ``
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case 'FAKE': {
            return {
                ...state,
                fake: state.fake+1,
            }
        }
        default: {
            return state;
        }
    }
};

export const addNewPost = newPostText => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUser = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    }
}

export const uppdateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}

export default profileReducer;