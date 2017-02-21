import React, {Component} from 'react';
import {connect} from 'react-redux';
import Mystyles from './styles';
import {updateMatches} from '../../actions/updateMatchesPageActions';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Modal} from 'react-native';

class MatchNavBar extends Component {

  render() {

    return (
      <View style={{alignItems: 'center', marginTop: 60}}>
        <Image style={Mystyles.chatImage}
        source={require('../../img/Growlr_Logo.png')} />

        <TouchableOpacity
        onPress={Actions.mainView}
        style={Mystyles.profile}>
          <Image
          source={require('../../img/Growlr_Logo.png')} style={Mystyles.profile} />
        </TouchableOpacity>
      </View>

    )

  }

}

export default MatchNavBar;
