import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'
import SwipeCards from 'react-native-swipe-cards'



import PetCard from './PetCard';

import {StyleSheet, Text, View, TextInput, ScrollView, Modal, TouchableHighlight, Dimensions, Image} from 'react-native'


class Main extends Component {
    updateUserInput() {}
        constructor(props){
        super(props)
            this.state = {
                cards: [
                    {
                        mainImage:"https://facebook.github.io/react/img/logo_og.png",
                        name:"Jacob",
                        age:"23",
                        desc:"Occupation"
                    },
                    {
                        mainImage:"https://facebook.github.io/react/img/logo_og.png",
                        name:"Jacob",
                        age:"23",
                        desc:"Occupation"
                    },
                ]
            }
        }



    render() {
        let {width, height} = Dimensions.get('window')
        return (
            <View>

          <View style={{ alignSelf: 'center' }}>
              <SwipeCards cards={this.state.cards} renderCard={(cardData) => <PetCard { ...cardData }/>}/>
          </View>


          <View>

            <Text onPress={Actions.landingPage}> Main</Text>
            <Text onPress={Actions.profileView}> Profile</Text>
            <Text onPress={Actions.petDetailView}> PetDetail</Text>
            <Text onPress={Actions.matchView}> Match View</Text>
            <Text onPress={Actions.settingsView}> Settings</Text>
            <Text onPress={Actions.myCamera}> myCamera</Text>

          </View>
            </View>

        )
    }
}

// mapStateToProps = (state) => {
//     return {userInput: state.landingPage.userInput}
// }

const mapDispatchToActionCreators = {
    // updateMain: updateMain
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Main)
