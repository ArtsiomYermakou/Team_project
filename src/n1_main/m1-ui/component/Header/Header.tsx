import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"


const Header = () => {
    return <nav className={style.nav}>
        <NavLink exact activeClassName={style.linkIsActive} className={style.link} to="/">Main</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/Login">Login</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/Registration">Registration</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/PasswordChange">Change Password</NavLink>
    </nav>
}

export default Header;