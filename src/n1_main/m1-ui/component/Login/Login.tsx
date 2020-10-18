import React from "react";
import style from "../Login/Login.module.css";
import InputMaterial from "../../common/Input";
import ButtonMaterial from "../../common/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1 className={style.title}>Login</h1>
            <InputMaterial placeholder={"Login"} label={"Login"} /><br/>
            <InputMaterial placeholder={"Password"} label={"Password"} /><br />
            <ButtonMaterial nameButton={"Send"}/>
            <div><NavLink to={"/forgotPassword"}>Forgot Password</NavLink></div>
        </div>
    )
}


//Artem TEST 2.0

export default Login;
// andrii test 4.0