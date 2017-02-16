import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSettings} from '../../actions/updateSettingsPageActions';
import {Actions} from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Slider,
    Switch
} from 'react-native'

import ShowMe from './showMe/ShowMe';

import MultiSlider from '../../../node_modules/react-native-multi-slider/Slider.js';
import customMarker from '../../../node_modules/react-native-multi-slider/customMarker.js';


class Settings extends Component {

    _ToggleShowMeOnGrowlr = (value)=>{
      this.props.updateSettings({showOnGrowlr:value})
    }
    _ToggleNotificationNewMatch = (value)=>{
      this.props.updateSettings({notificationNewMatch:value})
    }
    _ToggleNotificationMessages = (value)=>{
      this.props.updateSettings({notificationMessages:value})
    }
    _ToggleNotificationMessageLikes = (value)=>{
      this.props.updateSettings({notificationMessageLikes:value})
    }
    _TogglenotificationSuperLikes = (value)=>{
      this.props.updateSettings({notificationSuperLikes:value})
    }
    _ToggleNotificationInAppVibrations = (value)=>{
      this.props.updateSettings({notificationInAppVibrations:value})
    }
    _TogglenotificationInAppSounds = (value)=>{
      this.props.updateSettings({notificationInAppSounds:value})
    }
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
    _setSearchDistance = (value) => {
      this.props.updateSettings({searchDistance:value})
    }
    _setAge = (value) => {
      this.props.updateSettings({setAge:value})
    }

    updateUserInput() {}

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>

                    {/* ----- Start Show Me Option ----  */}

                    <ShowMe></ShowMe>

                    {/* ----- End Show Me Option ----  */}

                    {/* ----- Start Search Distance Option ----  */}

                    <View style={[styles.default, {height: 70}]}>
                        <Text>Search Distance</Text>
                        <Text> {this.props.searchDistance} </Text>

                        <Slider
                          step= {1}
                          value= {this.props.searchDistance}
                          minimumValue={this.props.searchDistanceMin}
                          maximumValue={this.props.searchDistanceMax}
                          onValueChange={(value) => this._setSearchDistance(value)}
                        ></Slider>
                    </View>

                    {/* ----- End Search Distance Option ----  */}

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

                    {/* ----- Start Show On Growlr Option ----  */}


                    <View  style={[styles.default, {height: 70}]}>
                        <Text>Show me on Growlr</Text>
                        <Switch
                          onValueChange={(value) => this._ToggleShowMeOnGrowlr(value)}
                          value={this.props.showOnGrowlr}
                        />
                    </View>

                    {/* ----- End Show On Growlr Option ----  */}

                    <View  style={[styles.default, {height: 280}]}>
                        <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                          <Text>New Matches</Text>
                          <Switch
                            onValueChange={(value) => this._ToggleNotificationNewMatch(value)}
                            value={this.props.notificationNewMatch}
                          />
                        </View>
                        <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                          <Text>Messages</Text>
                          <Switch
                            onValueChange={(value) => this._ToggleNotificationMessages(value)}
                            value={this.props.notificationMessages}
                          />
                        </View>
                        <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                          <Text>Message Likes</Text>
                          <Switch
                            onValueChange={(value) => this._ToggleNotificationMessageLikes(value)}
                            value={this.props.notificationMessageLikes}
                          />
                        </View>
                        <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                          <Text>Super Likes</Text>
                          <Switch
                            onValueChange={(value) => this._TogglenotificationSuperLikes(value)}
                            value={this.props.notificationSuperLikes}
                          />
                        </View>
                        <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                          <Text>In-App Vibrations</Text>
                          <Switch
                            onValueChange={(value) => this._ToggleNotificationInAppVibrations(value)}
                            value={this.props.notificationInAppVibrations}
                          />
                        </View>
                        <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                          <Text>In-App Sounds</Text>
                          <Switch
                            onValueChange={(value) => this._TogglenotificationInAppSounds(value)}
                            value={this.props.notificationInAppSounds}
                          />
                        </View>


                    </View>
                    <View style={styles.default}>
                        <Text>Km. / Mi.</Text>
                    </View>
                    <View style={styles.default}>
                        <Text>Contact Us</Text>
                        <Text>Help & Support</Text>
                    </View>
                    <View style={styles.default}>
                        <Text>Legal</Text>
                        <Text>Licenses</Text>
                        <Text>Privecy Policy</Text>
                        <Text>Terms of Service</Text>
                    </View>
                    <View style={styles.default}>
                        <Text>Logout</Text>
                    </View>

                    <Text onPress={Actions.landingPage}>
                        Landing</Text>
                    <Text onPress={Actions.profileView}>
                        Profile</Text>
                    <Text onPress={Actions.mainView}>
                        Main</Text>
                    <Text onPress={Actions.matchView}>
                        Main</Text>

                </View>
            </ScrollView>
        )
    }
}

mapStateToProps = (state) => {
  console.log(state);
    return {
      searchDistance: state.settingsPage.searchDistance,
      searchDistanceMin: state.settingsPage.searchDistanceMin,
      searchDistanceMax: state.settingsPage.searchDistanceMax,
      setAge: state.settingsPage.setAge,
      setAgeLow: state.settingsPage.setAgeLow,
      setAgeHigh: state.settingsPage.setAgeHigh,
      setAgeMin: state.settingsPage.setAgeMin,
      setAgeMax: state.settingsPage.setAgeMax,
      showOnGrowlr: state.settingsPage.showOnGrowlr,
      notificationNewMatch: state.settingsPage.notificationNewMatch,
      notificationMessages: state.settingsPage.notificationMessages,
      notificationMessageLikes: state.settingsPage.notificationMessageLikes,
      notificationSuperLikes: state.settingsPage.notificationSuperLikes,
      notificationInAppVibrations: state.settingsPage.notificationInAppVibrations,
      notificationInAppSounds: state.settingsPage.notificationInAppSounds
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
        marginTop: 64,
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
