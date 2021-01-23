import { connect } from "react-redux";
import DialogList from "./DialogList";

let stateToProps = (state) => {
    return {
        userDialogs: state.messagePage.userDialogs
    }
}

const DialogListContainer = connect(stateToProps)(DialogList);

export default DialogListContainer;
