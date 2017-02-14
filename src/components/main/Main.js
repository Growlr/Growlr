import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'
import { PetCard } from './PetCard'

class Main extends Component {
    updateUserInput() {}

    render() {
        return (
          <View>

            <Text onPress={Actions.landingPage}> Main</Text>
            <Text onPress={Actions.profileView}> Profile</Text>
            <Text onPress={Actions.petDetailView}> PetDetail</Text>
            <Text onPress={Actions.matchView}> Match View</Text>
            <PetCard
              name='Scruffles'
              age='100'
              shortDesc='Scruffles was my slave name'
              imageUrl='https://all-that-is-interesting.com/wordpress/wp-content/uploads/2012/08/ugly-cat-sphynx-2.jpg'
            />


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
