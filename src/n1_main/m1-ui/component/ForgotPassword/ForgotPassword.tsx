import React from "react";
import style from "../ForgotPassword/ForgotPassword.module.css"
import {useFormik} from "formik";
import {Button, LinearProgress, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordTC} from "../../../m2-bll/forgotPassword-reducer";
import {AppRootStateType} from "../../../m2-bll/store";
import {RequestStatusType} from "../../../m2-bll/login-reducer";

const ForgotPassword = () => {

    const dispatch = useDispatch();
    const progress = useSelector<AppRootStateType, RequestStatusType>(state => state.login.progress)


    const formik = useFormik({
        initialValues: {
            email: "",
            from: "test-front-admin <artem_ermakov_1999@mail.ru>",
            message: `<div>password recovery link: <a href='http://localhost:3000/#/passwordChange/$token$'>TAP TAP TAP</a></div>`
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(forgotPasswordTC(values))
            formik.resetForm();
        }
    })

    const buttonDisabled = () => {
        if (progress === "loading") return true
    }

    return (
        <>
            {progress === "loading" ? <LinearProgress/> : null}
            <div className="container">
                <h1 className={style.title}>Forgot Password</h1>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        label="Email"
                        margin="normal"
                        variant={"outlined"}
                        {...formik.getFieldProps("email")}/>
                    {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                    <br/>
                    <Button disabled={buttonDisabled()} type={'submit'} variant={'outlined'}
                            color={'primary'}>Forgot</Button>
                </form>
            </div>
        </>
    )
}

//types
type FormikErrorType = {
    email?: string
}

export default ForgotPassword;