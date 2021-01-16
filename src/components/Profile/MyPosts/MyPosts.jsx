import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {
    let postElement =
        props.postData.map(p => <MyPost message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.onAddPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostChange(text);
    };

    return <div>
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
        <div className={classes.posts}>
            {postElement}
        </div>
    </div>
};

export default MyPosts