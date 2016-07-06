import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var Chat = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render() {
    var avatar = {uri: 'avatar'};
    if(Platform.OS == 'ios') {
      avatar = require('./images/avatar.jpg');
    }
    var avatar2 = {uri: 'avatar2'};
    if(Platform.OS == 'ios') {
      avatar2 = require('./images/avatar2.jpg');
    }
    return (
      <View style={styles.container}>
        <ScrollView style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10}}>
          <View style={styles.row}>
            <Image style={{width: 50, height: 50, borderRadius: 25,}} source={avatar}/>
            <View style={{flex: 1, marginLeft: 8,
                marginTop:8, backgroundColor: 'white',
                justifyContent: 'center', paddingLeft: 8, borderRadius: 8}}>
              <Text style={{fontSize: 18,}}>宋局长，在吗？</Text>
            </View>
          </View>
          <View style={[styles.row, {marginTop: 20}]}>
            <View style={{flex: 1, marginLeft: 8,
                marginTop:8, backgroundColor: '#87c754',
                justifyContent: 'center', paddingLeft: 8, borderRadius: 8}}>
              <Text style={{fontSize: 18,}}>在，市长有什么指示？</Text>
            </View>
            <Image style={{width: 50, height: 50, borderRadius: 25, marginLeft: 10,}} source={avatar2}/>
          </View>
          <View style={[styles.row, {marginTop: 20}]}>
            <Image style={{width: 50, height: 50, borderRadius: 25,}} source={avatar}/>
            <View style={{flex: 1, marginLeft: 8,
                marginTop:8, backgroundColor: 'white',
                justifyContent: 'center', paddingLeft: 8, borderRadius: 8}}>
              <Text style={{fontSize: 18,}}>督办事项已过期，尽快处理</Text>
            </View>
          </View>
          <View style={[styles.row, {marginTop: 20}]}>
            <View style={{flex: 1, marginLeft: 8,
                marginTop:8, backgroundColor: '#87c754',
                justifyContent: 'center', paddingLeft: 8, borderRadius: 8}}>
              <Text style={{fontSize: 18,}}>马上加紧处理</Text>
            </View>
            <Image style={{width: 50, height: 50, borderRadius: 25, marginLeft: 10,}} source={avatar2}/>
          </View>
        </ScrollView>
        <View style={{
            padding: 10,
            backgroundColor: '#DFDFDF',
            height: 50,
          }}>
          <View style={[styles.row, {justifyContent:'center'}]}>
            <Icon name={'ios-mic'} style={{color: 'grey'}} size={30}/>
            <Text style={{color: '#DFDFDF', height: 30,
              marginLeft: 8, flex: 1, backgroundColor: 'white'}}>
            </Text>
            <Icon name={'ios-happy-outline'} style={{color: 'grey', marginLeft: 5}} size={30}/>
            <Icon name={'ios-add-circle-outline'} style={{color: 'grey',marginLeft: 5}} size={30}/>
          </View>
        </View>
      </View>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
  },
  row: {
    flexDirection: 'row',
  },
});

module.exports = Chat;
