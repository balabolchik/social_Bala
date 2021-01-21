import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../Redux/messages-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let updateNewMessageText = (newMessageText) => {
        props.store.dispatch(updateNewMessageTextCreator(newMessageText))
    };

    return (
        <Dialogs sendMessage={ sendMessage } updateNewMessageText={ updateNewMessageText } messagesPage={ state.messagesPage } />
    );
}

export default (DialogsContainer);