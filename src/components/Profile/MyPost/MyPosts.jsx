import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
       <Post massage="Hi, what's your name?" likeCount="5"/>
       <Post massage="Hi, my name is Nikita" likeCount="17"/>
      </div> 
    </div>
    )
}

export default MyPosts;