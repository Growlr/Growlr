import React, {Component} from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import NavStyles from './NavStyles';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'
import {updateMain, cardDeclined, cardAccepted, updateSwiperId, updateHumans, humanCardAccepted, humanCardDeclined} from '../../actions/updateMainPageActions'

class NavBar extends Component {

    render(){
        let {width, height} = Dimensions.get('window')
        return (
          <View style={NavStyles.navbar}>

          <TouchableOpacity
          onPress={Actions.settingsView}
          style={NavStyles.profile}>
            <Image
            source={require('../../img/profile.png')} style={NavStyles.profile} />
          </TouchableOpacity>

          <TouchableOpacity
          onPress={Actions.mainView}>
            <Image style={NavStyles.main}
            source={require('../../img/Growlr_Logo.png')} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={Actions.matchView}
            style={NavStyles.matches}>
              <Image
              source={require('../../img/match.png')} style={NavStyles.matches} />
            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => {
                console.log(this.props)
                        const id = Number(this.props.user.fid)
                        this.props.updateSwiperId({ id });
                        Actions.ownerView()
            }}
            style={NavStyles.owner}>
              <Image
              source={require('../../img/match.png')} style={NavStyles.owner} />
            </TouchableOpacity>

          </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        swiperId: state.mainPage.swiperId
        , cards: state.mainPage.cards
        , humanCards: state.mainPage.humanCards
        , user: state.login.user
    }
}

const mapDispatchToActionCreators = {
    updateMain: updateMain
    , cardDeclined: cardDeclined
    , cardAccepted: cardAccepted
    , humanCardAccepted: humanCardAccepted
    , humanCardDeclined: humanCardDeclined
    , updateSwiperId: updateSwiperId
    , updateHumans: updateHumans
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(NavBar)
