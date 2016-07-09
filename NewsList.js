import React from 'react';
import {
  StyleSheet
} from 'react-native';

var Platform = require('Platform');

var ScrollableTabView = require('react-native-scrollable-tab-view');

var NewsView = require('./NewsView');
var NewsView2 = require('./NewsView2');
var {News, News2} = require('./mock/data');
var OverrideTabBar = require('./OverrideTabBar');

var NewsList = React.createClass({
  render() {
    return (
      <ScrollableTabView style={styles.container}
        tabBarUnderlineColor={'white'}
        tabBarActiveTextColor={'white'}
        tabBarTextStyle={{fontSize: 18, marginTop: 5, color: 'white', fontWeight: '500'}}
        renderTabBar={() => <OverrideTabBar/>}>

        <NewsView2 tabLabel="市委通报"/>
        <NewsView tabLabel="市政府通报"/>
      </ScrollableTabView>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT
  }
});

module.exports = NewsList;
