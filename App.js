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

var ProjectsView = require('./ProjectsView');
var SearchView = require('./SearchView');
var NewsView = require('./NewsView');
var MyView = require('./MyView');
var LoginView = require('./LoginView');
var SearchView = require('./SearchView');
var UnitsView = require('./UnitsView');

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
          <Scene key="tabBar" tabs={true} default="projects"
            tabBarStyle={{backgroundColor: '#F6F6F6'}} duration={100}>
  	        <Scene key="projects" title="重点项目" initial={false}
              icon={TabIcon} iconName={"ios-home"}
              navigationBarStyle={{backgroundColor: '#D03F4A'}}
              titleStyle={{color: 'white'}}
              component={ProjectsView}/>
            <Scene key="news" title="电子报"
              icon={TabIcon} iconName={"ios-paper"}
              navigationBarStyle={{backgroundColor: '#D03F4A'}}
              titleStyle={{color: 'white'}}
              component={NewsView}/>
            <Scene key="my" title="我的"
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

          <Scene key="login" component={LoginView} hideNavBar={true} initial={true}/>
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
