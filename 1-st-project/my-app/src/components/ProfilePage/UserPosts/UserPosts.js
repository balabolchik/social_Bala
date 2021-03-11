import Post from "./Posts/Post";
import style from "./UserPosts.module.css";
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/formsControl/FormsControl";
import { maxLength, required } from "../../utilits/validation/Validate";

const maxLength100 = maxLength(10)

const UserPosts = (props) => {

    let myPosts = props.profilePage.userPosts.map(post => <Post text={post.text} key={post.id} />)

    let addNewPost = (value) => {
        props.addNewPost(value.newPostText);
    };

    return (
        <div className={style.myPosts}>
            <div className={style.newPost}>
                <h3>New posts</h3>
                <NewPostReduxForm onSubmit={addNewPost}/>
            </div>
            <h2>Posts</h2>
            { myPosts}
        </div>
    );
};

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' placeholder='Your news' component={ Textarea } validate={[required, maxLength100]}/>
            </div>
            <div className={style.button}>
                <button className={style.addPost}>ADD POST</button>
            </div>
        </form>
    );
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm);

export default (UserPosts);