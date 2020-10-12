import React from "react";
import InputMaterial from "../common/Input";
import ButtonMaterial from "../common/Button";
import style from "../component/MainBlock.module.css"


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <h1 className={style.title}>Main page</h1>
            <InputMaterial placeholder={"11111"} label={"Input 1"}/>
            <InputMaterial placeholder={"22222"} label={"Input 2"}/><br/>
            <ButtonMaterial nameButton={"Button :)"}/>
        </div>
    )
}