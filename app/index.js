import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Root from './root'

const store = configureStore();

const Main = () => {

  return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
    
}

export default Main;
