import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addNewPost = () => {
        props.store.dispatch(addPostCreator());
    };
    
    let updateNewPostText = (newPostText) => {
        props.store.dispatch(updateNewPostTextCreator(newPostText));
    }

    return (
        <MyPosts addNewPost={ addNewPost } updateNewPostText={ updateNewPostText } profilePage={ state.profilePage } />
    );
};

export default (MyPostsContainer);