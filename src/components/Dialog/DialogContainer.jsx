import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import Dialog from "./Dialog";

const DialogContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return <Dialog updateNewMessageBody={onNewMessageChange}
                   sendMessage={onMessageClick}
                   dialogsPage={state}/>
};

export default DialogContainer;