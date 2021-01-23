import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/userReducer";

let mapStateToProps = (state) => {
    return {
        userData: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCounts: state.usersPage.totalUsersCounts,
        currentPage: state.usersPage.currentPage
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
        setUsers: (userData) => {
            dispatch(setUsersAC(userData))
        },
        setCurrentPage:(pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
};

export default  connect(mapStateToProps, mapDispatchToProps)(Users);