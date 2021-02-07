import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUserData } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let data = response.data.data;
                    this.props.setAuthUserData(data.id, data.login, data.email)
                }
            });
    }
    render() {
        return <Header {...this.props} />;
    }
}

let stateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(stateToProps,{ setAuthUserData })(HeaderContainer);
