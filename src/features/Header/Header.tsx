import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Header.module.css";

function Header() {
  return (
    <div className={st.nav_wrap}>
      <div className={st.nav}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Login
        </NavLink>
        <NavLink
          to="/registration"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Registration
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Profile
        </NavLink>
        <NavLink
            to="/recovery"
            className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Recovery
        </NavLink>
        <NavLink
            to="/new-password"
            className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Change password
        </NavLink>
        <NavLink
            to="/demo"
            className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Demo
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
