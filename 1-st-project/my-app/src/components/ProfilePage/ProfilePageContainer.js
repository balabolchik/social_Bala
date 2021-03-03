import ProfilePage from "./ProfilePage";
import React from "react";
import { connect } from "react-redux";
import { getUser, setUserProfile, getUserStatus, uppdateUserStatus } from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13049;
        }
        this.props.getUserStatus(userId);
        this.props.getUser(userId);
    }

    render() {
        return <ProfilePage {...this.props} />;
    };
};


let stateToProps = (state) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status,
})

export default compose(
    withRouter,
    connect(stateToProps, { setUserProfile, getUser, getUserStatus, uppdateUserStatus })
)(ProfilePageContainer);