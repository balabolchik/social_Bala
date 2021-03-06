import { NavLink } from "react-router-dom";
import style from "./DialogListItem.module.css";

const DialogsListItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={style.active} className={style.dialogsListItem}>
            <img src={props.img} alt="#" />
            <p className={style.surname}>{props.surname}</p>
            <p className={style.name}>{props.name}</p>
        </NavLink>
    )
}

export default (DialogsListItem);