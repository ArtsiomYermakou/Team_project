import {ActionTypes} from "./store";
import {authAPI, ChangePasswordType} from "../m3-dal/api";
import {Dispatch} from "redux";
import {setStatusProgressAC} from "./login-reducer";


const InitialState = {
    password: ""
}

const changePasswordReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "CHANGE-PASSWORD": {
            return {...state, password: action.value}
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


//TC
export const changePasswordTC = (data: ChangePasswordType) => (dispatch: Dispatch) => {
    dispatch(setStatusProgressAC("loading"));
    authAPI.changePassword(data)
        .then(res => {
            console.log(res.data)
            dispatch(changePasswordAC(res.data.info))
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