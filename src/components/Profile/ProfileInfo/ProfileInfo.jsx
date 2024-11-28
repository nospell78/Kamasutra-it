import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/get-mpic/4356316/img_id226114034044091517.jpeg/orig' />
      </div>
      <div>
        ava + description
      </div>
        <ProfileInfo/>
      <MyPosts />
    </div>
  )
}

export default Profile;