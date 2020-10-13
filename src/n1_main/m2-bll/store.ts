import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import mainReducer, {MainAC} from "./main-reducer";
import loginReducer, {loginAC} from "./login-reducer";
import {registrationAC} from "./registration-reducer";
import {changePasswordAC} from "./changePassword-reducer";

const rootReducer = combineReducers({
    main: mainReducer,
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ActionTypes = |
    ReturnType<typeof MainAC> |
    ReturnType<typeof loginAC> |
    ReturnType<typeof registrationAC> |
    ReturnType<typeof changePasswordAC>

// @ts-ignore
window.store = store