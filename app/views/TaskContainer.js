import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import TodoStore from "../stores/TodoStore";
import Task from './Task';

export default class TaskContainer extends Component {

  constructor() {
      super();

      this.getTodos = this.getTodos.bind(this);

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

  render() {

    const { todos } = this.state;
    
    return (
      <ScrollView>
        {todos.length === 0 && <Text style={styles.noData}>No Data</Text>}
      	{todos.map((data) => <Task key={data.id} {...data}/>)}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  noData: {
    flex: 1,
    marginTop: 50,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  }
});
