import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

let stateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const RedirectToProfile = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to="/profile" />;
            return <Component {...this.props} />;
        }
    }

    return connect(stateToProps, {})(RedirectComponent);
};