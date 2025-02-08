import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to='/profile'
          className={(activeLink) => (activeLink.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to='/messages'
          className={(activeLink) => (activeLink.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/news'
          className={(activeLink) => (activeLink.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/music'
          className={(activLink) => (activLink.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/settings'
          className={(activLink) => (activLink.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/frends'
          className={(activLink) => (activLink.isActive ? s.active : s.item)}
        >
          Frends
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
