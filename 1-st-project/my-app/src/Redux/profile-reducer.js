const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (action, state) => {
    switch (action) {
        case ADD_POST: {
            if (state.newPostText !== "") {
                state.userPosts.push({ id: 5, text: `${state.newPostText}` });
            }
            state.newPostText = ``;
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newPostText;
            return state;
        }
        default: {
            return state;
        }
    }
};


export default profileReducer;