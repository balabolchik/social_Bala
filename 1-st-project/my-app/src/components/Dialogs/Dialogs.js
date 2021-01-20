import React from 'react';
import style from "./Dialogs.module.css";
import DialogsList from './DialogList/DialogsList';
import Message from "./Message/Message";
import { sendMessageCreator, u, updateNewMessageTextCreator } from '../../Redux/store';

const Dialogs = (props) => {
    
    let pushMessages = props.messagesPage.userMessages.map( m => <Message userMessage={m.userMessage}/>);

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    };

    let updateNewMessageText = (el) => { 
        props.dispatch(updateNewMessageTextCreator(el.target.value))
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <DialogsList userDialogs={props.messagesPage.userDialogs} />
            </div>
            <div className={style.dialog}>
                { pushMessages }
                <textarea className={style.newMessage} onChange={ updateNewMessageText } value={props.messagesPage.newMessageText} placeholder="Your message!" />
                <button className={style.sendMessage} onClick={ sendMessage }>SEND</button>
            </div>
        </div>
    )
}

export default (Dialogs);