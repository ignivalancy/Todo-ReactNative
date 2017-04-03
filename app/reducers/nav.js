import { NavigationActions } from 'react-navigation'
import { AppNavigator } from "../navigator"
import { LOGGED_IN } from "../constants/actions"

const initialNavState = {
    index: 0,
    routes: [{ key: 'Login', routeName: 'Login' }]
}

export default function nav(state = initialNavState, action) {
	
    // console.log('app reducer', state, action);
    // console.log('AppNavigator nav ', AppNavigator.router.getStateForAction(action, state))
    // const newState = AppNavigator.router.getStateForAction(action, state);

    switch (action.type) {
        case LOGGED_IN:
            return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Home' }), state)
        default:
            return AppNavigator.router.getStateForAction(action, state)
    }

}
