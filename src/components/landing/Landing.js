import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateLanding} from '../../actions/updateLandingPageActions'
import {Actions} from 'react-native-router-flux';

import {StyleSheet, Text, View, TextInput} from 'react-native'


class Landing extends Component {

    updateUserInput() {}

    render() {
        return (
        <View>
          <Text style={{marginTop: 80}}>NOOOW Halp</Text>
          <Text>{this.props.userInput}</Text>
          <Text onPress={Actions.mainView}> theis is a button</Text>
          <Text onPress={Actions.settingsView}> theis is a button fur settings</Text>
          <Text onPress={Actions.matchView}> Match View</Text>
        </View>


        )
    }
}

mapStateToProps = (state) => {
    console.log(state.landingPage);
    return {userInput: state.landingPage.userInput}
}

const mapDispatchToActionCreators = {
    updateLanding: updateLanding
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Landing)
