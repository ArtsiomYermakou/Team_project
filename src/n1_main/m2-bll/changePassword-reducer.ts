import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const changePasswordReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "changePassword": {

        }
        default: {
            return state
        }
    }
}
export const changePasswordAC = () => (
    {type: "changePassword"} as const
)
export default changePasswordReducer;