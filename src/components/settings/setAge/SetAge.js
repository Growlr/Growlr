import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Slider,
    Switch
} from 'react-native'


import MultiSlider from '../../../../node_modules/react-native-multi-slider/Slider.js';
import customMarker from '../../../../node_modules/react-native-multi-slider/customMarker.js';


class SetAge extends Component {

    SliderOneValuesChangeStart = ()=>{
      this.props.updateSettings({sliderChanging:true})
    }
    SliderOneValuesChange = (values)=>{
      this.props.updateSettings({setAgeLow:values[0]})
      this.props.updateSettings({setAgeHigh:values[1]})
    }
    SliderOneValuesChangeFinish = ()=>{
      this.props.updateSettings({sliderChanging:false})
    }
    _setAge = (value) => {
      this.props.updateSettings({setAge:value})
    }

    render() {

        return (

            <View style={[styles.container, styles.radius, {marginBottom: 5}]}>

                {/* ----- Start Age Option ----  */}

                <View style={[styles.default, {height: 70}]}>

                    <Text>AgeMultiSlider - Low:{this.props.setAgeLow} - High:{this.props.setAgeHigh}  </Text>
                    <Text></Text>
                    <MultiSlider
                      values={[10,90]}
                      min={this.props.setAgeMin}
                      max={this.props.setAgeMax}
                      sliderLength={300}
                      trackStyle = 	{{ borderRadius: 7, height: 4 }}
                      selectedStyle = {{backgroundColor: '#F16A6A'}}
                      unselectedStyle = {{backgroundColor: '#F5F5F5'}}
                      markerStyle = {{
                        height:20,
                        width: 20,
                        borderRadius: 15,
                        backgroundColor:'#F16A6A',
                        borderWidth: 0.5,
                        borderColor: '#FFF'}}
                      pressedMarkerStyle = {{backgroundColor:'#F16A6A'}}
                      onValuesChangeStart={this.SliderOneValuesChangeStart}
                      onValuesChange={this.SliderOneValuesChange}
                      onValuesChangeFinish={this.SliderOneValuesChangeFinish}

                    />

                </View>
                {/* ----- End Age Option ----  */}
            </View>
        )
    }
}

mapStateToProps = (state) => {
  console.log(state);
    return {
      setAge: state.settingsPage.setAge,
      setAgeLow: state.settingsPage.setAgeLow,
      setAgeHigh: state.settingsPage.setAgeHigh,
      setAgeMin: state.settingsPage.setAgeMin,
      setAgeMax: state.settingsPage.setAgeMax,
      showOnGrowlr: state.settingsPage.showOnGrowlr
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(SetAge)
