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
  ListView,
  Modal} from 'react-native';

class Match extends Component {

    // updateUserInput() {}

      componentDidMount() {
          console.log(this.props.swiper.id)
          axios.get(`http://138.197.144.223/api/matches/${this.props.swiper.id}`)
              .then((res) => {
              console.log(res)
              let matchData = res.data
              this.props.updateMatches(matchData)
          })
      }


    render() {
        let {width, height} = Dimensions.get('window');
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id !== r2.id
        });

       let items = this.props.matches

        return (

          <View>

          {/* --- Header / NavBar --- */}

            <NavBar></NavBar>

          {/* --- Search Bar --- */}

            <SearchBar></SearchBar>



          {/* --- New Matches Section --- */}

              {/*<NewMatch></NewMatch>*/}

              {/*<View>*/}

          {/*/!* --- Start of the Modal --- *!/*/}

                {/*<MatchModal></MatchModal>*/}
              {/*</View>*/}

          {/* --- Matches Section --- */}
                <Text style={Mystyles.match}>Matches</Text>
                <ListView
                    contentContainerStyle={{ flexDirection: 'column', justifyContent: 'center'}}
                    dataSource={dataSource.cloneWithRows(items)}
                    renderRow={(rowData) => <OldMatch pet_id={rowData.uniq_id} name={rowData.pet_name} age={rowData.age} description={rowData.description} gender={rowData.gender} breed={rowData.breed} imgurl={rowData.img_link}/>}
                />


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




 mapStateToProps = (state) => {
    console.log(state)
   return {
       matches: state.matchPage.matches,
       swiper: state.mainPage.swiperId,
       user: state.login.user
   }
 }

const mapDispatchToActionCreators = {
    updateMatches: updateMatches

};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Match)
