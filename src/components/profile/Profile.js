import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'

class Profile extends Component {

    updateUserInput() {}

    render() {
        return (
          <View>
            <Text> Profile</Text>
            <Text> Profile</Text>
            <Text> Profile</Text>
            <Text> Profile</Text>
            <Text onPress={Actions.landingPage}> landing</Text>
            <Text onPress={Actions.mainView}> Discover</Text>
            <Text onPress={Actions.settingsView}> Settings </Text>


          </View>

        )
    }
}

// mapStateToProps = (state) => {
//     return {userInput: state.landingPage.userInput}
// }

const mapDispatchToActionCreators = {
    // updateProfile: updateProfile
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Profile)
