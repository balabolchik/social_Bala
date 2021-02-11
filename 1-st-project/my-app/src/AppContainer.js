import { connect } from "react-redux";
import App from "./App";

const stateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
const AppContainer = connect(stateToProps, {})(App)
export default (AppContainer);
