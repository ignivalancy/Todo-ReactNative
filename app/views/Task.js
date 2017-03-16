import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as TodoActions from "../actions/TodoActions";
import Button from '../components/Button';

export default class Task extends Component {

  toggleTodo(id) {
      TodoActions.toggleTodo(id);
  }

  removeTodo(id) {
      TodoActions.removeTodo(id);
  }

  render() {

    const { id, text, complete } = this.props,
          checkbox = complete ? 'checkbox-multiple-marked-circle-outline' : 'checkbox-multiple-blank-circle-outline';

    return (
      <View style={styles.taskBox} key={id}>
        <Text style={styles.taskText}>
          {text}
        </Text>
        <Button onClick={this.toggleTodo.bind(this, id)} icon={checkbox} iconSize={21} iconColor="#cc0000"/>
        <Button onClick={this.removeTodo.bind(this, id)} icon='delete-forever' iconSize={20} iconColor="#003366"/>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 7,
    borderBottomWidth: 2,
    borderColor: '#47c266'
  },
  taskText: {
    flex: 1,
    color: '#333333',
    textAlign: 'left',
    fontSize: 16,
  }
});
