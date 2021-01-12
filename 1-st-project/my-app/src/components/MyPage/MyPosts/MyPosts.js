import Post from "./Posts/Post";
import style from "./MyPosts.module.css";
import React from 'react';

const MyPosts = (props) => {

    let myPosts = props.profilePage.userPosts.map(post => <Post text={post.text} />)
    let newPostText = React.createRef();

    let addPost = () => {
        let text = newPostText.current.value;
        alert(text);
        newPostText.current.value = "";
    }

    return (
        <div>
            <div>
                <h3>New posts</h3>
                <div>
                    <input type='text' placeholder='your news' ref={newPostText} />
                </div>
                <div>
                    <button className={style.send} onClick={ addPost }>ADD POST</button>
                </div>
            </div>
            { myPosts }
        </div>
    );
};

export default (MyPosts);