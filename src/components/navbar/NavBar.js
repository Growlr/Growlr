import React, {Component} from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import NavStyles from './NavStyles';
import {Actions} from 'react-native-router-flux';

class NavBar extends Component {

    render(){
        let {width, height} = Dimensions.get('window')
        return (
          <View style={NavStyles.navbar}>

          <TouchableOpacity
          onPress={Actions.settingsView}
          style={NavStyles.profile}>
            <Image
            source={require('../../img/Growlr_Logo.png')} style={NavStyles.profile} />
          </TouchableOpacity>

          <TouchableOpacity
          onPress={Actions.mainView}>
            <Image style={NavStyles.main}
            source={require('../../img/Growlr_Logo.png')} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={Actions.matchView}
            style={NavStyles.matches}>
              <Image
              source={require('../../img/Growlr_Logo.png')} style={NavStyles.matches} />
            </TouchableOpacity>

          </View>
        )
    }
}
export default NavBar;
