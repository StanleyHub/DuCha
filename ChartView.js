import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

var Platform = require('Platform');

var ChartView = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  _loadChart: function(chart) {
    switch (chart) {
      case 'piechart':
        if(Platform.OS === 'ios') {
          return (
            <Image style={styles.piechart} source={require('./images/piechart.png')}/>
          );
        } else {
          return (
            <Image style={styles.piechart} source={{uri: 'piechart'}} />
          );
        }
        break;
      case 'columnchart':
        if(Platform.OS === 'ios') {
          return (
            <Image style={styles.columnchart} source={require('./images/columnchart.png')}/>
          );
        } else {
          return (
            <Image style={styles.columnchart} source={{uri: 'columnchart'}} />
          );
        }
        break;
      case 'barchart':
        if(Platform.OS === 'ios') {
          return (
            <Image style={styles.barchart} source={require('./images/barchart.png')}/>
          );
        } else {
          return (
            <Image style={styles.barchart} source={{uri: 'barchart'}} />
          );
        }
        break;
      default:

    }

  },

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={styles.chartBox}>
            <Text style={styles.title}>{this.props.type2 === 'shiwei' ? '2016年安康市委督办项目完成情况' : '2016年安康市政府督办项目完成情况' }</Text>
            <TouchableOpacity>
              {this._loadChart('piechart')}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.chartBox}>
            <Text style={styles.title}>{this.props.type2 === 'shiwei' ? '2016年安康市委各类型督办项目完成情况' : '2016年安康市政府各类型督办项目完成情况' }</Text>
            {this._loadChart('columnchart')}
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.chartBox}>
            <Text style={styles.title}>{this.props.type2 === 'shiwei' ? '2016年安康市委各分口督办项目完成情况' : '2016年安康市政府各分口督办项目完成情况' }</Text>
            <Text style={styles.title}></Text>
            {this._loadChart('barchart')}
          </View>
        </View>
      </ScrollView>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
  },
  section: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  chartBox: {
    marginBottom: 10,
  },
  title: {
    color: '#797979',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  piechart: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  columnchart: {
    width: 350,
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  barchart: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  }
});

module.exports = ChartView;
