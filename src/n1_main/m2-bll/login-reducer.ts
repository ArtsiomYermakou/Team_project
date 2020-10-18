import {ActionTypes} from "./store";
import {authAPI, LoginParamsType} from "../m3-dal/api";
import {Dispatch} from "redux";
import {setProfileDataAC} from "./profile-reducer";

const loginReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN": {
            return {...state, isAuth: action.value}
        }
        default: {
            return state;
        }
    }
}

//AC
export const loginAC = (value: boolean) => (
    {type: "login/SET-IS-LOGGED-IN", value} as const
)


//TC
export const LoginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionTypes>) => {
    // SET-STATUS-PRELOADER
    authAPI.login(data)
        .then(res => {
            dispatch(loginAC(true))
            dispatch(setProfileDataAC(res.data))
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + " ,more details in the console")
            console.log("Error", {...e})
        })
}


//TYPES
const InitialState = {
    isAuth: false
}

type InitialStateType = typeof InitialState;

export default loginReducer;