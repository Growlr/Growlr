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
        <View style={{ width: width - 20, borderRadius: 8, overflow: 'hidden', backgroundColor: 'white' }} >
            <TouchableHighlight onPress={() => this.setModalVisible(true)}>
            <Image style={{ height: height/2 + 40 , width: width - 20 }}  source={{uri: this.props.mainImage}}/>
            </TouchableHighlight>
            <View style={{paddingTop: 20, paddingLeft: 15}}>
                <Text><Text style={{fontWeight: 'bold'}}>{this.props.name},</Text> {this.props.age}</Text>
                <Text style={{ paddingBottom: 15, fontSize: 14, color: 'gray' }}>{this.props.desc}</Text>
            </View>





        <View style={{marginTop: 22}}>
            <Modal
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <View style={{ width: width, backgroundColor: 'white' }}>
                    <TouchableHighlight onPress={() => this.setModalVisible(false)}>
                        <Image style={{ height: height/2 + 40 , width: width }}  source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}/>
                    </TouchableHighlight>
                    <View style={{paddingTop: 20, paddingLeft: 15, borderBottomWidth: 1, borderColor: 'lightgray' }}>
                        <Text><Text style={{fontWeight: 'bold'}}>Jacob,</Text> 23</Text>
                        <Text style={{ paddingBottom: 5, fontSize: 12, color: 'gray' }}>Occupation</Text>
                        <Text style={{ paddingBottom: 15, fontSize: 10, color: 'gray' }}>Distance from</Text>
                    </View>
                </View>
            </Modal>
            </View>
        </View>
        );
    }
};



export default PetCard