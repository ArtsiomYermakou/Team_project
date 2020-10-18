import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import profileReducer, {setProfileDataAC} from "./profile-reducer";
import loginReducer, {loginAC} from "./login-reducer";
import registrationReducer, {registrationAC} from "./registration-reducer";
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
    ReturnType<typeof registrationAC> |
    ReturnType<typeof changePasswordAC>

// @ts-ignore
window.store = store