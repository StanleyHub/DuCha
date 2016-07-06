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

var KeyProjectView = React.createClass({
  _renderMonthlyInform: function() {
    return _.map(this.props.project.inform, (inform, index) => {
      return (
        <View key={index}>
          <View style={[styles.row, {justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 5,}]}>
            <View style={styles.circle}>
              <Text style={{color: 'white',
                backgroundColor: 'transparent',
                fontSize: 18}}>{inform.month}</Text>
            </View>
            <Text style={{flex: 1,
              marginLeft: 15,
              color: 'grey',
              fontSize: 15,}}>{inform.content}</Text>
          </View>
          <View style={styles.separator}></View>
        </View>
      );
    });
  },

  _loadProgressBar: function() {
    if(Platform.OS === 'ios') {
      return (
        <ProgressViewIOS style={styles.progressView}
          progress={0.5}
          progressTintColor="#eea14b"/>
      );
    } else {
      return (
        <ProgressBarAndroid style={styles.progressView}
          progress={0.5}
          styleAttr="Horizontal"
          indeterminate={false}
          color="#eea14b"/>
      );
    }
  },

  render() {
    var avatarUri = {uri: 'avatar'};
    if(Platform.OS == 'ios') {
      avatarUri = require('./images/avatar2.jpg');
    }
    return (
      <ScrollView style={styles.container}>
        <View style={{
            backgroundColor: '#eea14b',
            height: 50,
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 18,marginLeft: 8, color: 'white', fontWeight: '400'}}>汉江景观打造项目</Text>
            <Text style={{fontSize: 15, color: 'white', fontWeight: '400', marginRight: 8,}}>进行中</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            {this._loadProgressBar()}
            <Text style={{color: '#eea14b', fontSize: 20,marginTop: 3}}>50%</Text>
            <TouchableOpacity style={styles.button} onPress={() => Actions.duban()}>
              <Text style={styles.buttonText}>督 办</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.info, {marginTop: 15}]}>
            <View style={styles.label}>
              <Text>建设规模</Text>
            </View>
            <View style={styles.input}>
              <Text>约4000平米景观改造</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>建设地点</Text>
            </View>
            <View style={styles.input}>
              <Text>汉江沿河</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>建设工期</Text>
            </View>
            <View style={styles.input}>
              <Text>2016年-2019年</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>项目总投资</Text>
            </View>
            <View style={styles.input}>
              <Text>2亿元</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>2016年建设规模内容</Text>
            </View>
            <View style={styles.input}>
              <Text>主体完工</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>2016年年度投资额</Text>
            </View>
            <View style={styles.input}>
              <Text>1亿元</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.label}>
              <Text>累计完成投资额</Text>
            </View>
            <View style={styles.input}>
              <Text>0.5亿元</Text>
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
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>项目负责人</Text>
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
              <Icon name={'ios-chatbubbles'} style={{color: '#87c754'}} size={30}/>
            </View>
          </View>
        </View>
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>督办事项</Text>
        <View style={[styles.section]}>
          <View style={styles.row}>
            <View style={{flex: 1, }}>
              <Text style={{fontSize: 17,}}>上报下一季度的计划</Text>
              <Text style={{fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年6月12日</Text>
            </View>
            <View style={{width: 30,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: '#D03F4A'}} size={30}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.row}>
            <View style={{flex: 1, }}>
              <Text style={{fontSize: 17,}}>总结上一季度的通报</Text>
              <Text style={{fontSize: 14, marginTop: 8, color: '#999999'}}>截止日期：2016年5月12日</Text>
            </View>
            <View style={{width: 30,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <TouchableOpacity onPress={() => alert("已提醒项目项目负责人尽快办理！")}>
                <Icon name={'ios-notifications'} style={{color: '#D03F4A'}} size={30}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>按月通报</Text>
        <View style={[styles.section]}>
          {this._renderMonthlyInform()}
        </View>
        <Text style={{marginLeft: 10, marginBottom: 5, color: 'grey'}}>存在问题</Text>
        <View style={[styles.section]}>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 15,color: 'grey'}}>基建工程进入汉江北路段时，发现此段土质松软需要进行特殊处理</Text>
              <Text style={{fontSize: 12, marginTop: 8,color: '#999999'}}>2016年5月21日</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 60,
                height: 35,
                backgroundColor: '#eea14b',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent', color: 'white'}}>处理中</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 15,color: 'grey'}}>拆迁户无法搬迁, 项目有所延期</Text>
              <Text style={{fontSize: 12, marginTop: 8,color: '#999999'}}>2016年8月21日</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 60,
                height: 35,
                backgroundColor: '#87c754',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent', color: 'white'}}>已处理</Text>
              </View>
            </View>
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
    marginTop: HEADER_HEIGHT
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
    marginTop: 8,
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

module.exports = KeyProjectView;
