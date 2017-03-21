import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import Task from './Task';

const TaskContainer = ({ todos }) => (
  <ScrollView>
      {todos.length === 0 && <Text style={styles.noData}>No Data</Text>}
      {todos.map((data) => <Task key={data.id} {...data}/>)}
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

export default connect(
  mapStateToProps
)(TaskContainer)
