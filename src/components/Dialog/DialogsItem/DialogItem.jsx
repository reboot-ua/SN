import React from 'react'
import classes from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return <div className={classes.dialogs}>
        <div>
            <img src={props.img} alt=""/>
        </div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;