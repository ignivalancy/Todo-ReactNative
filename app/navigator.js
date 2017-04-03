import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux'
import Login from './login'
import Home from './home'

const AppNavigator = StackNavigator({
  Home: { screen: Home },
	Login: { screen: Login }
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
