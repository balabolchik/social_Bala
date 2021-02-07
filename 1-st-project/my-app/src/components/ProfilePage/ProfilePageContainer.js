import ProfilePage from "./ProfilePage";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13049;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <ProfilePage {...this.props} />;
    };
};

let stateToProps = (state) => ({
    profilePage: state.profilePage
})

export default connect(stateToProps, { setUserProfile })(withRouter(ProfilePageContainer));
