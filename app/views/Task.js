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
        <View style={styles.actionButtonBox}>
          <Button onClick={this.toggleTodo} icon={checkbox} iconSize={21} iconColor="#003366"/>
          <Button icon={'pen'} iconSize={21} iconColor="#343434"/>
          <Button onClick={this.removeTodo} icon='delete-forever' iconSize={20} iconColor="#3a1f1f"/>
        </View>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#242424'
  },
  taskText: {
    flex: 1,
    backgroundColor: 'white',
    color: '#242424',
    textAlign: 'left',
    paddingVertical: 5,
    paddingLeft: 3,
    marginLeft: 2,
    fontSize: 16
  },
  actionButtonBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
    paddingTop: 2
  },
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Task)
