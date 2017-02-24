import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import Switch from 'react-native-material-switch-finale'


class PetTypes extends Component {

    _ToggleDogs = (value)=>{
      this.props.updateSettings({searchDogs:value})
    }
    _ToggleCats = (value)=>{
      this.props.updateSettings({searchCats:value})
    }
    _ToggleBunnies = (value)=>{
      this.props.updateSettings({searchBunnies:value})
    }
    _ToggleHamsters = (value)=>{
      this.props.updateSettings({searchHamsters:value})
    }
    _ToggleExotic = (value)=>{
      this.props.updateSettings({searchExotic:value})
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

                <View  style={[styles.default, styles.height]}>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Dogs</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleDogs(value)}
                        value={this.props.Dogs}
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

                <View  style={[styles.default, styles.height]}>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Cats</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleCats(value)}
                        value={this.props.Cats}
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

                <View  style={[styles.default, styles.height]}>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Hamsters</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleHamsters(value)}
                        value={this.props.Hamsters}
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

                <View  style={[styles.default, styles.height]}>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Bunnies</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleBunnies(value)}
                        value={this.props.Bunnies}
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

                <View  style={[styles.default, styles.height]}>
                    <View  style={[styles.row, {height: 70, width:280, justifyContent:"space-between"}]}>
                      <Text>Exotic</Text>
                      <Switch
                        onValueChange={(value) => this._ToggleExotic(value)}
                        value={this.props.Exotic}
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

              <View >
                <Text> Discription text </Text>
                <Text> We welcome multi pet familes for, but if you want only to see specific types you can make a selection here</Text>
              </View>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
      Dogs: state.settingsPage.searchDogs,
      Cats: state.settingsPage.searchCats,
      Bunnies: state.settingsPage.searchBunnies,
      Hamsters: state.settingsPage.searchHamsters,
      Exotic: state.settingsPage.searchExotic,
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
    height: {
      height: 25
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    default: {
        margin: 10,
        height: 50,
        width: 300,
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(PetTypes)
