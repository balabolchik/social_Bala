import style from "./Login.module.css";
import { Field, reduxForm } from 'redux-form';
import { Input } from "../common/formsControl/FormsControl";
import { required } from "../utilits/validation/Validate";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router";

const Login = (props) => {
    const onSubmit = (formData) => { props.login(formData.email, formData.password, formData.rememberMe) };
    if (props.isAuth) return <Redirect to="/profile" />
    else {

        return (
            <div className={style.login}>
                <div className={style.content}>
                    <div className={style.text}>Sign In</div>
                    <LoginReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        );
    }
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.field}>
                <Field name='email' type='text' span={style.span} placeholder='Email' component={Input} validate={[required]} />
            </div>
            <div className={style.field}>
                <Field name='password' type='password' placeholder='Password' component={Input} validate={[required]} />
            </div>
            <div className={style.formError}>
                {props.error}
            </div>
            <label>Remember me:
                <Field className={style.rememberMe} name='rememberMe' type='checkbox' component={'input'} />
            </label>
            <button className={style.button}>Sign In</button>
        </form>
    );
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default connect(null, { login: login })(Login);