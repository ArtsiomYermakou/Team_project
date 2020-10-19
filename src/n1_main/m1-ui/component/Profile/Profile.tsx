import React from "react";
import style from "./MainBlock.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";


export const Profile = () => {

    const {name, avatar} = useSelector<AppRootStateType, any>(state => state.profile)

    return (
        <div className={style.mainBlock}>
            <div className="container">
                <h1 className={style.title}>Main page</h1>
                <h3>{name}</h3>
            </div>
        </div>
    )
}