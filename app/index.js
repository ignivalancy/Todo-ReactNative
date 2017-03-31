import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation';
import configureStore from './configureStore'
import Home from './home'

const store = configureStore();

const Navigator = StackNavigator({
  Home: { screen: Home },
});

const Main = () => {

  return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
    
}

export default Main;
