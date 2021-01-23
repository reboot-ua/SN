import React from 'react'
import styles from "./users.module.css";
import userPhoto from '../../image/user-male.png'

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> UnFollow </button>
                            : <button onClick={() => {
                                props.follows(u.id)
                            }}>Follow</button>}
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