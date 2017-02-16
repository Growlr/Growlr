import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateMatches} from '../../actions/updateMatchesPageActions';
import Communications from 'react-native-communications';
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

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

class Match extends Component {
  state = {
      modalVisible: false,
  };

  setModalVisible(visible){
      this.setState({modalVisible: visible});
  }

    updateUserInput() {}

    render() {
        let {width, height} = Dimensions.get('window');

        return (
          <View>

          {/* --- Header / NavBar --- */}

            <View style={{alignItems:
          'center'}}>
             <Image style={styles.chatImage}
             source={{uri: 'https://www.woofadvisor.com/images/forum.jpg'}} />

             <TouchableHighlight onPress={Actions.mainView} style={styles.profile}>
              <Image
              source={require('../../img/Growlr_Logo.png')} style={styles.profile}/>
              </TouchableHighlight>
            </View>

            {/* --- Search Bar --- */}

            <View style={{alignItems: 'center'}}>
              <View style={styles.topBorder}>
                <TextInput style={styles.input}
                clearTextOnFocus={true}
                onChangeText={(text) => this.setState.bind({text})}
                placeholder={"Search Matches"} value={this.props.text}/>
              </View>
            </View>
            <ScrollView>

            {/* --- New Matches Section --- */}

            <Text style={styles.match}>New Matches</Text>
            <View style={styles.bottomBorder}>
              <Image
                style={styles.matchImage}
                source={{uri: 'https://images.moviepilot.com/images/c_limit,q_auto,w_710/th8bptyjpgp8qvohvvrq/carlton-a-fresh-prince-spin-off-and-more-possible-spin-offs-of-popular-90s-sitcoms.jpg'}} />
              <Text style={styles.matchName}>Carlton</Text>
              <View style={styles.moreInfo}>
              <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <Text style={{'color': 'lightgray'}}>More Info</Text>
              </TouchableOpacity>
              </View>

            </View>
            <View>

            {/* --- Start of the Modal --- */}

          <Modal
              transparent={true}
              visible={this.state.modalVisible}>

              <TouchableHighlight style={{}} onPress={() => this.setModalVisible(false)}>
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
              </TouchableHighlight>

          </Modal>
          </View>

          {/* --- Matches Section --- */}

            <Text style={styles.match}>Matches</Text>

            <View style={styles.bottomBorder}>
              <Image
                style={styles.matchImage}
                source={{uri: 'https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg'}} />

              <Text style={styles.matchName}>Scruffles Human</Text>
              <View style={styles.moreInfo}>
              <TouchableHighlight onPress={() => this.setModalVisible(true)}>
                  <Text style={{'color': 'lightgray'}}>More Info</Text>
              </TouchableHighlight>
              </View>
            </View>

            <View style={styles.bottomBorder}>
              <Image
                style={styles.matchImage}
                source={{uri: 'https://yt3.ggpht.com/-iMljpF2Y-CQ/AAAAAAAAAAI/AAAAAAAAAAA/1-Uj5vogKcM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />

              <Text style={styles.matchName}>Nacho</Text>
              <View style={styles.moreInfo}>
              <TouchableHighlight onPress={() => this.setModalVisible(true)}>
                  <Text style={{'color': 'lightgray'}}>More Info</Text>
              </TouchableHighlight>
              </View>
            </View>
            </ScrollView>
          </View>

        )
    }
}

{/* --- Style Section --- */}

const styles = StyleSheet.create({
  chatImage: {
    width: 58,
    height: 58,
    margin: 15,
    borderRadius: 30,
    marginBottom: 0
  },
  profile: {
    position: 'absolute',
    top: 15,
    left: 10,
    width: 20,
    height: 27
  },
  input: {
    width: 355,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#EEE9E9',
    margin: 10,
    textAlign: 'center'
  },
  match: {
    color: '#D85050',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  },
  matchImage: {
    width: 80,
    height: 80,
    margin: 15,
    borderRadius: 40
  },
  matchName: {
    marginLeft: 110,
    position: 'absolute',
    top: 30,
    fontSize: 22
  },
  moreInfo: {
    marginLeft: 110,
    position: 'absolute',
    top: 60,
    borderColor: 'gray'
  },
  topBorder: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgray'
  },
  bottomBorder: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'lightgray'
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 1000
  },
  modalContainer: {
    backgroundColor: '#FFF',
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    marginBottom: 250,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  closeModal: {
    color: '#D85050',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#D85050',
    padding: 5,
    borderRadius: 5,
    position:'absolute',
    top: -12,
    left: -142
  },
  tapCall: {
    color: '#D85050',
    paddingTop: 25,
    fontSize:20
  }
})




 mapStateToProps = (state) => {
   return {userInput: state.landingPage.userInput}
 }

const mapDispatchToActionCreators = {
    // updateMain: updateMain
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Match)
