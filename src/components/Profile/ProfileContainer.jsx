import React from 'react';
import './Profile.module.css';
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let usersId = this.props.match.params.usersId;
        if (!usersId) {
            usersId = 2
        }
        userAPI.getProfile(usersId, this.props.setUserProfile).then(data => {
            this.props.setUserProfile(data);
        })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);