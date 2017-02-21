import React, {Component} from 'react';
import {connect} from 'react-redux';
import Mystyles from './styles';
import MatchModal from './MatchModal';
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
    Modal
} from 'react-native';

class NewMatch extends Component {

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    return (

      <View>
        <Text style = {Mystyles.match}>New Matches</Text>

        <TouchableOpacity onPress = { () => this.setModalVisible(true)}>
          <View style = {              Mystyles.bottomBorder}>
            <Image style = {Mystyles.matchImage}
            source = {{}} />
            <Text style = {Mystyles.matchName}>Pet Name</Text>
          <View style = {Mystyles.moreInfo}>
            <Text style = {{'color': 'lightgray'}}>More Info</Text>
          </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewMatch;
