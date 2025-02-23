import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPost/MyPosts';
import state, { updateNewTextPost } from '../../Redux/State';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo imgUrl={props.imgUrl} text={props.text} />
      <MyPosts
        posts={props.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewTextPost={props.updateNewTextPost}
      />
    </div>
  );
};

export default Profile;
