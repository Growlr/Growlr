import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {StyleSheet, Text, View, TextInput, ScrollView, Image} from 'react-native';

class Match extends Component {

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
            <Text onPress={Actions.matchView}> Match</Text>
            <Text onPress={Actions.settingsView}> Settings</Text>

            <View>
              <Image
                style={{width: 75, height: 75, margin: 20, borderRadius: 40}}
                source={{uri: 'https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg'}} />

              <Text style={{marginLeft: 20}}>Message message message message</Text>
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(Match)
