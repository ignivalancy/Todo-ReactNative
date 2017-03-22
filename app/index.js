import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Title from './views/Title'
import TaskContainer from './views/TaskContainer'
import Spinner from 'react-native-loading-spinner-overlay'

const store = configureStore();

export default class Main extends Component {

  constructor() {
      super();

      this.state = {
          visible: false
      };
  }

  render() {
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Spinner visible={this.state.visible}/>
          <Title/>
          <TaskContainer/>
        </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    backgroundColor: '#F5FCFF'
  }
});
