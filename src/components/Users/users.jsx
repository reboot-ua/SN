import React from 'react'
import styles from './users.module.css'


let Users = (props) => {

    if (props.userData.length=== 0){

        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/originals/6d/f2/5e/6df25e54303f2d6a77f137d2686125c5.jpg',
                    followed: true,
                    fullName: 'Sergii ',
                    status: 'I am a boos',
                    location: {city: 'Lviv', country: 'UA'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/originals/6d/f2/5e/6df25e54303f2d6a77f137d2686125c5.jpg',
                    followed: false,
                    fullName: 'Mark ',
                    status: 'I am a boy',
                    location: {city: 'NY', country: 'USA'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i.pinimg.com/originals/6d/f2/5e/6df25e54303f2d6a77f137d2686125c5.jpg',
                    followed: false,
                    fullName: 'Ira ',
                    status: 'I am a girl',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    photoUrl: 'https://i.pinimg.com/originals/6d/f2/5e/6df25e54303f2d6a77f137d2686125c5.jpg',
                    followed: true,
                    fullName: 'Kate ',
                    status: 'I am a boos too',
                    location: {city: 'Barcelona', country: 'Spain'}
                },
            ]
        )
    }

    return <div>
        {
            props.userData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
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
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                    <div>
                        {u.location.country}
                    </div>
                        <div>
                            {u.location.city}
                        </div>
                </span>
                </span>
            </div>)
        }
    </div>

};
export default Users;