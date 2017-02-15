import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateMatches} from '../../actions/updateMatchesPageActions';
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image} from 'react-native';

class Match extends Component {

    updateUserInput() {}

    render() {
        return (
          <View>
            <View style={{alignItems:
          'center'}}>
             <Image style={styles.chatImage}
             source={{uri: 'https://www.woofadvisor.com/images/forum.jpg'}} />

              <Image style={styles.profile}
              onPress={Actions.profileView}
              source={require('../../img/Growlr_Logo.png')} />
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.topBorder}>
                <TextInput style={styles.input}
                clearTextOnFocus={true}
                onChangeText={(text) => this.setState.bind({text})}
                placeholder={"Search Matches"} value={this.props.text}/>
              </View>
            </View>
            <ScrollView>
            <Text style={styles.match}>New Matches</Text>

            <View style={styles.bottomBorder}>
              <Image
                style={styles.matchImage}
                source={{uri: 'https://images.moviepilot.com/images/c_limit,q_auto,w_710/th8bptyjpgp8qvohvvrq/carlton-a-fresh-prince-spin-off-and-more-possible-spin-offs-of-popular-90s-sitcoms.jpg'}} />

              <Text style={styles.matchName}>Carlton</Text>
              <Text style={styles.moreInfo}>More Info</Text>
            </View>

            <Text style={styles.match}>Matches</Text>

            <View style={styles.bottomBorder}>
              <Image
                style={styles.matchImage}
                source={{uri: 'https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg'}} />

              <Text style={styles.matchName}>Scruffles Human</Text>
              <Text style={styles.moreInfo}>More Info</Text>
            </View>

            <View style={styles.bottomBorder}>
              <Image
                style={styles.matchImage}
                source={{uri: 'https://yt3.ggpht.com/-iMljpF2Y-CQ/AAAAAAAAAAI/AAAAAAAAAAA/1-Uj5vogKcM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />

              <Text style={styles.matchName}>Nacho</Text>
              <Text style={styles.moreInfo}>More Info</Text>
            </View>
            </ScrollView>
          </View>

        )
    }
}


const styles = StyleSheet.create({
  chatImage: {
    width: 58,
    height: 58,
    margin: 15,
    borderRadius: 30,
    marginBottom: 0
  },
  profile: {
    position: 'absolute',
    top: 38,
    left: 15,
    width: 17,
    height: 23
  },
  input: {
    width: 355,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#EEE9E9',
    margin: 10,
    textAlign: 'center'
  },
  match: {
    color: '#D85050',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  },
  matchImage: {
    width: 80,
    height: 80,
    margin: 15,
    borderRadius: 40
  },
  matchName: {
    marginLeft: 110,
    position: 'absolute',
    top: 30,
    fontSize: 22
  },
  moreInfo: {
    marginLeft: 110,
    position: 'absolute',
    top: 60,
    fontSize: 16,
    color: 'lightgray',
    borderColor: 'gray'
  },
  topBorder: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgray'
  },
  bottomBorder: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'lightgray'
  }
})

// mapStateToProps = (state) => {
//     return {userInput: state.landingPage.userInput}
// }

const mapDispatchToActionCreators = {
    // updateMain: updateMain
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Match)
