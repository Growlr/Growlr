import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import { updateSwiperId } from '../../actions/updateMainPageActions'
import { editPet, updatePet, updateMyPets } from '../../actions/updateOwnerPageActions'
import axios from 'axios'
import { View, Text, Dimensions, TouchableHighlight, Image, Modal, TextInput, ScrollView} from 'react-native'

class OwnerCard extends Component{
    state = {
        modalVisible: false,
    };

    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }

    editPetInfo = () => {
        console.log(this.props.uniq)
        const editPetData = {
            source_link: this.props.pet.edit_source_link,
            img_link: this.props.pet.edit_img_link,
            pet_id: this.props.pet.edit_pet_id,
            gender: this.props.pet.edit_gender,
            breed: this.props.pet.edit_breed,
            color: this.props.pet.edit_color,
            age: this.props.pet.edit_age,
            description: this.props.pet.edit_description,
            pet_name: this.props.pet.edit_pet_name
        };
        console.log(editPetData)
        axios.put(`http://138.197.144.223/api/pet/${this.props.uniq}`, editPetData)
            .then((res) => {
                axios.get(`http://138.197.144.223/api/myPets/${this.props.user.fid}`)
                    .then((res) => {
                        console.log(res.data)
                        let myPets = res.data
                        this.props.updateMyPets(myPets)

                    })
            })
    }

    render(){
    let {width, height} = Dimensions.get('window')
        return(
            <View style={{ width: 120, height: 180, borderRadius: 8, borderWidth: 1, borderColor: 'lightgray', overflow: 'hidden', backgroundColor: 'white', marginTop: 10, marginRight: 25, marginLeft: 25 }} >
                <TouchableHighlight onPress={() => {
                    console.log(this.props.uniq)
                    this.props.updateSwiperId({ id: this.props.uniq })
                    Actions.mainView()
                }}>
                    <Image style={{ height: 120 , width: 120 }}  source={{uri: this.props.imgurl ? this.props.imgurl: 'http://vignette3.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png/revision/latest/scale-to-width-down/480?cb=20170219125728'}}/>
                </TouchableHighlight>
                <View style={{paddingTop: 4, paddingLeft: 5}}>
                    <Text style={{fontSize: 9}}><Text style={{fontWeight: 'bold', fontSize: 10}}>{this.props.name},</Text> {this.props.age}</Text>
                    <Text style={{ fontSize: 8, color: 'gray' }}>{this.props.breed}</Text>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Text onPress={() => {
                        console.log(this.props)
                        this.props.editPet({
                            edit_img_link: this.props.imgurl
                        ,   edit_pet_id: this.props.pet_id
                        ,   edit_gender: this.props.gender
                        ,   edit_breed: this.props.breed
                        ,   edit_color: this.props.color
                        ,   edit_age: this.props.age
                        ,   edit_description: this.props.description
                        ,   edit_pet_name: this.props.name
                        ,   edit_owner_id: this.props.user.fid

                        })
                        console.log(this.props)
                        this.setModalVisible(true)
                    }}>Edit</Text>
                </View>
                <View style={{marginTop: 22}}>
                    <Modal
                        transparent={false}
                        visible={this.state.modalVisible}
                    >



                        <ScrollView style={{ width: width, backgroundColor: 'white' }}>

                            <View style={{ height: 240, width}}>
                                    <TouchableHighlight style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent'}} onPress={() => this.setModalVisible(false)}>
                                        <Image style={{ width, flex: 1}} source={{uri: this.props.pet.edit_img_link ? this.props.pet.edit_img_link: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                    </TouchableHighlight>
                            </View>


                            <View style={{paddingTop: 20, paddingLeft: 15, paddingRight: 15 }}>
                                    <Text onPress={() => {
                                        this.editPetInfo()
                                        this.setModalVisible(false)

                                    }}>Edit Pet</Text>
                                <Text style={{ marginTop: 15}}>Image Link</Text>
                                    <View style={{ height: 40, width: width, flexDirection: 'row', alignItems: 'center'}}>
                                        <TextInput
                                            placeholder="Enter Image Link"
                                            autoCorrect={false}
                                            style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                            value={this.props.pet.edit_img_link}
                                            onChangeText={(value) => this.props.updatePet({ prop: 'edit_img_link', value})}
                                        />
                                    </View>
                                <Text style={{ marginTop: 15}}>Pet Name</Text>
                                <View style={{ height: 40, width: width, flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        placeholder="Enter Pet Name"
                                        autoCorrect={false}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.edit_pet_name}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'edit_pet_name', value})}
                                    />
                                </View>
                                <Text style={{ marginTop: 15}}>Age</Text>
                                <View style={{ height: 40, width: width, flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        placeholder="Enter Age"
                                        autoCorrect={false}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.edit_age}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'edit_age', value})}
                                    />
                                </View>
                                <Text style={{ marginTop: 15}}>Gender</Text>
                                <View style={{ height: 40, width: width, flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        placeholder="Enter Gender"
                                        autoCorrect={false}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.edit_gender}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'edit_gender', value})}
                                    />
                                </View>
                                <Text style={{ marginTop: 15}}>Breed</Text>
                                <View style={{ height: 40, width: width, flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        placeholder="Enter Breed"
                                        autoCorrect={false}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.edit_breed}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'edit_breed', value})}
                                    />
                                </View>
                                <Text style={{ marginTop: 15}}>Color</Text>
                                <View style={{ height: 40, width: width, flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        placeholder="Enter Color"
                                        autoCorrect={false}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.edit_color}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'edit_color', value})}
                                    />
                                </View>
                                <Text style={{ marginTop: 15}}>Description</Text>
                                <View style={{ height: 200, width, flexDirection: 'row', alignItems: 'center'}}>
                                    <TextInput
                                        placeholder="Enter Description"
                                        autoCorrect={false}
                                        multiline={true}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.edit_description}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'edit_description', value})}
                                    />
                                </View>




                                </View>

                        </ScrollView>
                    </Modal>
                </View>
            </View>
        )
    }
}
mapStateToProps = (state) => {
    return {
            cards: state.mainPage.cards
        ,   user: state.login.user
        ,   pet: state.ownerPage
    }
}

const mapDispatchToActionCreators = {
        updateSwiperId: updateSwiperId
    ,   editPet: editPet
    ,   updatePet: updatePet
    ,   updateMyPets: updateMyPets

}
export default connect(mapStateToProps, mapDispatchToActionCreators)(OwnerCard);


