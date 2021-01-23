import React from 'react'
import {connect} from "react-redux";
import {
    follows,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/userReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });

    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCounts={this.props.totalUsersCounts}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   userData={this.props.userData}
                   follows={this.props.follows}
                   unfollow={this.props.unfollow}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCounts: state.usersPage.totalUsersCounts,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(
    mapStateToProps, {follows, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
    )(UsersContainer);