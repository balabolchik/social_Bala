import Post from "./Posts/Post";
import style from "./MyPosts.module.css";
import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from "../../../Redux/store";

const MyPosts = (props) => {

    let myPosts = props.profilePage.userPosts.map(post => <Post text={post.text} />)

    let addNewPost = () => {
        props.dispatch(addPostCreator());
    };
    
    let updateNewPostText = (el) => {
        props.dispatch(updateNewPostTextCreator(el.target.value));
    }

    return (
        <div className={style.myPosts}>
            <div className={style.newPost}>
                <h3>New posts</h3>
                <div>
                    <textarea type='text' placeholder='Your news' value={props.profilePage.newPostText} onChange={ updateNewPostText } />
                </div>
                <div className={style.button}>
                    <button className={style.addPost} onClick={ addNewPost }>ADD POST</button>
                </div>
            </div>
            <h2>Posts</h2>
            { myPosts }
        </div>
    );
};

export default (MyPosts);