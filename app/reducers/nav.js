import { NavigationActions } from 'react-navigation'
import { AppNavigator } from "../navigator"
import { LOGGED_IN, LOG_OUT } from "../constants/actions"
import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
        index: 0,
        routes: [{ key: 'Login', routeName: 'Login' }, { key: 'Home', routeName: 'Home' }]
    },
    initialLoginState = {
        index: 1,
        routes: [{ key: 'Login', routeName: 'Login' }, { key: 'Home', routeName: 'Home' }]
    };

export default function nav(state = initialState, action) {

    // console.log('nav reducer', state, action);
    // console.log('AppNavigator nav ', AppNavigator.router.getStateForAction(action, state))
    // const newState = AppNavigator.router.getStateForAction(action, state);

    switch (action.type) {
        case REHYDRATE:
            if (action.payload.user && !action.payload.user.isLogin)
                return AppNavigator.router.getStateForAction(action, initialState)
            else
                return AppNavigator.router.getStateForAction(action, initialLoginState)
        case LOGGED_IN:
            return AppNavigator.router.getStateForAction(action, initialLoginState)
        case LOG_OUT:
            return AppNavigator.router.getStateForAction(action, initialState)
        default:
            return AppNavigator.router.getStateForAction(action, state)
    }

}
