import React, {Component} from 'react';
import {connect} from 'react-redux';
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

class SearchBar extends Component {

  render() {

    return (

      <View style={{alignItems: 'center'}}>
        <View style={styles.topBorder}>
          <TextInput style={styles.input}
          clearTextOnFocus={true}
          onChangeText={(text) =>
          this.setState.bind({text})}
          placeholder={"Search Matches"} value={this.props.text} />
        </View>
      </View>

    )

  }

}

export default connect(SearchBar);
