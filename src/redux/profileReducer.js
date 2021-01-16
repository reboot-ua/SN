const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState =  {
    postData: [
        {id: 1, message: 't\'s my first post', likeCount: '21'},
        {id: 2, message: 'Hi, how are you?', likeCount: '1'}
    ],
        newPost: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '5',
                message: state.newPost,
                likeCount: 0
            };
            state.postData.push(newPost);
            state.newPost = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPost = action.text;
            return state
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