import style from "./DialogList.module.css";
import DialogsListItem from "./DialogListItem/DialogListItem";

const DialogList = (props) => {

    let myDialogsListItem = props.userDialogs.map( el => <DialogsListItem id={el.id} img={el.img} name={el.name} surname={el.surname} />);

    return (
        <div className={style.dialogList}>
            { myDialogsListItem }
        </div>
    )
}

export default (DialogList);