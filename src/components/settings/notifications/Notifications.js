import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import Switch from 'react-native-material-switch-finale'

class Notifications extends Component {


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

    render() {
      const switchProps = {
        padding: 10,
        inactiveButtonColor: '#ededed',
        activeButtonColor: '#F16A6A',
        activeBackgroundColor: '#FBD0D0',
        inactiveBackgroundColor: '#ccc',
        buttonShadow: {
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 1,
          shadowOffset: { height: 1, width: 0 },
        },
        buttonRadius: 10,
        switchWidth: 26,
        switchHeight: 13,
        buttonContent: null,
        enableSlide: true,
        switchAnimationTime: 200,
      }
        return (
            <View style={styles.container}>

                <View  style={[styles.default, {height: 280}]}>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>New Matches</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleNotificationNewMatch(value)}
                        value={this.props.notificationNewMatch}
                        inactiveButtonColor = {switchProps.inactiveButtonColor}
                        activeButtonColor = {switchProps.activeButtonColor}
                        activeBackgroundColor = {switchProps.activeBackgroundColor}
                        inactiveBackgroundColor = {switchProps.inactiveBackgroundColor}
                        onTintColor = {switchProps.onTintColor}
                        buttonRadius = {switchProps.buttonRadius}
                        switchWidth = {switchProps.switchWidth}
                        switchHeight = {switchProps.switchHeight}
                      />
                    </View>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Messages</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleNotificationMessages(value)}
                        value={this.props.notificationMessages}
                        inactiveButtonColor = {switchProps.inactiveButtonColor}
                        activeButtonColor = {switchProps.activeButtonColor}
                        activeBackgroundColor = {switchProps.activeBackgroundColor}
                        inactiveBackgroundColor = {switchProps.inactiveBackgroundColor}
                        onTintColor = {switchProps.onTintColor}
                        buttonRadius = {switchProps.buttonRadius}
                        switchWidth = {switchProps.switchWidth}
                        switchHeight = {switchProps.switchHeight}
                      />
                    </View>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Message Likes</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleNotificationMessageLikes(value)}
                        value={this.props.notificationMessageLikes}
                        inactiveButtonColor = {switchProps.inactiveButtonColor}
                        activeButtonColor = {switchProps.activeButtonColor}
                        activeBackgroundColor = {switchProps.activeBackgroundColor}
                        inactiveBackgroundColor = {switchProps.inactiveBackgroundColor}
                        onTintColor = {switchProps.onTintColor}
                        buttonRadius = {switchProps.buttonRadius}
                        switchWidth = {switchProps.switchWidth}
                        switchHeight = {switchProps.switchHeight}
                      />
                    </View>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Super Likes</Text>
                      <Switch
                        onValueChange={(value) => this._TogglenotificationSuperLikes(value)}
                        value={this.props.notificationSuperLikes}
                        inactiveButtonColor = {switchProps.inactiveButtonColor}
                        activeButtonColor = {switchProps.activeButtonColor}
                        activeBackgroundColor = {switchProps.activeBackgroundColor}
                        inactiveBackgroundColor = {switchProps.inactiveBackgroundColor}
                        onTintColor = {switchProps.onTintColor}
                        buttonRadius = {switchProps.buttonRadius}
                        switchWidth = {switchProps.switchWidth}
                        switchHeight = {switchProps.switchHeight}
                      />
                    </View>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>In-App Vibrations</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleNotificationInAppVibrations(value)}
                        value={this.props.notificationInAppVibrations}
                        inactiveButtonColor = {switchProps.inactiveButtonColor}
                        activeButtonColor = {switchProps.activeButtonColor}
                        activeBackgroundColor = {switchProps.activeBackgroundColor}
                        inactiveBackgroundColor = {switchProps.inactiveBackgroundColor}
                        onTintColor = {switchProps.onTintColor}
                        buttonRadius = {switchProps.buttonRadius}
                        switchWidth = {switchProps.switchWidth}
                        switchHeight = {switchProps.switchHeight}
                      />
                    </View>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>In-App Sounds</Text>
                      <Switch
                        onValueChange={(value) => this._TogglenotificationInAppSounds(value)}
                        value={this.props.notificationInAppSounds}
                        inactiveButtonColor = {switchProps.inactiveButtonColor}
                        activeButtonColor = {switchProps.activeButtonColor}
                        activeBackgroundColor = {switchProps.activeBackgroundColor}
                        inactiveBackgroundColor = {switchProps.inactiveBackgroundColor}
                        onTintColor = {switchProps.onTintColor}
                        buttonRadius = {switchProps.buttonRadius}
                        switchWidth = {switchProps.switchWidth}
                        switchHeight = {switchProps.switchHeight}
                      />
                    </View>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
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
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    default: {
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: '#fff'
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(Notifications)
