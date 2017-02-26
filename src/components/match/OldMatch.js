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
      secondModalVisible: false
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setSecondModalVisible(visible) {
      this.setState({secondModalVisible: visible})
  }

  render() {
      let {width, height} = Dimensions.get('window')

    return (

      <View>


        <TouchableOpacity onPress={() => this.setSecondModalVisible(true)}>

        <View style={Mystyles.bottomBorder}>
          <Image style={Mystyles.matchImage}
        source={{uri: this.props.imgurl }} />

          <Text style={Mystyles.matchName}>{this.props.name}</Text>

        <View style={Mystyles.moreInfo}>

          <Text style={{'color': 'lightgray'}} onPress={() =>  this.setModalVisible(true)} >More Info</Text>
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

          <Modal
              visible={this.state.secondModalVisible}>
              <View style={{ width: width, height, backgroundColor: 'white' }}>

                  <View style={{ height: 240}}>

                      <TouchableHighlight style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent'}} onPress={() => this.setSecondModalVisible(false)}>
                          <Image style={{ width, flex: 1}} source={{uri: (this.props.imgurl) ? this.props.imgurl: this.props.fb_img}} />
                      </TouchableHighlight>

                  </View>


                  <View style={{paddingTop: 20, paddingLeft: 15, borderBottomWidth: 1, borderColor: 'lightgray' }}>

                      <Text><Text style={{fontWeight: 'bold'}}>{this.props.name ? this.props.name: this.props.firstname},</Text> {this.props.age}</Text>
                      <Text style={{ paddingBottom: 15, fontSize: 12, color: 'gray' }}>{this.props.gender}</Text>
                      {/*<Text style={{ paddingBottom: 15, fontSize: 10, color: 'gray' }}>Distance from</Text>*/}
                  </View>
                  <View>
                      <Text style={{ paddingTop: 20, paddingLeft: 15, paddingRight: 15}}> {this.props.description}</Text>
                  </View>
              </View>

          </Modal>
    </View>
    )
  }
}

export default OldMatch;
