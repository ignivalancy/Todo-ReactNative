
import { RELOAD_TODOS, RECEIVE_TODOS } from "../constants/actions";

const initialState = {
    isLoading: false
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case RELOAD_TODOS:
            return {...state, isLoading: true }

        case RECEIVE_TODOS:
            return {...state, isLoading: false }
            
        default:
            return state
    }
}
