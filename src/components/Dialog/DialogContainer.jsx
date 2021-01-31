import React from 'react'
import {sendMessageCreator} from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ( { dialogsPage: state.dialogsPage } );


let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};




const DialogContainer = compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialog)
export default DialogContainer;

