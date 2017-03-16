import React, { Component } from 'react';
import {
    ScrollView
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
      	{todos.map((data) => <Task key={data.id} {...data}/>)}
      </ScrollView>
    );
  }

}
