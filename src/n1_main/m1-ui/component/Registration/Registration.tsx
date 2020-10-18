import React from "react";
import style from "../Registration/Registration.module.css";
import {useFormik} from "formik";
import {RegistrationDataType} from "../../../m3-dal/api";
import {registrationTC, InitialStateType, setErrorRegistration} from "../../../m2-bll/registration-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {Redirect} from "react-router-dom";
import {Alert} from "@material-ui/lab";
import {LinearProgress, Snackbar} from "@material-ui/core";


const validate = (value: RegistrationDataType) => {
    let error: any = {};
    if (!value.email) {
        error.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        error.email = 'Invalid email address';
    }
    if (!value.password) {
        error.password = 'Enter you password';
    } else if (value.password.length < 7) {
        error.password = 'Password must be 8 characters or more'
    } else if (!value.repeatPassword) {
        error.password = 'Please repeat you password';
    } else if (value.repeatPassword !== value.password) {
        error.password = 'Your passwords are not equal';
    }
    return error;
}

const Registration = () => {
    const dispatch = useDispatch()
    const {isLoggedIn, error, loaderStatus} = useSelector<AppRootStateType, InitialStateType>(state => state.registration)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        validate,
        onSubmit: values => {
            const {email, password} = values
            dispatch(registrationTC({email, password}))
        },
    });
    // SnackBarr Error
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setErrorRegistration(null));
    }
    const isOpen = error !== null;
    // Redirect to Login after successful registration
    if (isLoggedIn) {
        return <Redirect to={"/login"}/>
    }

    return (
        <>
            {loaderStatus === "loading" && <LinearProgress/>}
            <div className="container">
                <h1 className={style.title}>Registration</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            name="email"
                            placeholder="Email"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && formik.touched.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Repeat Password"
                            name="repeatPassword"
                            {...formik.getFieldProps('repeatPassword')}
                        />
                        {formik.errors.password && formik.touched.password
                            ? <div style={{color: 'red'}}>{formik.errors.password}</div>
                            : null}
                    </div>
                    <button type="submit" disabled={loaderStatus === "loading"}>Send</button>
                </form>
                <div>
                    <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
                        <Alert variant="filled" severity="error">
                            {error}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </>
    )
}

export default Registration;