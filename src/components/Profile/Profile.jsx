import React from 'react';
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  <div className='content'>
        <div>
            <img
                src="https://media.macphun.com/img/uploads/customer/how-to/579/15349456005b7d69405aabf4.32904503.jpg?q=85&w=1340"
                alt=""/>
        </div>
        <div>
            ava+discription
        </div>
        <MyPosts />
    </div>
};

export default Profile