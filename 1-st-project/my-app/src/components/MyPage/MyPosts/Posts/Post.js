import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
};

export default (Post);