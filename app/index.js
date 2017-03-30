import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation';
import configureStore from './configureStore'
import Home from './home'

const store = configureStore();

const SimpleApp = StackNavigator({
  Home: { screen: Home },
});

const Main = () => {

  return (
      <Provider store={store}>
        <SimpleApp/>
      </Provider>
    )
    
}

export default Main;
