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

var News = [{
  name: '关于进一步规范市委重点督办事项落实情况报送工作的要求',
  date: '2016年6月12日'
}];

var YaoQiu3 = React.createClass({

  _renderListItem: function() {
    var imageUri = {uri: 'dbtb'};
    if(Platform.OS == 'ios') {
      imageUri = require('./images/dbtb.png');
    }
    return _.map(News, function(item, index) {
      return (
        <View key={index}>
          <View style={[styles.listItem]}>
            <Text style={{fontSize: 20,}}>{item.name}</Text>
            <Text style={{color: '#999999', alignSelf: 'flex-end'}}>{item.date}</Text>
          </View>
        </View>
      );
    });
  },

  render() {
    return (
      <View style={styles.container}>
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
  },
  listView: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 55,
    marginTop: 10,
  },
  listItem: {
    height: 80,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: 'grey'
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  name: {
    fontSize: 18,
  },
  unit: {
    color: '#999999',
    marginTop: 5,
  },
  date: {
    color: '#999999'
  }
});

module.exports = YaoQiu3;
