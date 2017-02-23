import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions }  from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import Switch from 'react-native-material-switch-finale'

class OnGrowlr extends Component {

    _ToggleShowMeOnGrowlr = (value)=>{
      this.props.updateSettings({showOnGrowlr:value})
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
        console.log(switchProps.inactiveButtonColor);
        return (
                <View style={[styles.container, styles.radius, {marginBottom: 5}]}>

                    {/* ----- Start Show On Growlr Option ----  */}

                    <View  style={[styles.default]}>
                        <Text>Show me on Growlr</Text>
                        <Switch
                          onValueChange={(value) => this._ToggleShowMeOnGrowlr(value)}
                          value={this.props.showOnGrowlr}
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

        )
    }
}

mapStateToProps = (state) => {
  console.log(state);
    return {
      showOnGrowlr: state.settingsPage.showOnGrowlr,
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(OnGrowlr)
