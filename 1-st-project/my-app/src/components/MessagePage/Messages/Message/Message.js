import style from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={style.message}>
            <p>{props.userMessage}</p>
        </div>
    )
}

export default (Message);