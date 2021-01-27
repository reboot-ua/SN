import React from 'react'
import {connect} from "react-redux";
import {
    follows, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/userReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   followingInProgress={this.props.followingInProgress}


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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(
        mapStateToProps, {follows, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
    withAuthRedirect
)(UsersContainer)
