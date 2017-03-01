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

                    source={require('../../img/edit_icon.png')}
              />
            </TouchableHighlight>

            <Text style={{fontWeight: '600'
                          , fontSize: 24}}>
                          {this.props.user.firstname}</Text>


              <TouchableHighlight style={{width: width
                                          , marginTop: 30
                                          , alignItems: 'center'}}
                                          //this button should go to the edit profile view that doesnt exist yet
                                  onClick={this.clickEditProfile()}
                                          >
                <Text style={{color: '#D85050'
                              , fontWeight: '600'
                              , fontSize: 18
                            }}>SETTINGS</Text>
              </TouchableHighlight>



          </View>

        )
    }
}






mapStateToProps = (state) => {
    return {user: state.login.user}
}

const mapDispatchToActionCreators = {
    // updateProfile: updateProfile
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Profile)
