import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={props.imgUrl} alt='Здесь должны быть картинка' />
      </div>
      <div className={s.descriptionBlock}>{props.text}</div>
    </div>
  );
};

export default ProfileInfo;
