import { connect } from "react-redux";
import React from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../../Redux/messages-reducer";
import Messages from "./Messages";

let stateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let dispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageCreator())},
        updateNewMessageText: (text) => {dispatch(updateNewMessageTextCreator(text))}
    }
}

const MessagesContainer = connect(stateToProps, dispatchToProps)(Messages);

export default MessagesContainer;
