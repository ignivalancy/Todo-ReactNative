import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from "../actions/TodoActions";
import Button from '../components/Button';

class Task extends Component {

  toggleTodo = () => {

      const { toggleTodo } = this.props.actions,
            { id } = this.props;

      toggleTodo(id);
  }

  removeTodo = () => {

      const { removeTodo } = this.props.actions,
            { id } = this.props;

      removeTodo(id);
  }

  render() {

    const { id, text, complete } = this.props,
          checkbox = complete ? 'checkbox-multiple-marked-circle-outline' : 'checkbox-multiple-blank-circle-outline';

    return (
      <View style={styles.taskBox} key={id}>
        <Text style={styles.taskText}>
          {text}
        </Text>
        <Button onClick={this.toggleTodo} icon={checkbox} iconSize={21} iconColor="#cc0000"/>
        <Button onClick={this.removeTodo} icon='delete-forever' iconSize={20} iconColor="#003366"/>
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

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Task)
