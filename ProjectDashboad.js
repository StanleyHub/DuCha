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

var ProjectDashboad = React.createClass({

  _loadChart: function() {
    if(Platform.OS === 'ios') {
      return (
        <Image style={styles.chart} source={require('./images/piechart.png')}/>
      );
    } else {
      return (
        <Image style={styles.chart} source={{uri: 'piechart'}} />
      );
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1, marginBottom: 55, marginTop: 10}}>
          <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按类型</Text>
          <View style={[styles.grid, {marginBottom: 15}]}>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '政府工作报告', type2: 'gzbg'})}>
                  <Text style={styles.itemTitle}>政府工作报告</Text>
                  <Text style={styles.itemSubTitle}>153个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '重点项目', type2: 'zdxm'})}>
                  <Text style={styles.itemTitle}>重点项目</Text>
                  <Text style={styles.itemSubTitle}>580个</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '重点工程', type2: 'zdgc'})}>
                  <Text style={styles.itemTitle}>重点工程</Text>
                  <Text style={styles.itemSubTitle}>80个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '公开承诺', type2: 'gkcn'})}>
                  <Text style={styles.itemTitle}>公开承诺</Text>
                  <Text style={styles.itemSubTitle}>208个</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按分口</Text>
          <View style={styles.grid}>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => {Actions.units({title: '财经口', type2: 'all'})}}>
                  <Text style={styles.itemTitle}>财经口</Text>
                  <Text style={styles.itemSubTitle}>180个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '工交口',type2: 'all'})}>
                  <Text style={styles.itemTitle}>工交口</Text>
                  <Text style={styles.itemSubTitle}>203个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '金融口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>金融口</Text>
                  <Text style={styles.itemSubTitle}>193个</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '城建口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>城建口</Text>
                  <Text style={styles.itemSubTitle}>85个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '城投口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>城投口</Text>
                  <Text style={styles.itemSubTitle}>253个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '农口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>农口</Text>
                  <Text style={styles.itemSubTitle}>221个</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  },
});

var HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 55;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
    backgroundColor: '#E9E9EF'
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  chartBox: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    color: '#797979',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  chart: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  grid: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  gridRow: {
    height: 60,
    marginTop: 10,
  },
  item: {
    flex: 1,
    backgroundColor: '#DF7B51',
    marginRight: 10,
    padding: 8,
    borderRadius: 2,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "400",
  },
  itemSubTitle: {
    color: '#DFDFDF',
    alignSelf: 'flex-end',
    marginTop: 12,
  },
});

module.exports = ProjectDashboad;
