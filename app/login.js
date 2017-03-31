import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from "./actions/LoginActions";

const LoginScreen = ({ navigation: { navigate }, login }) => {
console.log(login)
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}} onPress={login}>
          Login
        </Text>
      </View>
  )

}

LoginScreen.navigationOptions = {
    title: 'Todo App'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(LoginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(LoginScreen)
