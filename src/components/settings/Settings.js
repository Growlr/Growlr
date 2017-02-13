import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'

class Settings extends Component {

    updateUserInput() {}

    render() {
        return (
          <View>
            <Text> Main</Text>
            <Text> Main</Text>
            <Text> Main</Text>
            <Text> Main</Text>
            <Text onPress={Actions.landingPage}> Landing</Text>
            <Text onPress={Actions.profileView}> Profile</Text>
            <Text onPress={Actions.mainView}> Main</Text>
            <Text onPress={Actions.matchView}> Main</Text>


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

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
