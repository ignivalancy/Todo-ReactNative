
import { LOGGED_IN, LOG_OUT } from "../constants/actions";

const initialState = {
    isLogin: false
}

export default function user(state = initialState, action) {
	// console.log('user reducer', state, action);
    switch (action.type) {
        case LOGGED_IN:
            return {...state, isLogin: true }
        case LOG_OUT:
            return {...state, isLogin: false }
        default:
            return state
    }
}
