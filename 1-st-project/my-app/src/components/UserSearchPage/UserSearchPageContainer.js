import { connect } from "react-redux";
import UserSearchPage from "./UserSearchPage";
import { followCreator, unfollowCreator, setUsersCreator } from "./../../Redux/userSearch-reducer";

let stateToProps = (state) => {
    return {
        users: state.userSearchPage.users
    }
}

let dispatchToProps = (dispatch) => {
    return {
        addToFriends: (userId) => {
            dispatch(followCreator(userId));
        },
        deleteFromFriends: (userId) => {
            dispatch(unfollowCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }
}

const UserSearchPageContainer = connect(stateToProps, dispatchToProps)(UserSearchPage)

export default UserSearchPageContainer;