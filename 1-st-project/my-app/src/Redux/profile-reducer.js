const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {       
    userPosts: [
        { id: 1, text: "My first post!" },
        { id: 2, text: "My second post!" },
        { id: 3, text: "My third post!" },
        { id: 4, text: "My last post!" },
    ],
    newPostText: ``
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
        default: {
            return state;
        }
    }
};

export const updateNewPostTextCreator = text => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export const addPostCreator = () => ({type: ADD_POST});


export default profileReducer;