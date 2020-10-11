import React from "react";
import InputMaterial from "../common/Input";
import ButtonMaterial from "../common/Button";


export const Main = () => {
    return (
        <div>
            <h1>Main page</h1>
            <InputMaterial placeholder={"11111"}/>
            <InputMaterial placeholder={"22222"}/>
            <ButtonMaterial nameButton={"Button :)"}/>
        </div>
    )
}