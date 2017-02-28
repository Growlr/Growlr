import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'
import profileStyles from './profileStyles.js'

import {StyleSheet, Text, View, TextInput, ScrollView, Dimensions, Image, TouchableHighlight } from 'react-native'



class Profile extends Component {
    clickEditProfile() {

    }

    render() {
      let { width, height } = Dimensions.get('window');

        return (
          <View style={{  marginTop: 80
                        , flex: 1
                        , alignItems: 'center'
                        , paddingTop: height / 7
                      }}>


            {/* --- navbar --- */}
            {/* --- Round image --- */}
            {/* --- edit button --- */}
            {/* --- edit and settings buttons --- */}
            <Image style={{   width: width / 2
                            , height: width / 2
                            , borderRadius: width / 4
                          }} source={{uri: this.props.user.fb_img}}>
            </Image>
            <TouchableHighlight onClick={this.clickEditProfile()} >
              <Image style={{   width: 40
                              , height: 40
                              , borderRadius: 20
                              , zIndex: 15
                              , left: width / 6
                              , top: -40
                              // , shadowColor: '#cbcbcb'
                              // , shadowRadius: 3
                              ,


                            }}

                    source={{uri: this.props.user.fb_img}}
              />
            </TouchableHighlight>

            <Text style={{fontWeight: '600'
                          , fontSize: 24}}>
                          {this.props.user.firstname}</Text>



          </View>

        )
    }
}



  //chatImage: {
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
    return {user: state.login.user}
}

const mapDispatchToActionCreators = {
    // updateProfile: updateProfile
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Profile)
