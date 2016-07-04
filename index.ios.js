import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var App = require('./App');

class DuCha extends Component {
  render() {
    return (
      <App />
    );
  }
};

AppRegistry.registerComponent('DuCha', () => DuCha);
