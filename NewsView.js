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

var {News} = require('./mock/data');
var NewsView = React.createClass({

  _renderListItem: function() {
    var imageUri = {uri: 'dbtb'};
    if(Platform.OS == 'ios') {
      imageUri = require('./images/dbtb.png');
    }
    return _.map(News, function(item, index) {
      return (
        <View key={index}>
          <View style={[styles.row, styles.listItem]}>
            <Image style={styles.logo} source={imageUri}/>
            <View style={{flex: 1, marginLeft: 10, justifyContent:'space-between'}}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={[styles.row, {marginBottom: 3, justifyContent:'space-between'}]}>
                  <Text style={styles.unit}>{item.unit}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
          </View>
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
              <Text style={{color: '#DFDFDF', fontSize: 15, marginLeft: 8,}}>输入关键字进行搜索</Text>
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
    backgroundColor: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 55,
  },
  listItem: {
    height: 100,
    padding: 8,
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
    color: '#999999'
  },
  date: {
    color: '#999999'
  }
});

module.exports = NewsView;
