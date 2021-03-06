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

var ShiWei = React.createClass({

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
        <ScrollView style={{flex: 1, marginBottom: 55}}>
          <View style={styles.chartBox}>
            <Text style={styles.title}>2016年安康市委督办项目完成情况</Text>
            <TouchableOpacity onPress={() => Actions.chart({type2: 'shiwei'})}>
              {this._loadChart('piechart')}
            </TouchableOpacity>
          </View>

          <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>核心要求</Text>
          <View style={[styles.grid, {marginBottom: 15}]}>
            <View style={[styles.row, styles.gridRow, {height: 50}]}>
              <View style={[styles.item, {backgroundColor: '#FB3066',
                justifyContent: 'center', alignItems: 'center',}]}>
                <TouchableOpacity onPress={() => Actions.yaoqiu1()}>
                  <Text style={[styles.itemTitle, {fontSize: 18, fontWeight: '500'}]}>中央要求</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, {backgroundColor: '#FB3066',
                justifyContent: 'center', alignItems: 'center'}]}>
                <TouchableOpacity onPress={() => Actions.yaoqiu2()}>
                  <Text style={[styles.itemTitle, {fontSize: 18, fontWeight: '500'}]}>省级要求</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item,
                {justifyContent: 'center', alignItems: 'center',
                  backgroundColor: '#FB3066'}]}>
                <TouchableOpacity onPress={() => Actions.yaoqiu3()}>
                  <Text style={[styles.itemTitle, {fontSize: 18, fontWeight: '500'}]}>市级要求</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按类型</Text>
          <View style={[styles.grid, {marginBottom: 15}]}>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.fenkoulist({title: '政府工作报告', type2: 'gzbg'})}>
                  <Text style={styles.itemTitle}>政府工作报告</Text>
                  <Text style={styles.itemSubTitle}>80个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.fenkoulist({title: '重点项目', type2: 'zdxm'})}>
                  <Text style={styles.itemTitle}>重点项目</Text>
                  <Text style={styles.itemSubTitle}>280个</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.fenkoulist({title: '公开承诺', type2: 'gkcn'})}>
                  <Text style={styles.itemTitle}>公开承诺</Text>
                  <Text style={styles.itemSubTitle}>108个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item, {backgroundColor: 'white'}]}/>
            </View>
          </View>

          <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按分口</Text>
          <View style={styles.grid}>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => {Actions.units({title: '财经口', type2: 'all'})}}>
                  <Text style={styles.itemTitle}>财经口</Text>
                  <Text style={styles.itemSubTitle}>90个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '工交口',type2: 'all'})}>
                  <Text style={styles.itemTitle}>工交口</Text>
                  <Text style={styles.itemSubTitle}>103个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '金融口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>金融口</Text>
                  <Text style={styles.itemSubTitle}>103个</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '城建口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>城建口</Text>
                  <Text style={styles.itemSubTitle}>45个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '城投口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>城投口</Text>
                  <Text style={styles.itemSubTitle}>153个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '农口', type2: 'all'})}>
                  <Text style={styles.itemTitle}>农口</Text>
                  <Text style={styles.itemSubTitle}>121个</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
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

module.exports = ShiWei;
