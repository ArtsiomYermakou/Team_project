import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import profileReducer, {setProfileDataAC} from "./profile-reducer";
import loginReducer, {loginAC, setStatusProgressAC} from "./login-reducer";
import registrationReducer, {requestStatus, setErrorRegistration, setIsLoggedIn} from "./registration-reducer";
import changePasswordReducer, {changePasswordAC} from "./changePassword-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    registration: registrationReducer,
    changePassword: changePasswordReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ActionTypes = |
    ReturnType<typeof setProfileDataAC> |
    ReturnType<typeof loginAC> |
    ReturnType<typeof setIsLoggedIn> |
    ReturnType<typeof setErrorRegistration> |
    ReturnType<typeof requestStatus> |
    ReturnType<typeof changePasswordAC> |
    ReturnType<typeof setStatusProgressAC>

// @ts-ignore
window.store = store