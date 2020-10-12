import {ActionTypes} from "./store";
type InitialStateType = typeof InitialState;

const InitialState = {}

const secondReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case "Second": {

        }
        default: {
            return state
        }
    }
}
export const Second = () => (
    {type: "Second"} as const
)
export default secondReducer;