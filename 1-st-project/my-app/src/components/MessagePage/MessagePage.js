import React from "react";
import style from "./MessagePage.module.css";
import DialogsListContainer from "./DialogList/DialogListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const MessagePage = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <DialogsListContainer />
            </div>
            <div className={style.messages}>
                <MessagesContainer />
            </div>
        </div>
    );
};

export default MessagePage;
