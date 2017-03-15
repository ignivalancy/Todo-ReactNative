import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
import TodoStore from "./stores/TodoStore";
import * as TodoActions from "./actions/TodoActions";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Main extends Component {

  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    // this.reloadTodos = this.reloadTodos.bind(this);
    // this.createTodo = this.createTodo.bind(this);
    // this.toggleTodo = this.toggleTodo.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  markComplete() {
    TodoActions.markAllCompleted();
  }

  createTodo() {
    AlertIOS.prompt(
      'Add new Task',
      'Save your next task in the list',
      text => TodoActions.createTodo(text)
    );
  }

  toggleTodo(id) {
    TodoActions.toggleTodo(id);
  }

  render() {

    const { todos } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Flux App
          </Text>
          <TouchableOpacity onPress={this.reloadTodos}>
            <Icon name="reload" size={25} color="#7d92da" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.markComplete}>
            <Icon name="notification-clear-all" size={25} color="#7d92da" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.createTodo}>
            <Icon name="plus" size={25} color="#7d92da" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {todos.map(this.renderItemComponent.bind(this))}
        </ScrollView>
      </View>
    );
  }

  renderItemComponent( { id, text, complete } ){
    const checkbox = complete ? 'checkbox-multiple-marked-circle-outline' : 'checkbox-multiple-blank-circle-outline'; 
    return (
      <View style={styles.taskBox} key={id}>
        <Text style={styles.taskText}>
          {text}
        </Text>
        <TouchableOpacity onPress={this.toggleTodo.bind(this, id)}>
          <Icon name={checkbox} size={20} color="#cc0000" />
        </TouchableOpacity>
      </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    backgroundColor: '#F5FCFF'
  },
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
    textAlign: 'left'
  },
  taskBox: {
    flex: 1,
    flexDirection: 'row',
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