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
            <div className={style.auth}>
                { props.isAuth?<div>{props.login}<button onClick={props.logout} className={style.logout}>Log Out</button></div>:<NavLink className={style.login} to='/login'>Login</NavLink>}
                </div>
        </div>
    );
};

export default Header;


