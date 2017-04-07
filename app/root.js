import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Progress from './progress'
import AppNavigator from './navigator'

const Root = ({ visible }) => {

  return (
      <View style={styles.container}>
      	<Progress/>
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
