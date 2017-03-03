import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import {updatePet, updateMyPets, editPet} from '../../actions/updateOwnerPageActions'
import {updateSwiperId} from '../../actions/updateMainPageActions'
import axios from 'axios'

import OwnerCard from './OwnerCard'
import { View, ScrollView, Text, Dimensions, ListView, Modal, TouchableHighlight, Image, TextInput } from 'react-native'

class Owner extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }

    createNewPet = () => {
        console.log('creating pet')
        const petBody = {
            source_link: this.props.pet.source_link,
            img_link: this.props.pet.img_link,
            pet_id: this.props.pet.pet_id,
            gender: this.props.pet.gender,
            breed: this.props.pet.breed,
            color: this.props.pet.color,
            age: this.props.pet.age,
            description: this.props.pet.description,
            pet_name: this.props.pet.pet_name,
            owner_id: Number(this.props.user.fid)
        };
        console.log(petBody)
        axios.post('http://138.197.144.223/api/pet', petBody)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    componentDidMount(){
        if(this.props.myPets == 0){
            axios.get(`http://138.197.144.223/api/myPets/${this.props.user.fid}`)
                .then((res) => {
                console.log(res.data)
                    let myPets = res.data
                    this.props.updateMyPets(myPets)
                })
        }
        this.props.updateSwiperId({id: this.props.user.fid})
    }



    render(){
        let {width, height} = Dimensions.get('window')
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id !== r2.id
        });

        const items = this.props.myPets


        return (
            <View>
            <View style={{ alignItems: 'center', backgroundColor: 'lightgray', borderRadius: 8 }}><Text onPress={() => this.setModalVisible(true)}>Add Pet</Text></View>
            <ListView
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}
                dataSource={dataSource.cloneWithRows(items)}
                enableEmptySections={true}
                renderRow={(rowData) => <OwnerCard uniq={rowData.uniq_id} color={rowData.color} description={rowData.description} name={rowData.pet_name} gender={rowData.gender} age={rowData.age} breed={rowData.breed} imgurl={rowData.img_link}/>}
            />
                <View style={{marginTop: 22}}>
                    <Modal
                        transparent={false}
                        visible={this.state.modalVisible}
                    >



                        <ScrollView style={{ width: width, backgroundColor: 'white' }}>

                            <View>

                                    <TouchableHighlight style={{ justifyContent: 'center', backgroundColor: 'transparent', height: 240, width}} onPress={() => this.setModalVisible(false)}>
                                        <Image style={{ width, flex: 1}} source={{uri: this.props.pet.img_link}}/>
                                    </TouchableHighlight>

                            </View>



                            <View style={{paddingTop: 20, paddingBottom: 15, borderBottomWidth: 1, borderColor: 'lightgray' }}>
                                <View style={{ alignItems: 'center'}} >
                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'lightgray', width: 150, height: 35, borderRadius: 8 }}>
                                <Text style={{ flexDirection: 'column'}} onPress={() => {this.createNewPet() }}>Create Pet</Text>
                                </View>
                                </View>
                                <Text style={{ marginTop: 15, marginLeft: 25}}>Image Link</Text>
                                <View style={{ height: 40, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25}}>
                                    <TextInput
                                        placeholder="Enter Image Link"
                                        autoCorrect={false}
                                        style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                        value={this.props.pet.img_link}
                                        onChangeText={(value) => this.props.updatePet({ prop: 'img_link', value})}
                                    />
                                </View>
                            </View>
                            <Text style={{ marginTop: 15, marginLeft: 25}}>Pet Name</Text>
                            <View style={{ height: 40, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25}}>
                                {/*<Text style={{ fontSize: 18, paddingLeft: 20, }}>Enter Name</Text>*/}
                                <TextInput
                                    placeholder="Enter Pets Name"
                                    autoCorrect={false}
                                    style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                    value={this.props.pet.pet_name}
                                    onChangeText={(value) => this.props.updatePet({ prop: 'pet_name', value})}
                                />
                            </View>
                            <Text style={{ marginTop: 15, marginLeft: 25}}>Breed</Text>
                            <View style={{ height: 40, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
                                <TextInput
                                    placeholder="Enter Breed"
                                    autoCorrect={false}
                                    style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                    value={this.props.pet.breed}
                                    onChangeText={(value) => this.props.updatePet({ prop: 'breed', value})}
                                />
                            </View>

                            <Text style={{ marginTop: 15, marginLeft: 25}}>Color</Text>
                            <View style={{ height: 40, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
                                <TextInput
                                    placeholder="Enter Color"
                                    autoCorrect={false}
                                    style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                    value={this.props.pet.color}
                                    onChangeText={(value) => this.props.updatePet({ prop: 'color', value})}
                                />
                            </View>

                            <Text style={{ marginTop: 15, marginLeft: 25}}>Age</Text>
                            <View style={{ height: 40, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
                                <TextInput
                                    placeholder="Enter Age"
                                    autoCorrect={false}
                                    style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                    value={this.props.pet.age}
                                    onChangeText={(value) => this.props.updatePet({ prop: 'age', value})}
                                />
                            </View>

                            <Text style={{ marginTop: 15, marginLeft: 25}}>Gender</Text>
                            <View style={{ height: 40, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
                                <TextInput
                                    placeholder="Enter Gender"
                                    autoCorrect={false}
                                    style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                    value={this.props.pet.gender}
                                    onChangeText={(value) => this.props.updatePet({ prop: 'gender', value})}
                                />
                            </View>
                            <Text style={{ marginTop: 15, marginLeft: 25}}>Description</Text>
                            <View style={{ height: 200, width, flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
                                <TextInput
                                    placeholder="Enter Description"
                                    autoCorrect={false}
                                    multiline={true}
                                    style={{color: '#000', paddingRight: 5,paddingLeft: 5,fontSize: 18,lineHeight: 23, width: width - 40, borderWidth: 1, borderColor: 'lightgray'}}
                                    value={this.props.pet.description}
                                    onChangeText={(value) => this.props.updatePet({ prop: 'description', value})}
                                />
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
            pet: state.ownerPage
        ,   cards: state.mainPage.cards
        ,   user: state.login.user
        ,   myPets: state.ownerPage.myPets
    }
}

const mapDispatchToActionCreators = {
        updatePet: updatePet
    ,   updateSwiperId: updateSwiperId
    ,   updateMyPets: updateMyPets
    ,   editPet: editPet


}


export default connect(mapStateToProps, mapDispatchToActionCreators)(Owner);
