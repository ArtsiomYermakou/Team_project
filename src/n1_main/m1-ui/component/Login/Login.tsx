import React from "react";
import style from "../Login/Login.module.css";
import InputMaterial from "../../common/Input";
import ButtonMaterial from "../../common/Button";

const Login = () => {
    return (
        <div>
            <h1 className={style.title}>Login</h1>
            <InputMaterial placeholder={"Login"} label={"Login"} /><br/>
            <InputMaterial placeholder={"Password"} label={"Password"} /><br />
            <ButtonMaterial nameButton={"Send"}/>
        </div>
    )
}

//TEST 1.0
//TEST 2.0

export default Login;
// Andrii test 1.0