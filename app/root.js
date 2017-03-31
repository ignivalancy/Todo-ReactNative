import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Loader from './loader'
import Login from './login'
import Home from './home'

const Navigator = StackNavigator({
  Home: { screen: Home },
	Login: { screen: Login }
});

const Root = ({ visible }) => {

  return (
      <View style={styles.container}>
      	<Loader/>
        <Navigator/>
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 25,
    backgroundColor: '#FFF'
  }
});

export default Root
