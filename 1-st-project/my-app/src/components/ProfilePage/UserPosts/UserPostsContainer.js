import { connect } from "react-redux";
import React from "react";
import { addPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import UserPosts from "./UserPosts";

let stateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let dispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newPostText) => dispatch(updateNewPostTextCreator(newPostText)),
        addNewPost: () => dispatch(addPostCreator())
    }
}

const UserPostsContainer = connect(stateToProps, dispatchToProps)(UserPosts);

export default UserPostsContainer;
