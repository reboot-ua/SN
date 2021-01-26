import React from 'react'
import classes from './Dialog.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";

const Dialog = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
    let messageElements = state.messageData.map(m => <Messages message={m.message} key = {m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onMessageClick = () => {
        props.sendMessage()
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to='/login' />;

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