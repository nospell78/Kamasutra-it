import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatars';

const DialogsItems = (props) => {
  let path = '/messages/' + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>
        <Avatar />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogsItems;
