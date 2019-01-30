import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import SignUp from './src/SignUp'
import Posts  from './src/Posts';
import Search  from './src/Search';
import Feed  from './src/Feed';
import Profile  from './src/Profile';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation, { IconTab } from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'feed',
      content: null,
    }

    var config = {
      apiKey: "AIzaSyAWmv1Hkh4oSauahZG9yCIhq470az2tWtQ",
      authDomain: "hilite-54ff0.firebaseapp.com",
      databaseURL: "https://hilite-54ff0.firebaseio.com",
      projectId: "hilite-54ff0",
      storageBucket: "hilite-54ff0.appspot.com",
      messagingSenderId: "272103104265"
    };

    firebase.initializeApp(config);

  }

  tabs = [
    {
      key: 'feed',
      icon: 'md-bookmarks',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Profile />
    },
    {
      key: 'search',
      icon: 'md-search',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <Posts />
    },
    {
      key: 'profile',
      icon: 'md-person',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 0, 0.07)',
      content: <SignUp />
    }
  ]

  handleTabPress = (newTab, oldTab) => {
    this.renderIcon(newTab.icon, '#660899')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#303030' }}>
          { this.state.content }
        </View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
          onTabPress={this.handleTabPress}
        />
      </View>
    )
  }

  renderTab = ({tab, isActive}) => {
    let color = '#ecebed';

    switch (tab.key) {
      case 'feed' : {
        color = '#851dab'
        break
      }
      case 'search' : {
        color = '#851dab'
        break
      }
      case 'profile' : {
        color = '#851dab'
        break
      }
    }
    return (
      <IconTab
        key={tab.key}
        isActive={isActive}
        renderIcon={this.renderIcon(tab.icon, color)}
      />
    )
  }

  renderIcon = (iconName, color) => ({ isActive }) => {
    return <Ionicons size={24} color={color} name={iconName} />
  }
}
