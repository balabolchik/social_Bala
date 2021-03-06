import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { auth, logout, setAuthUserData } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.auth();
    }
    render() {
        return <Header {...this.props} />;
    }
}

let stateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(stateToProps,{ setAuthUserData, auth, logout})(HeaderContainer);
