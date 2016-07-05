import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var NewsView = React.createClass({
  getInitialState: function() {
    return {
    };
  },


  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>电子报</Text>
      </ScrollView>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT
  },
});

module.exports = NewsView;
