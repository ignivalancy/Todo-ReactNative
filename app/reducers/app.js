
import { TOGGEL_LOADER } from "../constants/actions";

const initialState = {
    isLoading: false
}

export default function app(state = initialState, action) {
	// console.log('app reducer', state, action);
    switch (action.type) {
        case TOGGEL_LOADER:
            return {...state, isLoading: !state.isLoading }
            
        default:
            return state
    }
}
