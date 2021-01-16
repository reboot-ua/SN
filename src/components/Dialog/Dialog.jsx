import React from 'react'
import classes from './Dialog.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";

const Dialog = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messageElements = props.state.messageData.map(m => <Messages message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;

    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>

                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'/>

                </div>
                <div>
                    <button onClick={onMessageClick}>Send</button>
                </div>
                <div>
                </div>
            </div>

        </div>
    )
};

export default Dialog;