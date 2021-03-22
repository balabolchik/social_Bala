import style from "./App.module.css";
import { Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import { connect } from "react-redux";
import { initialize } from "./Redux/app-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <div className={style.app}>
                    <HeaderContainer />
                    <ContentContainer />
                    <Route path="/login" render={() => <LoginContainer />} />
                </div>
            );
        }
    }
};

const stateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect( stateToProps, { initialize }),
    withRouter
)(App);