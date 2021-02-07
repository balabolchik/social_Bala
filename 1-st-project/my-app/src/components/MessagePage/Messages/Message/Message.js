import style from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={style.message}>
            <pre>{props.userMessage}</pre>
        </div>
    )
}

export default (Message);