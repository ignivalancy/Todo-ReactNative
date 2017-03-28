import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { connect } from 'react-redux'
import Title from './views/Title'
import TaskContainer from './views/TaskContainer'
import Spinner from 'react-native-loading-spinner-overlay'

const Layout = ({ visible }) => {

  return (
    <View style={styles.container}>
      <Spinner visible={visible} />
      <Title/>
      <TaskContainer/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    backgroundColor: '#FFF'
  }
});

const mapStateToProps = state => ({
  visible: state.app.isLoading
})

export default connect(
  mapStateToProps
)(Layout)
