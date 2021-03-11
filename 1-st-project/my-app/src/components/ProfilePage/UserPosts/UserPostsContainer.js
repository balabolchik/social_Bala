import { connect } from "react-redux";
import { addNewPost } from "../../../Redux/profile-reducer";
import UserPosts from "./UserPosts";

let stateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(stateToProps, { addNewPost })(UserPosts);