import React from "react";
import style from "../PasswordChange/PasswordChange.module.css";
import {useFormik} from "formik";
import {Button, LinearProgress, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {changePasswordTC} from "../../../m2-bll/changePassword-reducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {RequestStatusType} from "../../../m2-bll/login-reducer";
import {Redirect, useParams} from "react-router-dom";

const PasswordChange = () => {
    const dispatch = useDispatch();
    const progress = useSelector<AppRootStateType, RequestStatusType>(state => state.login.progress)
    const setPassword = useSelector<AppRootStateType, boolean>(state => state.changePassword.setPassword)

    const {token} = useParams();
    console.log(token)

    const formik = useFormik({
        initialValues: {
            password: "",
            resetPasswordToken: token
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 7) {
                errors.password = "Password > 7 symbols"
            }
            if (!values.resetPasswordToken) {
                errors.resetPasswordToken = "Required";
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(changePasswordTC(values))
            console.log(values)
        }
    })

    const buttonDisabled = () => {
        if (progress === "loading" || !formik.values.password || !formik.values.resetPasswordToken) return true
    }

    if (setPassword) {
        return <Redirect to={"/"}/>
    }

    return (
        <>
            {progress === "loading" ? <LinearProgress/> : null}
            <div className="container">
                <h1 className={style.title}>Change password</h1>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        type="password"
                        label="New password"
                        margin="normal"
                        variant={"outlined"}
                        {...formik.getFieldProps("password")}
                    />
                    {formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                    <br/>
                    <Button disabled={buttonDisabled()} type={'submit'} variant={'outlined'}
                            color={'primary'}>Change password</Button>
                </form>
            </div>
        </>
    )
}

type FormikErrorType = {
    password?: string
    resetPasswordToken?: string
}

export default PasswordChange;