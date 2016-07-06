import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var MyView = React.createClass({

  getInitialState: function() {
    return {
      name: '徐启方',
      unit_name: '安康市政府'
    };
  },

  logout: function() {
    Actions.login();
  },

  render() {
    var avatarUri = {uri: 'avatar'};
    if(Platform.OS == 'ios') {
      avatarUri = require('./images/avatar.jpg');
    }
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.row}>
            <Image style={styles.avatar} source={avatarUri}/>
            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.unit_name}>{this.state.unit_name}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.section, {marginTop: 15}]}>
          <TouchableOpacity onPress={() => alert('敬请期待')}>
            <View style={{flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              paddingRight: 10,
              paddingLeft: 10,}}>
              <Text style={{color: '#4C4C4C', fontSize: 18, marginTop: 10}}>修改密码</Text>
              <Icon style={{color: '#4C4C4C', marginTop: 5}} name={'ios-arrow-forward'} size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.section, {marginTop: 15}]}>
          <TouchableOpacity onPress={() => alert('敬请期待')}>
            <View style={{flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              paddingRight: 10,
              paddingLeft: 10,}}>
              <Text style={{color: '#4C4C4C', fontSize: 18, marginTop: 10}}>系统设置</Text>
              <Icon style={{color: '#4C4C4C', marginTop: 5}} name={'ios-arrow-forward'} size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.section, {marginTop: 15, backgroundColor: '#D03F4A', borderRadius: 8}]}>
          <TouchableOpacity onPress={this.logout}>
            <View style={{flexDirection: 'row',
              justifyContent: 'center',
              height: 40,
              paddingRight: 10,
              paddingLeft: 10}}>
              <Text style={{color: 'white', fontSize: 18, marginTop: 10}}>退出登录</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    padding: 8,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 8,
  },
  name: {
    fontSize: 18,
  },
  unit_name: {
    color: '#999999',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 75,
    height: 100,
    backgroundColor: 'grey',
  }
});

module.exports = MyView;
