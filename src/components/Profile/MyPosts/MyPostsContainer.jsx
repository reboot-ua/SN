import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let postElement =
        props.postData.map(p => <MyPost message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };


    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST', text: text};
        props.dispatch(updateNewPostCreator(text));
    };

    return(
        <MyPosts/>
    )
};

export default MyPostsContainer