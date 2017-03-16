import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Title from './views/Title';
import TaskContainer from './views/TaskContainer';

const Main = (props) => {
    
  return (
    <View style={styles.container}>
      <Title/>
      <TaskContainer/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    backgroundColor: '#F5FCFF'
  }
});

export default Main;