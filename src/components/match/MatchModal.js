import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateMatches} from '../../actions/updateMatchesPageActions';
import Communications from 'react-native-communications';
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

class MatchModal extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible(visible){
    this.setState({modalVisible: visible});
  }

  render() {
    let {width, height} = Dimensions.get('window');

    return (
      <View>

      {/* --- Start of the Modal --- */}

    <Modal
        transparent={true}
        visible={this.state.modalVisible}>

        <TouchableOpacity style={{}} onPress={() => this.setModalVisible(false)}>
        <View style={styles.modalBackground}>

            <View style={styles.modalContainer}>
              <TouchableOpacity style={{}} onPress={() => this.setModalVisible(false)}>
                <Text style ={styles.closeModal}>Close</Text>
              </TouchableOpacity>
                <Text>Contact us regarding</Text>
                <Text>the adoption process!</Text>
                <TouchableOpacity onPress={() => Communications.phonecall('8012612919', true)}>
                  <Text style={styles.tapCall}>(801) 261-2919</Text>
                </TouchableOpacity>

            </View>
        </View>
        </TouchableOpacity>

    </Modal>
    </View>
    )
  }


}

export default connect(MatchModal)
