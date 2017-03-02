import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import  { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Switch
} from 'react-native'

import Slider from 'react-native-slider';


class SearchDistance  extends Component {

    _setSearchDistance = (value) => {
      this.props.updateSettings({searchDistance:value})
    }


    updateUserInput() {}

    render() {

        return (

            <View style={[styles.container, styles.radius,{marginBottom: 5}]}>

                {/* ----- Start Search Distance Option ----  */}

                <View style={[styles.default, {}]}>
                    <View  style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                      <View style={{flex:1}}>
                        <Text style={[styles.fontDefault, styles.fontSubTitle]}>Search Distance</Text>
                      </View>
                      <View style={{flex:1}}>
                        <Text style={[styles.fontDefault, {alignSelf:'flex-end'}]}>{this.props.searchDistance}</Text>
                      </View>
                    </View>

                    <Slider
                      step= {1}
                      value= {this.props.searchDistance}
                      minimumValue={this.props.searchDistanceMin}
                      maximumValue={this.props.searchDistanceMax}
                      minimumTrackTintColor={'#F16A6A'}
                      maximumTrackTintColor={'#F5F5F5'}
                      thumbTintColor={'#F16A6A'}
                      trackStyle={{marginTop: -4}}
                      thumbStyle={{borderWidth:1, borderColor:'#fff'}}
                      onValueChange={(value) => this._setSearchDistance(value)}
                    ></Slider>
                </View>

                {/* ----- End Search Distance Option ----  */}

            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
      searchDistance: state.settingsPage.searchDistance,
      searchDistanceMin: state.settingsPage.searchDistanceMin,
      searchDistanceMax: state.settingsPage.searchDistanceMax,
    }
}

const mapDispatchToActionCreators = {
    updateSettings: updateSettings
};

const styles = StyleSheet.create({
  radius:{
    borderRadius: 5,
    shadowColor: "#CBCBCB",
    shadowOffset:{
      hight: 1
    },
    shadowRadius: 1,
    shadowOpacity: 100
  },
    row: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      marginBottom: 20,
    },
    fontDefault:{
      fontSize: 13
    },
    fontSubTitle:{
      color: '#F16A6A',
      fontWeight: "600",
    },
    fontParagraph:{
      color: '#555'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    default: {
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        height: 60,
        flex:1
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(SearchDistance)
