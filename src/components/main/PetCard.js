import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableHighlight, Modal } from 'react-native'



class PetCard extends Component{
    state = {
        modalVisible: false,
    };

    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }



    render(){
        let {width, height} = Dimensions.get('window');

    return (
        <View style={{ width: width - 20, borderRadius: 8, overflow: 'hidden', backgroundColor: 'white', marginTop: -133 }} >
            <TouchableHighlight onPress={() => this.setModalVisible(true)}>
            <Image style={{ height: height/2 + 40 , width: width - 20 }}  source={{uri: (this.props.img_link) ? this.props.img_link: this.props.fb_img}}/>
            </TouchableHighlight>
            <View style={{paddingTop: 20, paddingLeft: 15}}>
                <Text><Text style={{fontWeight: 'bold'}}>{this.props.pet_name ? this.props.pet_name: this.props.firstname},</Text> {this.props.age}</Text>
                <Text style={{ paddingBottom: 15, fontSize: 14, color: 'gray' }}>{this.props.breed ? this.props.breed: this.props.email}</Text>
            </View>





        <View style={{marginTop: 22}}>
            <Modal
                transparent={false}
                visible={this.state.modalVisible}
            >



                <View style={{ width: width, height, backgroundColor: 'white' }}>

                        <View style={{ height: 240}}>

                                <TouchableHighlight style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent'}} onPress={() => this.setModalVisible(false)}>
                                    <Image style={{ width, flex: 1}} source={{uri: (this.props.img_link) ? this.props.img_link: this.props.fb_img}} />
                                </TouchableHighlight>

                        </View>


                    <View style={{paddingTop: 20, paddingLeft: 15, borderBottomWidth: 1, borderColor: 'lightgray' }}>

                        <Text><Text style={{fontWeight: 'bold'}}>{this.props.pet_name ? this.props.pet_name: this.props.firstname},</Text> {this.props.age}</Text>
                        <Text style={{ paddingBottom: 5, fontSize: 12, color: 'gray' }}>Occupation</Text>
                        <Text style={{ paddingBottom: 15, fontSize: 10, color: 'gray' }}>Distance from</Text>
                    </View>
                    <View>
                        <Text> {this.props.description}</Text>
                    </View>
                </View>
            </Modal>
            </View>
        </View>
        );
    }

};



export default PetCard
