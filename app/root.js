import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Loader from './loader'
import AppNavigator from './navigator'

const Root = ({ visible }) => {

  return (
      <View style={styles.container}>
      	<Loader/>
        <AppNavigator/>
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
