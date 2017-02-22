import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import { updateSwiperId } from '../../actions/updateMainPageActions'
import { View, Text, Dimensions, TouchableHighlight, Image, Modal, TextInput} from 'react-native'

class OwnerCard extends Component{
    state = {
        modalVisible: false,
    };

    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }

    render(){
    let {width, height} = Dimensions.get('window')
        return(
            <View style={{ width: 120, height: 180, borderRadius: 8, overflow: 'hidden', backgroundColor: 'white', marginTop: 10, marginRight: 25, marginLeft: 25 }} >
                <TouchableHighlight onPress={() => {
                    this.props.updateSwiperId({ id: this.props.pet_id})
                    Actions.mainView()
                }}>
                    <Image style={{ height: 120 , width: 120 }}  source={{uri: this.props.imgurl}}/>
                </TouchableHighlight>
                <View style={{paddingTop: 4, paddingLeft: 5}}>
                    <Text style={{fontSize: 9}}><Text style={{fontWeight: 'bold', fontSize: 10}}>{this.props.name},</Text> {this.props.age}</Text>
                    <Text style={{ fontSize: 8, color: 'gray' }}>{this.props.breed}</Text>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Text onPress={() => this.setModalVisible(true)}>Edit</Text>
                </View>
                <View style={{marginTop: 22}}>
                    <Modal
                        transparent={false}
                        visible={this.state.modalVisible}
                    >



                        <View style={{ width: width, backgroundColor: 'white' }}>

                            <View style={{ height: 240, width}}>

                                    <TouchableHighlight style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent'}} onPress={() => this.setModalVisible(false)}>
                                        <Image style={{ width, flex: 1}} source={{uri: this.props.imgurl}} />
                                    </TouchableHighlight>

                            </View>


                            <View style={{paddingTop: 20, paddingLeft: 15, borderBottomWidth: 1, borderColor: 'lightgray' }}>

                                <TextInput style={{height: 40}} value={this.props.name} />
                                <Text style={{ paddingBottom: 5, fontSize: 12, color: 'gray' }}>Occupation</Text>
                                <Text style={{ paddingBottom: 15, fontSize: 10, color: 'gray' }}>Distance from</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
}
mapStateToProps = (state) => {
    return {
        cards: state.mainPage.cards
        , user: state.login.user
    }
}

const mapDispatchToActionCreators = {
    updateSwiperId: updateSwiperId

}
export default connect(mapStateToProps, mapDispatchToActionCreators)(OwnerCard);


