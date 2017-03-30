import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { connect } from 'react-redux'
import Footer from './views/Footer'
import TaskContainer from './views/TaskContainer'
import Spinner from 'react-native-loading-spinner-overlay'

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { visible } = this.props;

    return (
      <View style={styles.container}>
        <Spinner visible={visible} />
        <TaskContainer/>
        <Footer/>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 25,
    backgroundColor: '#FFF'
  }
});

const mapStateToProps = state => ({
  visible: state.app.isLoading
})

export default connect(
  mapStateToProps
)(HomeScreen)
