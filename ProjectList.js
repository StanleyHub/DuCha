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
        <View key={index} style={[styles.project]}>
          <TouchableOpacity style={{flex: 1}} onPress={() => Actions.projectDetails({title: project.name, project: project})}>
            <View style={styles.row}>
              <View style={styles.projectInfo}>
                <Text style={styles.name}>{project.name}</Text>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                  <View style={styles.row}>
                    <Text style={{marginLeft: 3, color: '#999999', fontSize: 15, marginTop: 3,}}>{project.type}</Text>
                  </View>
                  <View style={styles.row}>
                    <Icon style={{color: '#999999'}} name={'ios-person'} size={22} />
                    <Text style={{marginLeft: 3, color: '#999999', fontSize: 15, marginTop: 3}}>张翔</Text>
                  </View>
                </View>
              </View>
              <View style={{width: 80,
                height: 80,
                backgroundColor:color,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text style={{fontSize: 25, color: 'white'}}>{project.progress}</Text>
                <Text style={{fontSize: 13, color: 'white', marginTop: 8,}}>{project.status}</Text>
              </View>
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
    backgroundColor: 'white',
    height: 80,
    marginBottom: 12,
  },
  name: {
     fontSize: 16,
     marginBottom: 5,
  },
  projectInfo: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
  }
});

module.exports = ProjectList;
