import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;

