import React from 'react';
import s from './Avatars.module.css';

const Avatar = (props) => {
  return (
    <div className={s.item}>
      <img
        src='https://avatars.mds.yandex.net/i?id=05f6cc9fda242a9b00f48f9b67b7de9f_l-5888651-images-thumbs&n=13'
        alt='Avatar'
      />
    </div>
  );
};

export default Avatar;
