import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var _ = require('underscore');
var Platform = require('Platform');

var DubanItem = React.createClass({
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.section, {marginTop: 10}]}>
          <View style={[styles.row, styles.item]}>
            <View style={{flex: 1, padding: 8, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 17,}}>上报下一季度的计划</Text>
              <Text style={{padding: 3, fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年6月12日</Text>
            </View>
            <View style={{width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#EED34B'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: 'white'}} size={30}/>
              </TouchableOpacity>
              <Text style={{fontSize: 14, color: 'white',}}>办理中</Text>
            </View>
          </View>
          <View style={[styles.row, styles.item, {marginTop: 10,}]}>
            <View style={{flex: 1, padding: 8, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 17,}}>总结上一季度的通报</Text>
              <Text style={{fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年5月12日</Text>
            </View>
            <View style={{width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ea6449'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: 'white'}} size={30}/>
              </TouchableOpacity>
              <Text style={{fontSize: 14, color: 'white',}}>延期</Text>
            </View>
          </View>
          <View style={[styles.row, styles.item, {marginTop: 10,}]}>
            <View style={{flex: 1, padding: 8, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 17, flex: 1}}>该项工程未达到政府办公会议要求，现请你局大力推进项目建设</Text>
              <Text style={{fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年5月12日</Text>
            </View>
            <View style={{width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#87c754'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: 'white'}} size={30}/>
              </TouchableOpacity>
              <Text style={{fontSize: 14, color: 'white',}}>已办理</Text>
            </View>
          </View>
        </View>
        <View style={{height: 100}}/>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 3,
    height: 85
  },
  section: {
    marginLeft: 10,
    marginRight: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#87c754',
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  progressView: {
    flex: 1,
    marginTop: 10,
    marginRight: 8,
  },
  button: {
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D03F4A',
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  info: {
    flexDirection: 'row',
    height: 40,
  },
  label: {
    borderWidth: 1,
    flex: 3,
    borderColor: '#999999',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  input: {
    flex: 4,
    borderWidth: 1,
    borderColor: '#999999',
    justifyContent: 'center',
    paddingLeft: 5,
  }
});

module.exports = DubanItem;
