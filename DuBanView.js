import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var DuBanView = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      content: ''
    };
  },


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>标题</Text>
        <TextInput style={styles.title}
          onChangeText={(value) => this.setState({title: value})}
          value={this.state.title}/>
        <Text style={styles.label}>督办内容</Text>
        <TextInput style={styles.content}
          multiline={true}
          onChangeText={(value) => this.setState({content: value})}
          value={this.state.content}/>
        <TouchableOpacity style={styles.button} onPress={() => Actions.pop()}>
          <Text style={styles.buttonText}>发 布</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
    padding: 10,
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
  label: {
    marginTop: 10,
  },
  title: {
    height: 40,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 8,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: 18,
    marginTop: 10,
    padding: 8,
  }
});

module.exports = DuBanView;
