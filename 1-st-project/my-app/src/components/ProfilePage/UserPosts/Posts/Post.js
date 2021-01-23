import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <p className={style.postText}>{props.text}</p>
        </div>
    );
};

export default (Post);