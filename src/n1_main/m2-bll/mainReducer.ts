import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const mainReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "Test": {

        }
        default: {
            return state
        }
    }
}
export const Test = () => (
    {type: "Test"} as const
)
export default mainReducer;