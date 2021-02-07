import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import UserSearchPage from "./UserSearchPage";
import {
    addToFriends,
    deleteFromFriends,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    setIsLoaded,
} from "./../../Redux/userSearch-reducer";

class UserSearchPageContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoaded(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countSize}`, {
            withCredentials: true
        }).then((response) => {
                this.props.setIsLoaded(false);
                this.props.setUsers(response.data.items);
                this.props.setUserTotalCount(response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setIsLoaded(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countSize}`, {
            withCredentials: true
        }).then((response) => {
                this.props.setIsLoaded(false);
                this.props.setUsers(response.data.items);
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
    };
};

export default connect(stateToProps, { addToFriends, deleteFromFriends, setUsers, setCurrentPage, setUserTotalCount, setIsLoaded } )(UserSearchPageContainer);