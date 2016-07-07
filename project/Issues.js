import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var _ = require('underscore');
var Platform = require('Platform');

var Issues = React.createClass({

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.section, {marginTop: 10}]}>
          <View style={styles.row}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 15,}}>基建工程进入汉江北路段时，发现此段土质松软需要进行特殊处理</Text>
              <Text style={{fontSize: 14, marginTop: 8,color: '#999999'}}>2016年5月21日</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 60,
                height: 35,
                backgroundColor: '#eea14b',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent', color: 'white'}}>处理中</Text>
              </View>
            </View>
          </View>
          <View style={[styles.row, {marginTop: 10,}]}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 15,}}>拆迁户无法搬迁, 项目有所延期</Text>
              <Text style={{fontSize: 14, marginTop: 8,color: '#999999'}}>2016年8月21日</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 60,
                height: 35,
                backgroundColor: '#87c754',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent', color: 'white'}}>已处理</Text>
              </View>
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
    borderRadius: 3,
    backgroundColor: 'white',
    padding: 8,
    height: 80,
  },
  section: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
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

module.exports = Issues;
