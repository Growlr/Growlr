import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {updateMain, cardDeclined, cardAccepted} from '../../actions/updateMainPageActions'
import SwipeCards from 'react-native-swipe-cards'
import axios from 'axios'

import Login from './Login';
import NavBar from '../navbar/NavBar'

import PetCard from './PetCard';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Modal,
    TouchableHighlight,
    Dimensions,
    Image
} from 'react-native'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true
        }
    }

    cardRemoval = (card) => {}

    getPets = (update) => {
        console.log('getPets here');
        this.props.updateMain(update)
    }

    componentDidMount() {
        axios.get('http://138.197.144.223/api/').then((res) => {
            console.log(res)
            let petData = res.data
            this.getPets(petData)
        }).catch((err) => {
            console.error('why?', err);
        })

    }

    updateYes = (card) => {
        console.log(this.props.user)
        console.log(card)
        let userParsed = Number(this.props.user.userId)
        console.log(userParsed, card.uniq_id)
        const yesBody = {
            user_id: userParsed,
            swipee: card.uniq_id,
            liked: true
        }
        console.log(yesBody)
        axios.post('http://138.197.144.223/api/seen',  yesBody)
            .then((res) => {
                console.log(res)
                return res
            })
            .catch((err) => {
            console.error(err)
            })
    }



    render() {
        let {width, height} = Dimensions.get('window')
        return (

            <View>

              <NavBar></NavBar>

                <Modal
                  transparent={false}
                  visible={this.props.user ? false : true}
                  // visible={true}
                >
                  <View
                    style={{flex: 1, alignItems: "center", justifyContent: "center", width: width, height: height, backgroundColor: 'white'}}
                  >

                    <Login />

                  </View>

                </Modal>

                <View style={{
                    marginTop: 0,
                    alignSelf: 'center',

                }}>

                    <SwipeCards
                      cards={this.props.cards}
                      renderCard={(cardData) => <PetCard { ...cardData }/>}
                      handleYup={(card) => {
                        this.cardRemoval(card)
                        this.updateYes(card)
                        this.props.cardAccepted(card)}


                      }
                      handleNope={(card) => {
                        this.cardRemoval(card)
                        this.props.cardDeclined(card)}
                      }
                      cardRemoved={(card) => this.cardRemoval(card)}
                      onClickHandler={() => console.log("stuff")}
                    />
                </View>

            </View>

        )
    }
}

mapStateToProps = (state) => {
    console.log(state)
    return {
      cards: state.mainPage.cards
      , user: state.login.user
    }
}

const mapDispatchToActionCreators = {
    updateMain: updateMain,
    cardDeclined: cardDeclined,
    cardAccepted: cardAccepted
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Main)
