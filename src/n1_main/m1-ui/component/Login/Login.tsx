import React from "react";
import style from "../Login/Login.module.css";
import {NavLink, Redirect} from "react-router-dom";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {Button, Checkbox, FormControl, FormControlLabel, TextField} from "@material-ui/core";
import {LoginTC} from "../../../m2-bll/login-reducer";

const Login = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 7) {
                errors.password = "Password > 7 symbols"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(LoginTC(values))
        }
    })

    if (isAuth) {
        return <Redirect to={"/"}/>
    }

    return (
        <div>
            <h1 className={style.title}>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <TextField
                        label="Email"
                        margin="normal"
                        variant={"outlined"}
                        {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                    <br/>
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        variant={"outlined"}
                        {...formik.getFieldProps("password")}
                    />
                    {formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                    <br/>
                    <FormControlLabel
                        label={'Remember me'}
                        control={<Checkbox
                            {...formik.getFieldProps("rememberMe")}/>}
                    /><br/>
                    <Button type={'submit'} variant={'outlined'} color={'primary'}>Login</Button>
                </FormControl>
            </form>
            <NavLink to={"/forgotPassword"}>Forgot Password</NavLink>
        </div>
    )
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export default Login;