import {ActionTypes} from "./store";
import {ResponseLoginType} from "../m3-dal/api";
type InitialStateType = typeof InitialState;

const InitialState = {
    _id: "",
    email: "",
    name: "",
    avatar: "",
    isAdmin: false,
    rememberMe: null
}

const profileReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-PROFILE-DATA": {
            return {...state, ...action.userData}
        }
        default: {
            return state
        }
    }
}
export const setProfileDataAC = (userData: ResponseLoginType) => (
    {type: "SET-PROFILE-DATA", userData} as const
)


export default profileReducer;