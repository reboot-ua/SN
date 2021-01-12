import React from 'react';
import classes from './MyPost.module.css';

const MyPost = (props) => {
    return <div className={classes.item}>
        <img src="https://postium.ru/wp-content/uploads/2019/12/foto-na-avu-v-tik-tok-kak-sdelat.jpg" alt=""/>
        {props.message}
        <div>
            <span>Like {props.likeCount}</span>
        </div>
    </div>

};

export default MyPost