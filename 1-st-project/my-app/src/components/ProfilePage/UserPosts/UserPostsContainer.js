import { connect } from "react-redux";
import { addNewPost, updateNewPostText} from "../../../Redux/profile-reducer";
import UserPosts from "./UserPosts";

let stateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const UserPostsContainer = connect(stateToProps, { updateNewPostText, addNewPost })(UserPosts);

export default UserPostsContainer;
