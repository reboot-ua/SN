const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, message: 't\'s my first post', likeCount: '21'},
        {id: 2, message: 'Hi, how are you?', likeCount: '1'}
    ],
    newPost: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        postData: [...state.postData]
    };
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '5',
                message: state.newPost,
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPost: ''
            };
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPost: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
