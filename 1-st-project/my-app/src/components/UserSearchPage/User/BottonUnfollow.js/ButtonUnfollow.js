import style from "./ButtonUnfollow.module.css";
import React from "react";

const ButtonUnfollow = (props) => {
    return (
        <button
            className={style.deleteFromFriends}
            onClick={props.deleteFromFriends}
        >
            <span className={style.unrotate}>&#10006;</span> Delete from Friends
        </button>
    );
};

export default ButtonUnfollow;
