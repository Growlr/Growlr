import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {updateMain, cardDeclined, cardAccepted, updateSwiperId, updateHumans} from '../../actions/updateMainPageActions'
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
        this.props.updateMain(update)
    }
    getHumans = ( update ) => {
        this.props.updateHumans(update)
    }

    componentDidMount() {
        console.log(this.props)
        console.log(this.props.cards.length)
            console.log('getting pets')
        if(this.props.cards.length == 0) {
            axios.get('http://138.197.144.223/api/').then((res) => {
                console.log(res.data)
                let petData = res.data
                this.getPets(petData)
            }).catch((err) => {
                console.log('why?', err);
            })
        }


            console.log('getting humans')
            axios.get('http://138.197.144.223/api/humans')
                .then((res) => {
                console.log(res.data)
                let humanData = res.data
                    this.getHumans(humanData)
                })
    }

    updateYes = (card) => {
        console.log(card, this.props.user, this.props)
        let userParsed = Number(this.props.swiperId.id)
        if(!this.props.swiperId.id){
            userParsed = Number(this.props.user.fid)
        }

        const yesBody = {
            user_id: userParsed,
            swipee: card.uniq_id ? card.uniq_id: Number(card.fid),
            liked: true
        }
        console.log(yesBody)
        axios.post('http://138.197.144.223/api/seen/',  yesBody)
            .then((res) => {
                return res
            })
            .catch((err) => {
            console.error(err)
            })
    }

    updateNo = (card) => {
        console.log(card, this.props.user, this.props)
        let userParsed = Number(this.props.swiperId.id)
        if(!this.props.swiperId.id){
            userParsed = Number(this.props.user.fid)
        }

        const noBody = {
            user_id: userParsed,
            swipee: card.uniq_id ? card.uniq_id: Number(card.fid),
            liked: false
        }
        console.log(noBody)
        axios.post('http://138.197.144.223/api/seen',  noBody)
            .then((res) => {
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

              <NavBar />


                <View style={{marginTop: 68}}>
                    <Text onPress={() => {
                        console.log(this.props)
                        const id = Number(this.props.user.fid)
                        this.props.updateSwiperId({ id });
                        Actions.ownerView()
                    }}
                    >Change to Owner</Text>
                </View>
                <Modal
                  transparent={false}
                  visible={this.props.user ? false : true}
                  // visible={true}
                  // visible={false}
                >
                  <View
                    style={{flex: 1, alignItems: "center", justifyContent: "center", width: width, height: height, backgroundColor: 'white'}}
                  >
                    {/* <Image
                      source={'./Growlr Logo.png'} /> */}
                    <Login />
                  </View>
                </Modal>
                <View style={{
                    marginTop: 0,
                    alignSelf: 'center',

                }}>
                    <SwipeCards
                      cards={this.props.swiperId.id > 5555555 || !this.props.swiperId.id ? this.props.cards: this.props.humanCards}
                      renderCard={(cardData) => <PetCard { ...cardData }/>}
                      handleYup={(card) => {
                        this.cardRemoval(card)
                        this.updateYes(card)
                        this.props.cardAccepted(card)}
                      }
                      handleNope={(card) => {
                        this.cardRemoval(card)
                        this.updateNo(card)
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
    return {
        swiperId: state.mainPage.swiperId,
      cards: state.mainPage.cards
        , humanCards: state.mainPage.humanCards
      , user: state.login.user
    }
}

const mapDispatchToActionCreators = {
    updateMain: updateMain,
    cardDeclined: cardDeclined,
    cardAccepted: cardAccepted,
    updateSwiperId: updateSwiperId,
    updateHumans: updateHumans
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Main)
