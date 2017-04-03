import React, { Component } from 'react'
import {
    Button
} from 'react-native'
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux'
import * as LoginActions from "./actions/LoginActions";
import Login from './login'
import Home from './home'

const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
        path: 'login',
        navigationOptions: {
            header: {
                style: { position: "absolute" }
            }
        }
    },
    Home: {
        screen: Home,
        path: 'home',
        navigationOptions: {
            title: 'Todo App',
            header: ({ dispatch }) => ({
                right: (<Button title='Logout'
                                onPress = {() => dispatch(LoginActions.logOut())}/>),
                left: null
            })
    },

}
});


const AppWithNavigationState = ({ dispatch, nav }) => {

  return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })} />
    )

}

export { AppNavigator }

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(
  mapStateToProps
)(AppWithNavigationState)
