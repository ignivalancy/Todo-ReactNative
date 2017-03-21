import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AlertIOS
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../components/Button';
import * as TodoActions from "../actions/TodoActions";

class Title extends Component {

  handleSave = text => {

    if (text.length !== 0) {

      const { createTodo } = this.props.actions;
      createTodo(text)
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

    const { createTodo, completeAll, clearCompleted, reloadTodo } = this.props.actions;

    return (
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Flux App
        </Text>
        <Button onClick={reloadTodo} icon="reload" iconSize={25} iconColor="#7d92da"/>
        <Button onClick={completeAll} icon="notification-clear-all" iconSize={25} iconColor="#7d92da"/>
        <Button onClick={this.createTodo} icon="plus" iconSize={25} iconColor="#7d92da"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  titleBox: {
    flexDirection: 'row',
    padding: 7,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#174844'
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '400'
  }
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Title)
