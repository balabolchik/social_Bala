import { connect } from "react-redux";
import { sendMessage, updateNewMessageText } from "../../../Redux/messages-reducer";
import Messages from "./Messages";

let stateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

const MessagesContainer = connect(stateToProps, { sendMessage, updateNewMessageText })(Messages);

export default MessagesContainer;
