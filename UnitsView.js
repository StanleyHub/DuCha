import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Platform,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var _ = require('underscore');

var {Units, Projects} = require('./mock/data');
var UnitsView = React.createClass({

  _renderListItem: function() {
    var projects = [];
    switch (this.props.type2) {
      case 'gzbg':
        projects = Projects.slice(2,3);
        break;
      case 'zdxm':
        projects = Projects.slice(1,2);
        break;
      case 'gkcn':
        projects = Projects.slice(0,1);
        break;
      default:
        projects = Projects;
    }
    return _.map(Units, function(unit, index) {
      return (
        <View key={index}>
          <TouchableOpacity onPress={() => Actions.projectList({title: unit.name, projects: projects})}>
            <View style={[styles.row, styles.listItem]}>
              <Text style={styles.unitName}>{unit.name}</Text>
              <Text style={styles.count}>{unit.count}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
        </View>
      );
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TouchableOpacity>
            <View style={[styles.row, styles.searchInput]}>
              <Icon style={{color: '#DFDFDF'}} name={'ios-search'} size={20} />
              <Text style={{color: '#DFDFDF', fontSize: 15, marginLeft: 8,}}>输入单位名称进行搜索</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.listView}>
          {this._renderListItem()}
        </ScrollView>
      </View>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  },
  searchBox: {
    padding: 10,
    backgroundColor: '#DFDFDF',
  },
  row: {
    flexDirection: 'row'
  },
  searchInput: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  listView: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 8,
    paddingRight: 8,
  },
  listItem: {
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  unitName: {
    fontSize: 18,
  },
  count: {
    color: '#999999',
    fontSize: 15,
  }
});

module.exports = UnitsView;
