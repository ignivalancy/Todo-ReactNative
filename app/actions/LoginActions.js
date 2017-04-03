import { NavigationActions } from 'react-navigation'
import { TOGGEL_LOADER, LOGGED_IN, LOG_OUT } from "../constants/actions"

export const toggelLoader = () => ({ type: TOGGEL_LOADER })
export const loginSuccess = () => ({ type: LOGGED_IN })
export const login = () => {

    return (dispatch) => {

        dispatch(toggelLoader())

        setTimeout(() => {
        	dispatch(toggelLoader())
            dispatch(loginSuccess())
            // dispatch(NavigationActions.navigate({ routeName: 'Home'}))
        }, 1000);

    }
}
export const logOut = () => ({ type: LOG_OUT })
