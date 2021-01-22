import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sitebar/Sidebar";

const Navbar = () => {
    return (<div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog' activeClassName={classes.active}>Message</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/setting" activeClassName={classes.active}>Setting</NavLink>
                </div>

            </nav>
            <div>
                <Sidebar/>
            </div>
        </div>

    )
};

export default Navbar