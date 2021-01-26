import React from 'react'
import styles from "./users.module.css";
import userPhoto from '../../image/user-male.png'
import {NavLink} from 'react-router-dom';
import * as axios from "axios";
import {userAPI} from "../../api/api";
import {follows} from "../../redux/userReducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCounts / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}> {p} </span>
            })}

        </div>
        {
            props.userData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                               className={styles.userPhoto}/> </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id);
                                      }}>
                                UnFollow </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follows(u.id);
                                      }}>
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                    <div>
                        {"u.location.country"}
                    </div>
                        <div>
                            {"u.location.city"}
                        </div>
                </span>
                </span>
            </div>)
        }
    </div>
};
export default Users