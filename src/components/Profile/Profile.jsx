import React from 'react';
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/reduxStore";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
    </div>
};

export default Profile