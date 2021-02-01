import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validation/validators";
import {Textarea} from "../../../Utils/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postElement =
        props.postData.map(p => <MyPost message={p.message} likeCount={p.likeCount}/>);

    let addPost = (values) => {
        props.onAddPost(values.newPost);
    };

    return <div>
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={addPost}/>
        </div>
        <div className={classes.posts}>
            {postElement}
        </div>
    </div>
};
const maxLength10 = maxLengthCreator(10)

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={Textarea} name={'newPost'}/>

            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
const AddNewPostForm = reduxForm({form: 'Profile'})(AddNewPost);

export default MyPosts