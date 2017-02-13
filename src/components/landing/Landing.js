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
          <Text>{this.props.userInput}</Text>
          <Text style={{marginTop: 80}}>NOOOW Halp</Text>
          <Text onPress={Actions.mainView}> theis is a button</Text>
        </View>


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
