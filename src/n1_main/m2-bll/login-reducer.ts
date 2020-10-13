import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const loginReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "loginReducer": {

        }
        default: {
            return state
        }
    }
}
export const loginAC = () => (
    {type: "loginReducer"} as const
)
export default loginReducer;