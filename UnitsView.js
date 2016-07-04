import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var UnitsView = React.createClass({
  getInitialState: function() {
    return {
    };
  },


  render() {
    return (
      <View style={styles.container}>
        <Text>Units view</Text>
      </View>
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

module.exports = UnitsView;
