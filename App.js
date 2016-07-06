import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

var ProjectDashboad = require('./ProjectDashboad');
var SearchView = require('./SearchView');
var NewsView = require('./NewsView');
var MyView = require('./MyView');
var LoginView = require('./LoginView');
var SearchView = require('./SearchView');
var UnitsView = require('./UnitsView');
var ProjectList = require('./ProjectList');
var ProjectDetails = require('./ProjectDetails');
var ChartView = require('./ChartView');
var DuBanView = require('./DuBanView');
var BaoGaoView = require('./BaoGaoView');
var KeyProjectView = require('./KeyProjectView');
var KeyEngineering = require('./KeyEngineering');

class TabIcon extends React.Component {
  render(){
    var color = this.props.selected ? '#D03F4A' : '#CCCCCC';
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center',
        alignSelf:'center', paddingTop: 3}}>
        <Icon style={{color: color}} name={this.props.iconName} size={25} />
        <Text style={{color: color}}>{this.props.title}</Text>
      </View>
    );
  }
}

var App = React.createClass({
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="tabBar" tabs={true} default="projectDashboad"
            tabBarStyle={{backgroundColor: '#F6F6F6'}}>
  	        <Scene key="projectDashboad" title="督办项目" initial={true}
              icon={TabIcon} iconName={"ios-home"}
              navigationBarStyle={{backgroundColor: '#D03F4A'}}
              titleStyle={{color: 'white'}}
              component={ProjectDashboad}
              onRight={()=>{Actions.search()}}
              rightTitle={<Icon style={{color: 'white'}} name={'ios-search'} size={25} />}/>
            <Scene key="news" title="督办通报"
              icon={TabIcon} iconName={"ios-paper"}
              navigationBarStyle={{backgroundColor: '#D03F4A'}}
              titleStyle={{color: 'white'}}
              component={NewsView}/>
            <Scene key="chart" title="数据分析"
              icon={TabIcon} iconName={"ios-pie"}
              navigationBarStyle={{backgroundColor: '#D03F4A'}}
              titleStyle={{color: 'white'}}
              component={ChartView}/>
            <Scene key="my" title="我"
              icon={TabIcon} iconName={"ios-contact"}
              navigationBarStyle={{backgroundColor: '#D03F4A'}}
              titleStyle={{color: 'white'}}
              component={MyView}/>
  	      </Scene>

          <Scene key="search" component={SearchView} title="搜索"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="units" component={UnitsView}
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="projectList" component={ProjectList}
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="projectDetails" component={ProjectDetails}
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="baogao" component={BaoGaoView}
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="duban" component={DuBanView} title="督办"
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="keyProject" component={KeyProjectView}
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>
          <Scene key="keyEngineering" component={KeyEngineering}
            hideNavBar={false}
            navigationBarStyle={{backgroundColor: '#D03F4A'}}
            titleStyle={{color: 'white'}}
            hideBackImage={true}
            backTitle={<Icon style={{color: 'white'}} name={'ios-arrow-back'} size={25} />}/>

          <Scene key="login" component={LoginView} hideNavBar={true} initial={false}/>
        </Scene>
      </Router>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: '#D03F4A',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 12,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: 'white',
  },
  backButton: {
    marginTop: 30,
  }
});

module.exports = App;
