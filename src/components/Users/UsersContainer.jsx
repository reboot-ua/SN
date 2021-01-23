import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/userReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => (
                this.props.setUsers(response.data.items)
            ));

    };

    render() {
        return <Users totalUsersCounts={this.props.totalUsersCounts}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      userData={this.props.userData}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

        />
    }
}


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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);