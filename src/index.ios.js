import React, { Component } from 'react'
import{ Provider } from 'react-redux'
import store from './store'

import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'

import Landing from './components/landing/Landing'
import Main from './components/main/Main'
import PetDetail from './components/petDetail/PetDetail'
import Profile from './components/profile/Profile'
import Match from './components/match/Match'
import Settings from './components/settings/Settings'
import Login from './components/main/Login'
<<<<<<< HEAD
import NavBar from './components/navbar/NavBar';
import NavStyles from './components/navbar/NavStyles';
=======
import NavBar from './components/navbar/NavBar'
import Owner from './components/owner/Owner'
>>>>>>> master
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Growlr extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router >
            <Scene key="root" >


<<<<<<< HEAD
              <Scene key="mainView" navBar={NavBar} navigationBarStyle={{position: 'absolute', top: 0}} panHandler={null} sceneStyle={{ backgroundColor: 'lightgray'}} component={Main} title="Discover Pets" initial={true}/>
              <Scene key="landingPage" component={Landing} title="Landing Page" />
              <Scene key="profileView" navBar={NavBar} component={Profile} title="Your Profile"/>
=======
              <Scene key="mainView" navBar={ NavBar} navigationBarStyle={{ position: 'absolute', top: 0}} panHandlers={null} sceneStyle={{ backgroundColor: 'lightgray'}} component={Main} title="Discover Pets" initial={true}/>
              <Scene key="landingPage" component={Landing} title="Landing Page" />
              <Scene key="profileView" component={Profile} title="Your Profile"/>
              <Scene key="ownerView" sceneStyle={{ paddingTop: 65 }} component={Owner} title="Your Pets"/>
>>>>>>> master
              <Scene key="petDetailView" component={PetDetail} title="Pet Details"/>
              <Scene key="matchView"
              navBar={NavBar} component={Match} title="Match View"/>
              <Scene key="settingsView"
              navBar={NavBar} component={Settings} title="Settings View"/>
              </Scene>


        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF7EB',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Growlr', () => Growlr);
