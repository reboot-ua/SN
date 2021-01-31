import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPost: state.profilePage.newPost
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        }
    }
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;