import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AlertIOS
} from 'react-native';
import * as TodoActions from "../actions/TodoActions";
import Button from '../components/Button';

export default class Title extends Component {

  reloadTodos() {
      TodoActions.reloadTodos();
  }

  markAllCompleted() {
      TodoActions.markAllCompleted();
  }

  createTodo() {
      AlertIOS.prompt(
          'Add new Task',
          'Save your next task in the list',
          text => TodoActions.createTodo(text)
      );
  }

  render() {

    return (
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Flux App
        </Text>
        <Button onClick={this.reloadTodos} icon="reload" iconSize={25} iconColor="#7d92da"/>
        <Button onClick={this.markAllCompleted} icon="notification-clear-all" iconSize={25} iconColor="#7d92da"/>
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
