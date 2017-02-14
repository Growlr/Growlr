import React, {Component} from 'react'
import { View, Text, Image, TouchableHighlight, Dimensions } from 'react-native'

class NavBar extends Component {

    render(){
        let {width, height} = Dimensions.get('window')
        return (
            <View style={{ height: 50, paddingTop: 18}}>
                <TouchableHighlight onPress={this.props.leftButtonView}>
                    <Image style={{marginLeft: 5}} source={this.props.leftButton}/>
                </TouchableHighlight>
                <TouchableHighlight style={{ position: 'absolute', right: 5, top: 18}} onPress={this.props.rightButtonView}>
                    <Image  source={this.props.rightButton}/>
                </TouchableHighlight>
                <TouchableHighlight style={{ position: 'absolute', right: width/2 - 10, top: 18}} onPress={this.props.rightButtonView}>
                    <Image  source={this.props.rightButton}/>
                </TouchableHighlight>
            </View>
        )
    }
}
export default NavBar;