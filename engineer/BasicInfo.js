import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  ProgressViewIOS,
  ProgressBarAndroid,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var _ = require('underscore');
var Platform = require('Platform');

var BasicInfo = React.createClass({

  _loadProgressBar: function() {
    if(Platform.OS === 'ios') {
      return (
        <ProgressViewIOS style={styles.progressView}
          progress={0.43}
          progressTintColor="#EED34B"/>
      );
    } else {
      return (
        <ProgressBarAndroid style={styles.progressView}
          progress={0.43}
          styleAttr="Horizontal"
          indeterminate={false}
          color="#EED34B"/>
      );
    }
  },

  render(){
    var avatarUri = {uri: 'avatar2'};
    if(Platform.OS == 'ios') {
      avatarUri = require('../images/avatar2.jpg');
    }
    return (
      <ScrollView style={styles.container}>
        <View style={{
            backgroundColor: '#ea6449',
            height: 50,
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 18,marginLeft: 8, color: 'white', fontWeight: '400'}}>示范小城镇</Text>
            <Text style={{fontSize: 15, color: 'white', fontWeight: '400', marginRight: 8,}}>进度缓慢</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            {this._loadProgressBar()}
            <Text style={{color: '#ea6449', fontSize: 20,}}>23%</Text>
            <TouchableOpacity style={styles.button} onPress={() => Actions.duban()}>
              <Text style={styles.buttonText}>督 办</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.info, {marginTop: 10}]}>
            <View style={styles.label}>
              <Text>督办类型</Text>
            </View>
            <View style={styles.input}>
              <Text>重点工程</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>主要内容</Text>
            </View>
            <View style={styles.input}>
              <Text>新建示范小城镇100个</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>计划数</Text>
            </View>
            <View style={styles.input}>
              <Text>100</Text>
            </View>
          </View>

          <View style={styles.info}>
            <View style={styles.label}>
              <Text>完成数</Text>
            </View>
            <View style={styles.input}>
              <Text>23</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>达产项目</Text>
            </View>
            <View style={styles.input}>
              <Text>10</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>总投资</Text>
            </View>
            <View style={styles.input}>
              <Text>0.5 亿元</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>牵头单位</Text>
            </View>
            <View style={styles.input}>
              <Text>建设局</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>联系领导</Text>
            </View>
            <View style={styles.input}>
              <Text>宋德勋</Text>
            </View>
          </View>
        </View>
        <Text style={{marginTop: 10, marginLeft: 15, marginBottom: 5, color: 'grey'}}>项目负责人</Text>
        <View style={[styles.section]}>
          <View style={styles.row}>
            <View>
              <Image style={{width: 60, height: 60, borderRadius: 30,}} source={avatarUri}/>
            </View>
            <View style={{flex: 1, marginLeft: 8, marginTop:5}}>
              <Text style={{fontSize: 18,}}>宋德勋</Text>
              <Text style={{fontSize: 14, marginTop: 8, color: '#999999'}}>市建设局</Text>
            </View>
            <View style={{width: 30,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <TouchableOpacity onPress={() => Actions.chat()}>
                <Icon name={'ios-chatbubbles'} style={{color: '#87c754'}} size={30}/>
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

module.exports = BasicInfo;
