import React, {Component} from 'react';
import {connect} from 'react-redux';
import Mystyles from './styles';
import Communications from 'react-native-communications';
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

  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    return (

      <View>
        <Text style={Mystyles.match}>Matches</Text>

        <TouchableOpacity onPress={() =>  this.setModalVisible(true)}>

        <View style={Mystyles.bottomBorder}>
          <Image style={Mystyles.matchImage}
        source={require('../../img/Growlr_Logo.png')} />

          <Text style={Mystyles.matchName}>Pet Name</Text>

        <View style={Mystyles.moreInfo}>

          <Text style={{'color': 'lightgray'}}>More Info</Text>
        </View>
        </View>
      </TouchableOpacity>


      {/* Modal Section */}


      <Modal
          transparent={true}
          visible={this.state.modalVisible}>

          <TouchableOpacity style={{}} onPress={() => this.setModalVisible(false)}>
          <View style={Mystyles.modalBackground}>

              <View style={Mystyles.modalContainer}>
                <TouchableOpacity style={{}} onPress={() => this.setModalVisible(false)}>
                  <Text style ={Mystyles.closeModal}>Close</Text>
                </TouchableOpacity>
                  <Text>Contact us regarding</Text>
                  <Text>the adoption process!</Text>
                  <TouchableOpacity onPress={() => Communications.phonecall('8012612919', true)}>
                    <Text style={Mystyles.tapCall}>(801) 261-2919</Text>
                  </TouchableOpacity>

              </View>
          </View>
          </TouchableOpacity>

      </Modal>
    </View>
    )
  }
}

export default OldMatch;
