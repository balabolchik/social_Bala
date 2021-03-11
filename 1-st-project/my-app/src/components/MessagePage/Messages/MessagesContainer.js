import { connect } from "react-redux";
import { sendMessage } from "../../../Redux/messages-reducer";
import Messages from "./Messages";

let stateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

export default connect(stateToProps, { sendMessage })(Messages);