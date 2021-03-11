import Message from "./Message/Message";
import style from "./Messages.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utilits/validation/Validate";
import { Textarea } from "../../common/formsControl/FormsControl";

const maxLength10 = maxLength(10);

const Messages = (props) => {
  let pushMessages = props.messagePage.userMessages.map((m) => (
    <Message userMessage={m.userMessage} key={m.id} />
  ));

  let sendMessage = (values) => {
    props.sendMessage(values.newMessage);
  };

  return (
    <div className={style.dialog}>
      {pushMessages}
      <AddMessageReduxForm onSubmit={sendMessage}/>
    </div>
  );
};

const MessageForm = (props) => {
  return (
    <form className={style.newMessage} onSubmit={props.handleSubmit}>
      <Field 
        name='newMessage'
        placeholder="Your message!"
        component={Textarea}
        validate={[required, maxLength10]}
      />
      <button className={style.sendMessage}>SEND</button>
    </form>
  );
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(MessageForm)

export default Messages;
