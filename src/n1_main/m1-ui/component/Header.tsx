import React from "react";
import {NavLink} from "react-router-dom";
import style from "../component/Nav.module.css"


const Header = () => {
    return <nav className={style.nav}>
        <NavLink exact activeClassName={style.linkIsActive} className={style.link} to="/">Main</NavLink>
        <NavLink activeClassName={style.linkIsActive} className={style.link} to="/Second">Second</NavLink>
    </nav>
}

export default Header;