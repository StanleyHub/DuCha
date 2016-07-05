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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={Actions.search}>
            <View style={[styles.row, styles.searchInput]}>
              <Icon style={{color: '#DFDFDF'}} name={'ios-search'} size={20} />
              <Text style={{color: '#DFDFDF', fontSize: 15, marginLeft: 8,}}>输入项目名称进行搜索</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={styles.chartBox}>
            <Text style={styles.title}>2016年安康市共计1021个重点项目</Text>
            <Image style={styles.chart} source={require('./images/piechart.png')}/>
          </View>
          <View style={styles.fenkouGrid}>
            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '财经口'})}>
                  <Text style={styles.itemTitle}>财经口</Text>
                  <Text style={styles.itemSubTitle}>180个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '工交口'})}>
                  <Text style={styles.itemTitle}>工交口</Text>
                  <Text style={styles.itemSubTitle}>203个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '金融口'})}>
                  <Text style={styles.itemTitle}>金融口</Text>
                  <Text style={styles.itemSubTitle}>193个</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.row, styles.gridRow]}>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '财经口'})}>
                  <Text style={styles.itemTitle}>城建口</Text>
                  <Text style={styles.itemSubTitle}>85个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '工交口'})}>
                  <Text style={styles.itemTitle}>城投口</Text>
                  <Text style={styles.itemSubTitle}>253个</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.item]}>
                <TouchableOpacity onPress={() => Actions.units({title: '金融口'})}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  chartBox: {
    marginBottom: 20,
  },
  title: {
    color: '#797979',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  chart: {
    width: 240,
    height: 240,
    backgroundColor: 'grey',
    alignSelf: 'center'
  },
  fenkouGrid: {
    paddingLeft: 10,
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
    fontSize: 18,
    fontWeight: "500",
  },
  itemSubTitle: {
    color: '#DFDFDF',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

module.exports = ProjectDashboad;
