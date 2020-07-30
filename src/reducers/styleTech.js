import { ADD, DELETE } from "../action"
const initialState = { tech: "" };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            console.log(action)
            return {...state, tech: action.payload.text}
        case DELETE:
            console.log(action)
            return {...state, tech: action.payload.text}
        default:
            return state;
    }
}
