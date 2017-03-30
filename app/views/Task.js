import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AlertIOS
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from "../actions/TodoActions";
import Button from '../components/Button';

class Task extends Component {

  toggleTodo = () => {

      const { toggleTodo, id } = this.props;

      toggleTodo(id);
  }

  removeTodo = () => {

      const { removeTodo, id } = this.props;

      removeTodo(id);
  }

  handleSave = text => {

    if (text.length !== 0) {
      const { editTodo, id } = this.props;
      editTodo(id, text);
    }

  }

  editTodo = () => {

     const { text } = this.props

      AlertIOS.prompt(
          'Edit new Task',
          'Edit your next task in the list',
          [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Save', onPress:this.handleSave},
          ],
          'plain-text',
          text
      );
      
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
          <Button onClick={this.toggleTodo} icon={checkbox} iconSize={21} iconColor="#009d4f"/>
          <Button onClick={this.editTodo} icon={'pen'} iconSize={21} iconColor="#31698a"/>
          <Button onClick={this.removeTodo} icon='delete-forever' iconSize={20} iconColor="#a8353a"/>
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
    paddingLeft: 5,
    marginLeft: 7,
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
    ...bindActionCreators(TodoActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Task)
