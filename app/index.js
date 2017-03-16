import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Title from './views/Title';
import TaskContainer from './views/TaskContainer';
import Spinner from 'react-native-loading-spinner-overlay';
import AppStore from "./stores/AppStore";

export default class Main extends Component {

  constructor() {
      super();

      this.getAppStatus = this.getAppStatus.bind(this);

      this.state = {
          visible: AppStore.getAppStatus(),
      };
  }

  componentWillMount() {
      AppStore.on("change", this.getAppStatus);
  }

  componentWillUnmount() {
      AppStore.removeListener("change", this.getAppStatus);
  }

  getAppStatus() {
      this.setState({
          visible: AppStore.getAppStatus(),
      });
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.visible}/>
        <Title/>
        <TaskContainer/>
      </View>
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
