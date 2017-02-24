import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {updateMain, cardDeclined, cardAccepted, updateSwiperId, updateHumans, humanCardAccepted, humanCardDeclined} from '../../actions/updateMainPageActions'
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
        console.log(update)
        this.props.updateHumans(update)
    }

    componentDidMount() {
        if(this.props.cards == 0) {
            console.log(this.props.user, 'userid')
            axios.post('http://138.197.144.223/api/unSeen', {fid: 114537902401642})
                .then((res) => {
                    console.log(res.data)
                    let petData = res.data;
                    this.getPets(petData)
                })
        }

        if(this.props.swiperId.id < 5555555) {
            console.log('getting humans', this.props)
            console.log(this.props.swiperId.id)
            let petId = this.props.swiperId.id
            console.log(`http://138.197.144.223/api/humans/${petId}`)
            axios.get(`http://138.197.144.223/api/humans/${petId}`)
                .then((res) => {
                    console.log(res.data)
                    let humanData = res.data
                    this.getHumans(humanData)
                })
        }
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

                <View >
                    <Text style={{ position: 'absolute', bottom: 0}} onPress={() => {
                        console.log(this.props)
                        const id = Number(this.props.user.fid)
                        this.props.updateSwiperId({ id });
                        Actions.ownerView()
                    }}
                    >Change to Owner</Text>
                </View>
                <Modal
                  transparent={false}
                  //changed to default false so that stuffs would work until JoLo fixed stuffs
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
                         if(this.props.swiperId.id > 5555555 || !this.props.swiperId.id){
                            this.props.cardAccepted(card)
                        } else {
                            this.props.humanCardAccepted(card)
                        }
                      }}
                      handleNope={(card) => {
                        this.cardRemoval(card)
                        this.updateNo(card)
                        if(this.props.swiperId.id > 5555555 || !this.props.swiperId.id){
                            this.props.cardDeclined(card)
                        } else {
                            this.props.humanCardDeclined(card)
                        }
                      }
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(Main)
