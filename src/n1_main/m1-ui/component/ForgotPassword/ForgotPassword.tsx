import React from "react";
import InputMaterial from "../../common/Input";
import style from "../ForgotPassword/ForgotPassword.module.css"

const ForgotPassword = () => {
    return <div>
        <h1 className={style.title}>Forgot Password</h1>
        <InputMaterial placeholder={"password"} label={"password"} />
    </div>
}

export default ForgotPassword;