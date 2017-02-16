import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import { updateMain, cardDeclined, cardAccepted } from '../../actions/updateMainPageActions'
import SwipeCards from 'react-native-swipe-cards'



import PetCard from './PetCard';

import {StyleSheet, Text, View, TextInput, ScrollView, Modal, TouchableHighlight, Dimensions, Image} from 'react-native'


class Main extends Component {


cardRemoval = ( card ) => {
}



    render() {
        let {width, height} = Dimensions.get('window')
        return (
            <View>

          <View style={{ marginTop: 0, alignSelf: 'center' }}>
              <SwipeCards
                  cards={this.props.cards}
                  renderCard={(cardData) => <PetCard { ...cardData }/>}
                  handleYup={(card) => {
                      this.cardRemoval(card)
                      this.props.cardAccepted(card)
                  }}
                  handleNope={(card) => {
                      this.cardRemoval(card)
                      this.props.cardDeclined(card)
                  }}
                  cardRemoved={(card) => this.cardRemoval(card)}




              />
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

mapStateToProps = (state) => {
    console.log(state)
    return {
        cards: state.mainPage.cards
    }
 }

const mapDispatchToActionCreators = {
    updateMain: updateMain,
    cardDeclined: cardDeclined,
    cardAccepted: cardAccepted
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Main)
