import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import Login from "./Login";

const stateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(stateToProps, { login })(Login);