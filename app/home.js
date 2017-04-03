import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Footer from './views/Footer'
import TaskContainer from './views/TaskContainer'
import Spinner from 'react-native-loading-spinner-overlay'

const HomeScreen = () => {

  return (
      <View style={styles.container}>
        <TaskContainer/>
        <Footer/>
      </View>
  )

}

// HomeScreen.navigationOptions = {
//     title: 'Welcome',
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export default HomeScreen
