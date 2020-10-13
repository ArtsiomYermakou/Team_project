import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const registrationReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "registration": {

        }
        default: {
            return state
        }
    }
}
export const registrationAC = () => (
    {type: "registration"} as const
)
export default registrationReducer;