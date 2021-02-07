import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <pre className={style.postText}>{props.text}</pre
            >
        </div>
    );
};

export default (Post);