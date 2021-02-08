import style from "./ButtonDisabled.module.css";
import React from "react";

const ButtonDisabled = (props) => {
    return (
        <button
            disabled="true"
            className={style.disabled}
            onClick={props.deleteFromFriends}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default ButtonDisabled;
