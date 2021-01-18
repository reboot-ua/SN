const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postData: [
        {id: 1, message: 't\'s my first post', likeCount: '21'},
        {id: 2, message: 'Hi, how are you?', likeCount: '1'}
    ],
    newPost: ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        postData: [...state.postData]
    };
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '5',
                message: state.newPost,
                likeCount: 0
            };
            stateCopy.postData.push(newPost);
            stateCopy.newPost = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            stateCopy.newPost = action.text;
            return stateCopy;
        }
        default:
            return state
    }
};
export default profileReducer;
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
};