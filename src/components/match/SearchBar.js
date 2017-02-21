import React, {Component} from 'react';
import {connect} from 'react-redux';
import Mystyles from './styles';
import {updateMatches} from '../../actions/updateMatchesPageActions';
import {Actions} from 'react-native-router-flux';
import {
  Mystylesheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Modal} from 'react-native';

class SearchBar extends Component {

  render() {

    return (

      <View style={{alignItems: 'center'}}>
        <View style={Mystyles.topBorder}>
          <TextInput style={Mystyles.input}
          clearTextOnFocus={true}
          onChangeText={(text) =>
          this.setState.bind({text})}
          placeholder={"Search Matches"} value={this.props.text} />
        </View>
      </View>

    )

  }

}

export default SearchBar;
