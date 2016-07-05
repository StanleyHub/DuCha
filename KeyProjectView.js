import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  ProgressViewIOS,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var _ = require('underscore');
var Platform = require('Platform');

var KeyProjectView = React.createClass({
  _renderMonthlyInform: function() {
    return _.map(this.props.project.inform, (inform, index) => {
      return (
        <View key={index}>
          <View style={[styles.row, {justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 5,}]}>
            <View style={styles.circle}>
              <Text style={{color: 'white',
                backgroundColor: 'transparent',
                fontSize: 18}}>{inform.month}</Text>
            </View>
            <Text style={{flex: 1,
              marginLeft: 15,
              color: 'grey',
              fontSize: 15,}}>{inform.content}</Text>
          </View>
          <View style={styles.separator}></View>
        </View>
      );
    });
  },

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{marginTop: 10, marginLeft: 10, marginBottom: 5, color: 'grey'}}>重点项目</Text>
        <View style={styles.section}>
          <Text style={{fontSize: 18, marginTop: 5,}}>汉江景观打造项目</Text>
          <View style={styles.row}>
            <ProgressViewIOS style={styles.progressView}
              progress={0.5}
              progressTintColor="#eea14b"/>
            <Text style={{color: '#eea14b', fontSize: 20,}}>50%</Text>
            <TouchableOpacity style={styles.button} onPress={() => Actions.duban()}>
              <Text style={styles.buttonText}>督 办</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>建设规模及主要内容</Text>
            <Text style={styles.input}>约4000平米景观改造</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>建设地点</Text>
            <Text style={styles.input}>汉江沿河</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>建设工期</Text>
            <Text style={styles.input}>2016年-2019年</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>项目总投资</Text>
            <Text style={styles.input}>2亿元</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>2016年建设规模内容</Text>
            <Text style={styles.input}>主体完工</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>2016年年度投资额</Text>
            <Text style={styles.input}>1亿元</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>累计完成投资额</Text>
            <Text style={styles.input}>0.5亿元</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>牵头单位</Text>
            <Text style={styles.input}>建设局</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>联系领导</Text>
            <Text style={styles.input}>宋德勋</Text>
          </View>
        </View>
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按月通报</Text>
        <View style={[styles.section]}>
          {this._renderMonthlyInform()}
        </View>
      </ScrollView>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT
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
    marginBottom: 12,
  },
  label: {
    color: '#999999',
  },
  input: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 5,
  }
});

module.exports = KeyProjectView;
