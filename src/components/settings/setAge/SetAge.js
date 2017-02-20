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

            <View style={styles.container}>

                {/* ----- Start Age Option ----  */}

                <View style={[styles.default, {height: 70}]}>

                    <Text>AgeMultiSlider - Low:{this.props.setAgeLow} - High:{this.props.setAgeHigh}  </Text>
                    <Text></Text>
                    <MultiSlider
                      values={[10,90]}
                      min={this.props.setAgeMin}
                      max={this.props.setAgeMax}
                      sliderLength={300}
                      onValuesChangeStart={this.SliderOneValuesChangeStart}
                      onValuesChange={this.SliderOneValuesChange}
                      onValuesChangeFinish={this.SliderOneValuesChangeFinish}

                    />

                    {/* ---- if we want to only use the default slider props
                    uncomment the code below ----- */}

                    {/* <Text>Age:{this.props.setAge}</Text> */}

                    {/* <Slider
                      step= {1}
                      value= {this.props.setAge}
                      minimumValue={this.props.setAgeMin}
                      maximumValue={this.props.setAgeMax}
                      onValueChange={(value) => this._setAge(value)}
                    ></Slider> */}

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
    row: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FDF7EB'
    },
    default: {
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: '#fff'
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(SetAge)
