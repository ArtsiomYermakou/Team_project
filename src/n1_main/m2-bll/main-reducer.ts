import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const mainReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "Main": {

        }
        default: {
            return state
        }
    }
}
export const MainAC = () => (
    {type: "Main"} as const
)
export default mainReducer;