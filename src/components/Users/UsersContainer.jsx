import React from 'react'
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/userReducer";

let mapStateToProps = (state) => {
    return {
        userData: state.usersPage.userData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follows: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

export default  connect(mapStateToProps, mapDispatchToProps)(Users);