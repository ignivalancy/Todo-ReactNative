import React, { Component } from 'react'
import {
    ScrollView,
    Text,
    StyleSheet
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from "../actions/TodoActions";
import Task from './Task';

const TaskContainer = ({ todos, actions }) => (
  <ScrollView>
      {todos.length === 0 && <Text style={styles.noData}>No Data</Text>}
      {todos.map((data) => <Task key={data.id} {...data} {...actions} />)}
  </ScrollView>
)

const styles = StyleSheet.create({
  noData: {
    flex: 1,
    marginTop: 50,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  }
});

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer)
