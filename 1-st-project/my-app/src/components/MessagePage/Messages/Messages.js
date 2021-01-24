import Message from "./Message/Message";
import style from "./Messages.module.css";
import React from "react";

const Messages = (props) => {
  let pushMessages = props.messagePage.userMessages.map((m) => (
    <Message userMessage={ m.userMessage } key={m.id} />
    ));
    
    let sendMessage = () => {
      props.sendMessage();
    };
    
    let updateNewMessageText = (el) => {
    props.updateNewMessageText(el.target.value);
  };
  return (
    <div className={style.dialog}>
      {pushMessages}
      <textarea
        className={style.newMessage}
        onChange={updateNewMessageText}
        value={props.messagePage.newMessageText}
        placeholder="Your message!"
      />
      <button className={style.sendMessage} onClick={sendMessage}>
        SEND
      </button>
    </div>
  );
};

export default Messages;
