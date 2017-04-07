/*
 * @file: Loader.js
 * @description: Loader for the application.
 * @date: 15.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

class Loader extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <ActivityIndicator size="large"/>
        
      </View>
    );
  }
}

module.exports = Loader;
