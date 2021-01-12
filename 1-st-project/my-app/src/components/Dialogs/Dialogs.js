import React from 'react';
import style from "./Dialogs.module.css";
import DialogsList from './DialogList/DialogsList';
import Message from "./Message/Message";

const Dialogs = (props) => {
    
    let pushMessages = props.messagesPage.userMessages.map( m => <Message userMessage={m.userMessage}/>);
    let messageText = React.createRef();

    let sendMessage = () => {
        alert(messageText.current.value);
        messageText.current.value = "";
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <DialogsList userDialogs={props.messagesPage.userDialogs} />
            </div>
            <div className={style.dialog}>
                { pushMessages }
                <input ref={messageText} placeholder="Your message!" />
                <button onClick={ sendMessage }>SEND</button>
            </div>
        </div>
    )
}

export default (Dialogs);