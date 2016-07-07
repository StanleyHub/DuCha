import React from 'react';
import {
  StyleSheet,
} from 'react-native';

var Platform = require('Platform');

var ScrollableTabView = require('react-native-scrollable-tab-view');

var BasicInfo = require('./engineer/BasicInfo');
var DubanItem = require('./gkcn/DubanItem');
var MonthReport = require('./gkcn/MonthReport');
var Issues = require('./engineer/Issues');

var KeyEngineering = React.createClass({
  render() {
    return (
      <ScrollableTabView style={styles.container}
        tabBarUnderlineColor={'#D03F4A'}
        tabBarActiveTextColor={'#D03F4A'}
        tabBarBackgroundColor={'white'}
        tabBarTextStyle={{fontSize: 16, marginTop: 5}}>

        <BasicInfo tabLabel="项目概况"/>
        <DubanItem tabLabel="督办事项"/>
        <MonthReport project={this.props.project} tabLabel="基层汇报"/>
        <Issues tabLabel="存在问题"/>
      </ScrollableTabView>
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

module.exports = KeyEngineering;
