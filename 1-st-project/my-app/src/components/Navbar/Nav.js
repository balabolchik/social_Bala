import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <div>
            <div className={style.nav}>
                <div>
                    <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={style.active}>Message</NavLink>
                </div>
                <div>
                    <NavLink to="/musics" activeClassName={style.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.setting}>
                    <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                </div>
            </div>
        </div>
    );
}

export default (Nav);