import ProfilePage from "./ProfilePage";
import React from "react";
import { connect } from "react-redux";
import { getUser, setUserProfile } from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13049;
        }
        this.props.getUser(userId);
    }

    render() {
        return <ProfilePage {...this.props} />;
    };
};

let stateToProps = (state) => ({
    profilePage: state.profilePage
})

export default connect(stateToProps, { setUserProfile, getUser  })(withRouter(ProfilePageContainer));
