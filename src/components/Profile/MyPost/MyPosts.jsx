import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewTextPost } from '../../../Redux/State';

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST' });
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewTextPost(text);
    let action = { type: 'UPDATE-NEW-TEXT-POST', newText: text };
    props.dispatch(action);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
