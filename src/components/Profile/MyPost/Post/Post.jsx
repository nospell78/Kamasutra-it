import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/i?id=05f6cc9fda242a9b00f48f9b67b7de9f_l-5888651-images-thumbs&n=13' />
      {props.massage}
      {props.likeCount}
      <div>
        <span>{props.likeCount}</span>
      </div>

    </div>
  )
}

export default Post;