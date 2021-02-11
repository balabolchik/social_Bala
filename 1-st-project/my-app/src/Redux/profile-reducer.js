import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {       
    userPosts: [
        { id: 1, text: "My first post!" },
        { id: 2, text: "My second post!" },
        { id: 3, text: "My third post!" },
        { id: 4, text: "My last post! My last post! My last post! My last post! My last post! My last post! My last post! My last post! My last post!    My last post!     My last post!" },
    ],
    newPostText: ``,
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                userPosts: state.newPostText!==""?[...state.userPosts,{ id: 5, text: `${state.newPostText}`}]:[...state.userPosts],
                newPostText: ``
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: {
            return state;
        }
    }
};

export const updateNewPostText = newPostText => ({type: UPDATE_NEW_POST_TEXT, newPostText });
export const addNewPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUser = (userId) => {
    return (dispatch) => {
        usersAPI.getUser(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;