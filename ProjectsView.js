import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var ProjectsView = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TouchableOpacity>
            <View style={[styles.row, styles.searchInput]}>
              <Icon style={{color: '#DFDFDF'}} name={'ios-search'} size={20} />
              <Text style={{color: '#DFDFDF', fontSize: 15, marginLeft: 8,}}>输入项目名称进行搜索</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fenkou}>
          
        </View>
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
  }
});

module.exports = ProjectsView;
