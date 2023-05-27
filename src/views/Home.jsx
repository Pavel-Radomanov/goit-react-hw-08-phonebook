import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';

const HomeView = () => (
  <div className={s.view__container}>
    <h1 className={s.home__title}>Welcome to the phonebook </h1>
    <p className={s.home__title}>please</p>
    <div className={s.please__container}>
      <NavLink
        className={({ active }) => (active ? s.active : s.home__linc)}
        to="/login"
      >
        Log in
      </NavLink>
      <p className={s.please}>or</p>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.home__linc)}
        to="/register"
      >
        Register
      </NavLink>
    </div>
    <p className={s.pixabay}>
      <div>Image by</div>
      <a href="https://pixabay.com/users/jarmoluk-143740/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=264776">
        Michal Jarmoluk
      </a>
      <div>from </div>
      <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=264776">
        Pixabay
      </a>
    </p>
  </div>
);

export default HomeView;
