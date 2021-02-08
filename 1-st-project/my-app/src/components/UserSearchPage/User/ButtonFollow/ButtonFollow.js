import style from "./ButtonFollow.module.css";
import React from "react";

const ButtonFollow = (props) => {
    return (
        <button className={style.follow} onClick={props.addToFriends}>
            <span className={style.rotate}>&#10006;</span> Add to Friends
        </button>
    );
};

export default ButtonFollow;
