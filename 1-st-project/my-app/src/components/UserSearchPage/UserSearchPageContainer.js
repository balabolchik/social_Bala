import React from "react";
import { connect } from "react-redux";
import UserSearchPage from "./UserSearchPage";
import {
    setCurrentPage,
    receiveUsers,
    follow,
    unfollow,
} from "./../../Redux/userSearch-reducer";
import { getUsers, getCurrentPage, getCountSize, getTotalUserSize, getIsLoaded, getIsFollowingInProgress } from "./../../Redux/selectors/searchUsers";


class UserSearchPageContainer extends React.Component {
    componentDidMount() {
        this.props.receiveUsers(this.props.currentPage, this.props.countSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.receiveUsers(pageNumber, this.props.countSize);
        this.props.setCurrentPage(pageNumber);
    };
    render() {
        console.log('RENDER')
        return (
            <UserSearchPage
                currentPage={this.props.currentPage}
                totalUserSize={this.props.totalUserSize}
                countSize={this.props.countSize}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                isLoaded={this.props.isLoaded}
                isFollowingInProgress={this.props.isFollowingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

// let stateToProps = (state) => {
//     return {
//         users: state.userSearchPage.users,
//         currentPage: state.userSearchPage.currentPage,
//         countSize: state.userSearchPage.countSize,
//         totalUserSize: state.userSearchPage.totalUserSize,
//         isLoaded: state.userSearchPage.isLoaded,
//         isFollowingInProgress: state.userSearchPage.isFollowingInProgress,
//     };
// };

let stateToProps = (state) => {
    console.log('MapStateToProps');
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        countSize: getCountSize(state),
        totalUserSize: getTotalUserSize(state),
        isLoaded: getIsLoaded(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    };
};

export default connect(stateToProps, {
    setCurrentPage,
    receiveUsers,
    follow,
    unfollow
})(UserSearchPageContainer);
