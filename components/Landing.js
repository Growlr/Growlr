import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateLanding} from '../actions/updateLandingPageActions'

import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'

class Landing extends Component {

    updateUserInput() {}

    render() {
        return (
        <Text>{this.props.userInput}</Text>


        )
    }
}

mapStateToProps = (state) => {
    return {userInput: state.landingPage.userInput}
}

const mapDispatchToActionCreators = {
    updateLanding: updateLanding
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Landing)
