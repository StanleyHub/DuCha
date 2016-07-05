import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Picker,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var SearchView = React.createClass({
  getInitialState: function() {
    return {
      year: '',
      fenkou: '',
      type: '',
    };
  },

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchBox}>
          <View style={[styles.row, styles.searchInput]}>
            <Text style={{color: '#DFDFDF',
              fontSize: 15,
              lineHeight: 15,
              marginLeft: 8,
              marginRight: 8,
              paddingTop: 10,
              backgroundColor:'white',
              textAlign: 'center',
              flex: 1}}>输入项目名称进行搜索</Text>
            <TouchableOpacity style={styles.button}>
              <Icon style={{color: '#DFDFDF'}} name={'ios-search'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey', marginTop: 5,}}>按分口</Text>
        <View style={styles.section}>
          <Picker style={styles.picker} selectedValue={this.state.fenkou}
            onValueChange={(fenkou) => this.setState({fenkou: fenkou})}>
            <Picker.Item label="---" value="---" />
            <Picker.Item label="财经口" value="财经口" />
            <Picker.Item label="工交口" value="工交口" />
            <Picker.Item label="金融口" value="金融口" />
            <Picker.Item label="城建口" value="城建口" />
            <Picker.Item label="城投口" value="城投口" />
            <Picker.Item label="农口" value="农口" />
          </Picker>
        </View>
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按类型</Text>
        <View style={styles.section}>
          <Picker style={styles.picker} selectedValue={this.state.type}
            onValueChange={(type) => this.setState({type: type})}>
            <Picker.Item label="---" value="---" />
            <Picker.Item label="政府工作报告" value="政府工作报告" />
            <Picker.Item label="重点项目" value="重点项目" />
            <Picker.Item label="重点工程" value="重点工程" />
            <Picker.Item label="公开承诺" value="公开承诺" />
          </Picker>
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
  section: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  searchBox: {
    padding: 10,
    backgroundColor: '#DFDFDF',
    height: 60,
  },
  row: {
    flexDirection: 'row'
  },
  searchInput: {
    height: 35,
  },
  button: {
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D03F4A',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
});

module.exports = SearchView;
