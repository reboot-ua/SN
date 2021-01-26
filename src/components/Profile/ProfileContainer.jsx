import React from 'react';
import './Profile.module.css';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let usersId = this.props.match.params.usersId;
        if (!usersId) {
            usersId = 2
        }
        this.props.getUserProfile(usersId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);