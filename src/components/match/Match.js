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
              <TextInput style={{height: 30, width: 350, borderColor: 'gray', borderWidth: 1, borderRadius: 5, backgroundColor: '#ddd'}}
              onChangeText={(text) => this.setState({text})}
              value={this.props.text}/>
            </View>

            <View>
              <Image
                style={{width: 75, height: 75, margin: 15, borderRadius: 40}}
                source={{uri: 'https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg'}} />

              <Text style={{marginLeft: 110, position: 'absolute', top: 30}}>Name</Text>
            </View>

            <View>
              <Image
                style={{width: 75, height: 75, margin: 15, borderRadius: 40}}
                source={{uri: 'https://yt3.ggpht.com/-iMljpF2Y-CQ/AAAAAAAAAAI/AAAAAAAAAAA/1-Uj5vogKcM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />

              <Text style={{marginLeft: 110, position: 'absolute', top: 30}}>Name</Text>
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
