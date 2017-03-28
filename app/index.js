import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Layout from './layout'

const store = configureStore();

const Main = () => {

  return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    )
    
}

export default Main;
