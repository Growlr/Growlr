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
        //
        //
        // getUserInfo = () => {
        //   let postBody = {}
        //   console.log('getUserInfo Firing');
        //   console.log(this.props);
        //     axios.get(`http://138.197.144.223/api/user/${this.props.user.userId}`)
        //         .then((res) => {
        //             this.props.updateLogin({user: res.data})
        //         })
        //         .catch((err) => {
        //           console.log('heres the catch');
        //         axios.get(`https://graph.facebook.com/v2.8/${this.props.user.credentials.userId}?fields=first_name,last_name,email,picture,gender&redirect=false&access_token=${this.props.user.credentials.token}`)
        //           .then((res) => {
        //             console.log(res);
        //              return postBody = {
        //               fid: res.data.id,
        //               firstname: res.data.first_name,
        //               lastname: res.data.last_name,
        //               email: res.data.email,
        //               gender: res.data.gender,
        //               image: res.data.picture.data.url
        //             }
        //           }).then((postBody) => {
        //             console.log(postBody);
        //             axios.post(`http://138.197.144.223/api/user/${this.props.user.credentials.userId}`, postBody)
        //             .then((res) => {
        //               console.log('wut it is');
        //               console.log(res);
        //             })
        //           }
        //             )
        //         console.error(err)
        //         })
        // }

    cardRemoval = (card) => {}

    getPets = (update) => {
        console.log('getPets here');
        this.props.updateMain(update)
    }

    componentDidMount() {
        axios.get('http://138.197.144.223/api/').then((res, err) => {
            let petData = res.data
            this.getPets(petData)
        }).catch((err) => {
            console.error('why?', err);
        })
}

    updateYes = (card) => {
      //Added credentials to the statment in the Number () -- also in the updateNo method
        let userParsed = Number(this.props.user.credentials.userId)
        console.log(userParsed, card.uniq_id)
        const yesBody = {
            user_id: userParsed,
            swipee: card.uniq_id,
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
        let userParsed = Number(this.props.user.credentials.userId)
        console.log(userParsed, card.uniq_id)
        const noBody = {
            user_id: userParsed,
            swipee: card.uniq_id,
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

    // componentDidUpdate(){
    //   this.getUserInfo()
    // }



    render() {
        let {width, height} = Dimensions.get('window')
        return (

            <View>

              <NavBar></NavBar>

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
                      cards={this.props.cards}
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
