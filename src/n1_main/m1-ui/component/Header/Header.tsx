import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"


const Header = () => {
    return <nav className={style.nav}>
        <NavLink exact activeClassName={style.linkIsActive} className={style.link} to="/">Profile</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/login">Login</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/registration">Registration</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/passwordChange">Change Password</NavLink>
    </nav>
}

export default Header;