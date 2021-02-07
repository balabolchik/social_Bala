import style from "./Header.module.css";
import logoImg from "./../../img/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logoImg} alt="#" />
                <h1>Balabolchik</h1>
            </div>
            <div className={style.login}>
                { props.isAuth?props.login:<NavLink to='/login'>Login</NavLink>}
                </div>
        </div>
    );
};

export default Header;
