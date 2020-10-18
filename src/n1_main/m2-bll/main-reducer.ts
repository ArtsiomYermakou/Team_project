import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const mainReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "Profile": {

        }
        default: {
            return state
        }
    }
}
export const MainAC = () => (
    {type: "Profile"} as const
)
export default mainReducer;