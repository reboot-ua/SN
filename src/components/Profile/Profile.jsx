import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/reduxStore";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={store}/>
    </div>
};

export default Profile