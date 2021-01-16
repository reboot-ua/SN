import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.profilePage.postData}
                 newPost={props.profilePage.newPost}
                 dispatch={props.dispatch}/>
    </div>
};

export default Profile