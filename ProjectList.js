import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var _ = require('underscore');
var Platform = require('Platform');

var {Projects} = require('./mock/data');

var ProjectList = React.createClass({

  _renderProject: function() {
    return _.map(Projects, (project, index) => {
      var color = '#87c754';
      if(project.status == '进行中') {
        color = '#eea14b';
      }
      if(project.status == '进度缓慢') {
        color = '#ea6449';
      }
      return (
        <View key={index} style={[styles.project, {borderColor: color}]}>
          <TouchableOpacity onPress={() => Actions.projectDetails()}>
            <View style={styles.row}>
              <Text style={{flex: 1,}}>{project.name}</Text>
              <Text style={{fontSize: 18, color: color, width: 50, textAlign: 'left'}}>{project.progress}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  },

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.projects}>
          {this._renderProject()}
        </View>
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
  row: {
    flexDirection: 'row',
  },
  projects: {
    padding: 10,
  },
  project: {
    padding: 8,
    backgroundColor: 'white',
    height: 60,
    borderBottomWidth: 3,
    marginBottom: 12,
  },
});

module.exports = ProjectList;
