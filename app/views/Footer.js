import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AlertIOS
} from 'react-native';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../components/Button';
import * as TodoActions from "../actions/TodoActions";

class Footer extends Component {

  reloadTodo = () => {

      const { dispatch } = this.props;
      dispatch(TodoActions.reloadTodo());

      // fetch('xyx', () => {
      //   dispatch(TodoActions.receiveTodo())
      // }, 1000);

  }

  completeAll = () => {
      const { dispatch } = this.props;
      dispatch(TodoActions.completeAll());
  }

  handleSave = text => {

    if (text.length !== 0) {
      const { dispatch } = this.props;
      dispatch(TodoActions.createTodo(text));
    }

  }

  createTodo = () => {

      AlertIOS.prompt(
          'Add new Task',
          'Save your next task in the list',
          this.handleSave
      );
      
  }

  render() {

    return (
      <View style={styles.titleBox}>
        <Button onClick={this.reloadTodo} icon="reload" iconSize={25} iconColor="#2d2a26"/>
        <Button onClick={this.completeAll} icon="notification-clear-all" iconSize={25} iconColor="#2d2a26"/>
        <Button onClick={this.createTodo} icon="plus" iconSize={25} iconColor="#2d2a26"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#2d2a26'
  }
});

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(TodoActions, dispatch)
// })

export default connect()(Footer)
