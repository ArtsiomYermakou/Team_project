import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import mainReducer, {Test} from "./mainReducer";
import secondReducer, {Second} from "./secondReducer";

const rootReducer = combineReducers({
    main: mainReducer,
    second: secondReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ActionTypes = ReturnType<typeof Test> | ReturnType<typeof Second>

// @ts-ignore
window.store = store