import React, { Component } from 'react'
import {
    View
} from 'react-native'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'

const mapStateToProps = state => ({
  visible: state.app.isLoading
})

export default connect(
  mapStateToProps
)(Spinner)
