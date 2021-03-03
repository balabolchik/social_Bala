import { connect } from "react-redux";
import DialogList from "./DialogList";

let stateToProps = (state) => {
    return {
        userDialogs: state.messagePage.userDialogs
    }
}

export default connect(stateToProps)(DialogList);