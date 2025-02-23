import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from './DialogItem/DialogItem';
import Message from './Message/Message';
import message from './Message/Message';
import { addMessage } from '../../Redux/State';

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((d) => (
    <DialogsItems name={d.name} id={d.id} />
  ));
  let messagesElement = props.message.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessagePost(text);
  };
  
  return (
    <div className={s.dialogsContainer}>
      {/* Секция с диалогами слева */}
      <div className={s.dialogsItems}>{dialogsElement}</div>
      {/* Секция с сообщениями справа */}
      <div className={s.messages}>
        <div className={s.inputBlock}>
          <textarea
            onChange={onMessageChange}
            // className={s.textarea}
            value={props.newMessageText}
            ref={newMessageElement}
          />
          <button onClick={addMessage}>Add post</button>
        </div>
        <div>{messagesElement}</div>
      </div>
    </div>
  );
};
export default Dialogs;
