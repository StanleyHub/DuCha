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
        <Text style={{marginTop: 10, marginLeft: 15, marginBottom: 5, color: 'grey'}}>督办事项</Text>
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={{flex: 1, }}>
              <View style={styles.row}>
                <Text style={{fontSize: 17,}}>上报下一季度的计划</Text>
                <Text style={{fontSize: 14,
                    backgroundColor: '#eea14b',
                    borderRadius: 5,
                    color: 'white',
                    marginLeft: 5,
                  padding: 3,}}>处理中</Text>
              </View>
              <Text style={{marginLeft: 5, padding: 3, fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年6月12日</Text>
            </View>
            <View style={{width: 30,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: '#D03F4A'}} size={30}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.row}>
            <View style={{flex: 1, }}>
              <View style={styles.row}>
                <Text style={{fontSize: 17,}}>总结上一季度的通报</Text>
                <Text style={{fontSize: 14,
                    backgroundColor: '#ea6449',
                    borderRadius: 5,
                    color: 'white',
                    marginLeft: 5,
                  padding: 3,}}>延期</Text>
              </View>
              <Text style={{fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年5月12日</Text>
            </View>
            <View style={{width: 30,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: '#D03F4A'}} size={30}/>
              </TouchableOpacity>
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
  section: {
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 3,
    backgroundColor: 'white'
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
