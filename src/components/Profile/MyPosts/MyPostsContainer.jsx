import React from 'react';
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostCreator(text));
    };

    return (
        <MyPosts onAddPost={addPost} updatePostChange={onPostChange}
                 postData={state.profilePage.postData}
                 newPost={state.profilePage.newPost}/>
    )
};

export default MyPostsContainer;