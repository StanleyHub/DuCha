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
var ScrollableTabView = require('react-native-scrollable-tab-view');

var Platform = require('Platform');

var ShiWei = require('./ShiWei');
var ZhengFu = require('./ZhengFu');

var ProjectDashboad = React.createClass({

  _loadChart: function() {
    if(Platform.OS === 'ios') {
      return (
        <Image style={styles.chart} source={require('./images/piechart.png')}/>
      );
    } else {
      return (
        <Image style={styles.chart} source={{uri: 'piechart'}} />
      );
    }
  },

  render() {
    return (
      <ScrollableTabView style={styles.container}
        tabBarUnderlineColor={'#D03F4A'}
        tabBarActiveTextColor={'#D03F4A'}
        tabBarBackgroundColor={'white'}
        tabBarTextStyle={{fontSize: 16, marginTop: 5}}>
        <ShiWei tabLabel="项目概况"/>
        <ZhengFu tabLabel="督办事项"/>
      </ScrollableTabView>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
    backgroundColor: '#E9E9EF'
  },
  searchBox: {
    padding: 10,
    backgroundColor: '#DFDFDF',
    height: 60,
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
  chartBox: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    color: '#797979',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  chart: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  grid: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  gridRow: {
    height: 60,
    marginTop: 10,
  },
  item: {
    flex: 1,
    backgroundColor: '#DF7B51',
    marginRight: 10,
    padding: 8,
    borderRadius: 2,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "400",
  },
  itemSubTitle: {
    color: '#DFDFDF',
    alignSelf: 'flex-end',
    marginTop: 12,
  },
});

module.exports = ProjectDashboad;
