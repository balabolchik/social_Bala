import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

let stateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export const RedirectToLogin = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />;
            return <Component {...this.props} />;
        }
    }

    return connect(stateToProps, {})(RedirectComponent);
};