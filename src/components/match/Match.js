import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
// import MatchNavBar from './MatchNavBar';
import NavBar from '../navbar/NavBar';
import NewMatch from './NewMatch';
import OldMatch from './OldMatch';
import MatchModal from './MatchModal';
import Mystyles from './styles'
import {updateMatches} from '../../actions/updateMatchesPageActions';
import Communications from 'react-native-communications';
import {Actions} from 'react-native-router-flux';
import axios from 'axios'

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

    // updateUserInput() {}

    // componentDidMount() {
    //     axios.get('http://138.197.144.223/api/matches/:id').then((res, err) => {
    //         console.log(res)
    //         let matchData = res.data
    //         this.getMatches(matchData)
    //     }).catch((err) => {
    //         console.error('oops', err);
    //     })
    // }

    render() {
        let {width, height} = Dimensions.get('window');

        return (
          <View>

          {/* --- Header / NavBar --- */}

            <NavBar></NavBar>

          {/* --- Search Bar --- */}

            <SearchBar></SearchBar>

            <ScrollView>

          {/* --- New Matches Section --- */}

              <NewMatch></NewMatch>

              <View>

          {/* --- Start of the Modal --- */}

                <MatchModal></MatchModal>
              </View>

          {/* --- Matches Section --- */}

                <OldMatch></OldMatch>


            </ScrollView>
          </View>

        )
    }
}


          {/* --- Style Section --- */}

// const styles = StyleSheet.create({
//   chatImage: {
//     width: 58,
//     height: 58,
//     margin: 15,
//     borderRadius: 30,
//     marginBottom: 0
//   },
//   profile: {
//     position: 'absolute',
//     top: 15,
//     left: 10,
//     width: 20,
//     height: 27
//   },
//   input: {
//     width: 355,
//     height: 35,
//     borderRadius: 5,
//     backgroundColor: '#EEE9E9',
//     margin: 10,
//     textAlign: 'center'
//   },
//   match: {
//     color: '#D85050',
//     fontSize: 18,
//     marginLeft: 15,
//     marginRight: 15,
//     marginTop: 15
//   },
//   matchImage: {
//     width: 80,
//     height: 80,
//     margin: 15,
//     borderRadius: 40
//   },
//   matchName: {
//     marginLeft: 110,
//     position: 'absolute',
//     top: 30,
//     fontSize: 22
//   },
//   moreInfo: {
//     marginLeft: 110,
//     position: 'absolute',
//     top: 60,
//     borderColor: 'gray'
//   },
//   topBorder: {
//     alignItems: 'center',
//     borderTopWidth: 0.5,
//     borderTopColor: 'lightgray'
//   },
//   bottomBorder: {
//     borderBottomWidth: 0.4,
//     borderBottomColor: 'lightgray'
//   },
//   modalBackground: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     height: 1000
//   },
//   modalContainer: {
//     backgroundColor: '#FFF',
//     padding: 32,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 250,
//     marginBottom: 250,
//     marginLeft: 20,
//     marginRight: 20,
//     borderRadius: 5
//   },
//   closeModal: {
//     color: '#D85050',
//     fontWeight: 'bold',
//     borderWidth: 1,
//     borderColor: '#D85050',
//     padding: 5,
//     borderRadius: 5,
//     position:'absolute',
//     top: -12,
//     left: -138
//   },
//   tapCall: {
//     color: '#D85050',
//     paddingTop: 25,
//     fontSize:20
//   }
// })




 // mapStateToProps = (state) => {
 //   return {userInput: state.matchPage.matches}
 // }

const mapDispatchToActionCreators = {
    updateMatches: updateMatches
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Match)
