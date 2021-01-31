import React from 'react'
import classes from './Dialog.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";

const Dialog = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
    let messageElements = state.messageData.map(m => <Messages message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>

                <div>
                    {messageElements}
                </div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                <div>
                </div>
            </div>

        </div>
    )
};
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your Message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialog;