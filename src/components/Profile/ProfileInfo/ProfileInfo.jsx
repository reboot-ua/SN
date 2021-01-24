import React from 'react';
import classes from'./ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return  <div>
        <div>
            <img
                src="https://media.macphun.com/img/uploads/customer/how-to/579/15349456005b7d69405aabf4.32904503.jpg?q=85&w=1340"
                alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            ava+discription
        </div>
    </div>
};

export default ProfileInfo