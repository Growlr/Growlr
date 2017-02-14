import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {StyleSheet, Text, View, TextInput, Image, ScrollView, Dimensions, TouchableHighlight} from 'react-native'

class Main extends Component {


    render() {
        let {height, width} = Dimensions.get('window');
        return (
            <View>
                <TouchableHighlight onPress={Actions.mainView}>
                <Image
                    style={{ alignSelf: 'center', width: width, height: height/2 }}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                </TouchableHighlight>
                <View style={{ paddingTop: 15, paddingLeft: 15, paddingRight: 15 }}>
                    <Text onPress={Actions.mainView} style={{ paddingBottom: 5 }}>Name, Age</Text>
                    <Text style={{ color: 'gray', fontSize: 10, paddingBottom: 15 }}>Distance</Text>
                    <ScrollView style={{ borderTopWidth: 1, borderColor: '#ddd', paddingTop: 15 }}>
                        <Text style={{ lineHeight: 14.5, fontSize: 15 }}>Pellentesque in ornare nibh. Praesent rutrum rutrum lectus. Curabitur lobortis vitae lacus nec dictum. Etiam in dui egestas, tincidunt sem ac, semper tortor. Praesent dui ante, elementum vel dapibus aliquam, rhoncus ut felis. Integer a cursus velit. Maecenas vel mauris tincidunt, congue orci id, efficitur lacus. Vestibulum sollicitudin nulla sit amet mollis dapibus. In vitae neque egestas, sagittis enim commodo, auctor diam. Curabitur laoreet fringilla odio a tempor. Aenean lobortis lobortis pellentesque. Fusce suscipit, sapien a viverra feugiat, quam ex ultricies nisl, ut auctor sapien leo sed urna. Cras sollicitudin fermentum suscipit.

Sed vitae mattis urna. Praesent posuere sem lorem, eget aliquet nulla varius maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur diam turpis, vehicula a luctus vitae, imperdiet at leo. Integer ac quam at sem lacinia rutrum ac a diam. Fusce hendrerit sem sit amet lorem tincidunt ultrices. Etiam pharetra odio felis, quis suscipit massa elementum sit amet. Cras laoreet nibh vitae nulla vestibulum, quis faucibus augue malesuada. In dignissim sollicitudin finibus. Sed justo augue, vehicula id dictum eget, laoreet eget augue. Cras bibendum gravida enim in condimentum. Donec sed felis ut ligula bibendum hendrerit. Donec rutrum ultricies posuere.

Curabitur luctus consequat dictum. Sed vulputate ornare justo, ut fringilla felis efficitur id. Aliquam vulputate urna ut lorem ultrices condimentum. Nam eget nibh lorem. Phasellus sagittis sem scelerisque, sodales nibh ac, tempor lorem. Nam a vulputate risus. In vel turpis feugiat, viverra quam ut, finibus neque. Vestibulum tincidunt, felis nec egestas tincidunt, ipsum tortor commodo mi, ac tempor dolor tellus id lorem. Quisque et egestas orci. Curabitur pharetra justo tincidunt accumsan mattis. Vivamus vehicula massa ut nisi commodo varius. Phasellus efficitur molestie sapien, ac commodo est tincidunt in. Phasellus bibendum mauris eget molestie pretium. Sed imperdiet est et diam elementum, eget pretium nibh placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt commodo tristique. Sed pretium varius mollis. Sed ac egestas orci. Aenean lorem libero, pellentesque ac turpis nec, porta laoreet magna. Aliquam posuere sollicitudin libero, vitae hendrerit ex molestie ut. Duis elementum ultricies sapien, in egestas velit vehicula et. Mauris facilisis vestibulum orci ac dignissim.</Text>
                    </ScrollView>
                </View>

            </View>

        )
    }
}

// mapStateToProps = (state) => {
//     return {userInput: state.landingPage.userInput}
// }

const mapDispatchToActionCreators = {
    // updateMain: updateMain
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Main)
