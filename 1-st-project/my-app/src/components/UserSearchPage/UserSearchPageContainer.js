import React from "react";
import { connect } from "react-redux";
import UserSearchPage from "./UserSearchPage";
import {
    setCurrentPage,
    getUsers,
    follow,
    unfollow,
} from "./../../Redux/userSearch-reducer";

class UserSearchPageContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.countSize);
        this.props.setCurrentPage(pageNumber);
    };
    render() {
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

let stateToProps = (state) => {
    return {
        users: state.userSearchPage.users,
        currentPage: state.userSearchPage.currentPage,
        countSize: state.userSearchPage.countSize,
        totalUserSize: state.userSearchPage.totalUserSize,
        isLoaded: state.userSearchPage.isLoaded,
        isFollowingInProgress: state.userSearchPage.isFollowingInProgress,
    };
};

export default connect(stateToProps, {
    setCurrentPage,
    getUsers,
    follow,
    unfollow
})(UserSearchPageContainer);
