import style from "./App.module.css";
import { Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";

class App extends React.Component {
    
    render() {
        return (
            <div className={style.app}>
                <HeaderContainer />
                <ContentContainer />
                <Route path="/login" render={() => <LoginContainer />} />
            </div>
        );
    }
};

export default App;
