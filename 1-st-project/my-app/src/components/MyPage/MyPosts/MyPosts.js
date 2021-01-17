import Post from "./Posts/Post";
import style from "./MyPosts.module.css";
import React from 'react';

const MyPosts = (props) => {

    let myPosts = props.profilePage.userPosts.map(post => <Post text={post.text} />)
    let newPostText = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    };
    
    let onPostChange = () => {
        let text = newPostText.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newtext: text});
    }

    return (
        <div className={style.myPosts}>
            <div className={style.newPost}>
                <h3>New posts</h3>
                <div>
                    <textarea type='text' placeholder='Your news' ref={newPostText} value={props.profilePage.newPostText} onChange={onPostChange} />
                </div>
                <div className={style.button}>
                    <button className={style.addPost} onClick={ addPost }>ADD POST</button>
                </div>
            </div>
            <h2>Posts</h2>
            { myPosts }
        </div>
    );
};

export default (MyPosts);