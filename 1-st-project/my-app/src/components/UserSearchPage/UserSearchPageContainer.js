import React from "react";
import { connect } from "react-redux";
import UserSearchPage from "./UserSearchPage";
import {
    addToFriends,
    deleteFromFriends,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    setIsLoaded,
    isFollowedInProgress,
} from "./../../Redux/userSearch-reducer";
import { usersAPI } from "../../api/api";

class UserSearchPageContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoaded(true);
        usersAPI
            .getUsers(this.props.currentPage, this.props.countSize)
            .then((data) => {
                this.props.setIsLoaded(false);
                this.props.setUsers(data.items);
                this.props.setUserTotalCount(data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setIsLoaded(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.countSize).then((data) => {
            this.props.setIsLoaded(false);
            this.props.setUsers(data.items);
        });
    };
    render() {
        return (
            <UserSearchPage
                currentPage={this.props.currentPage}
                totalUserSize={this.props.totalUserSize}
                countSize={this.props.countSize}
                users={this.props.users}
                addToFriends={this.props.addToFriends}
                deleteFromFriends={this.props.deleteFromFriends}
                onPageChanged={this.onPageChanged}
                isLoaded={this.props.isLoaded}
                isFollowingInProgress={this.props.isFollowingInProgress}
                isFollowedInProgress={this.props.isFollowedInProgress}
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
    addToFriends,
    deleteFromFriends,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    setIsLoaded,
    isFollowedInProgress
})(UserSearchPageContainer);
