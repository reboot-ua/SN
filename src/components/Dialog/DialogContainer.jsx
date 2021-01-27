import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ( { dialogsPage: state.dialogsPage } );


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




const DialogContainer = compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialog)
export default DialogContainer;

