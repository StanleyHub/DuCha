import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var LoginView = React.createClass({
  getInitialState: function() {
    return {
      phone: '',
      password: ''
    };
  },

  login: function() {
    Actions.projectDashboad();
  },

  render() {

    var imageUri = {uri: 'login_back'};
    if(Platform.OS == 'ios') {
      imageUri = require('./images/login_back.png');
    }
    return (
      <View style={styles.container}>
        <Image source={imageUri} style={styles.backgroundImage}>
          <Text style={styles.title}>安康目标督办管理平台</Text>
          <View style={styles.form}>
            <View style={[styles.row, styles.phone]}>
              <Icon name={'ios-call'} size={25} style={styles.icon}/>
              <TextInput style={styles.input}
                placeholder={'你的手机号码'}
                keyboardType='numeric'
                onChangeText={(value) => this.setState({phone: value})}
                value={this.state.phone}/>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.row}>
              <Icon name={'ios-lock'} size={25} style={styles.icon}/>
              <TextInput style={styles.input}
                placeholder={'填写密码'}
                secureTextEntry={true}
                onChangeText={(value) => this.setState({password: value})}
                value={this.state.password}/>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>登 录</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#415680',
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 50,
    backgroundColor: '#F4FAFF'
  },
  form: {
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 6,
    borderColor:"#ECECEC",
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F9F9F9',
  },
  row: {
    flexDirection: 'row',
    height: 40,
  },
  phone: {
    borderColor: "#ECECEC",
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D03F4A',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 5,
  },
  icon: {
    paddingTop: 5,
    width: 20,
  },
  backgroundImage: {
    paddingTop: 100,
    flex: 1,
    width: null,
    height: null,
  }
});

module.exports = LoginView;
