import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{

    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;