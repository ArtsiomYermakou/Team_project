import {ActionTypes} from "./store";
import {authAPI, ChangePasswordType} from "../m3-dal/api";
import {Dispatch} from "redux";
import {setStatusProgressAC} from "./login-reducer";


const InitialState = {
    password: "",
    setPassword: false
}

const changePasswordReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "CHANGE-PASSWORD": {
            return {...state, password: action.value}
        }
        case "SET-PASSWORD": {
            return {...state, setPassword: action.isSet}
        }
        default: {
            return state
        }
    }
}

//AC
export const changePasswordAC = (value: string) => (
    {type: "CHANGE-PASSWORD", value} as const
)
export const setPasswordAC = (isSet: boolean) => (
    {type: "SET-PASSWORD", isSet} as const
)

//TC
export const changePasswordTC = (data: ChangePasswordType) => (dispatch: Dispatch) => {
    dispatch(setStatusProgressAC("loading"));
    authAPI.changePassword(data)
        .then(res => {
            console.log(res.data)
            // dispatch(changePasswordAC(res.data.info))
            dispatch(setPasswordAC(true))
            dispatch(setStatusProgressAC("succeeded"))
        })
        .catch(error => {
                dispatch(setStatusProgressAC("failed"))
                console.log(error)
            }
        )
}

//TYPES
export type InitialStateType = typeof InitialState;


export default changePasswordReducer;