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

class OldMatch extends Component {


    <Text style={styles.match}>Matches</Text>

    <TouchableOpacity onPress{() => this.setModalVisible(true)}>

    <View style={styles.bottomBorder}>
      <Image style={styles.matchImage}
      source={{}} />

      <Text style={styles.matchName}>Pet Name</Text>

      <View style={styles.moreInfo}>

        <Text style={{'color': 'lightgray'}}>More Info</Text>
      <View>
    </TouchableOpacity>
}

export default connect(OldMatch);
