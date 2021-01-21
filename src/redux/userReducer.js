const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    userData: [
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
    ],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userData: state.userData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                userData: state.userData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, userData: [...state.userData, ...action.userData]}
        }
        default:
            return state;
    }
};
export const followAC = (userID) => ({type: FOLLOW, userID});
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default userReducer;
