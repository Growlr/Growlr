import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions }  from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Switch
} from 'react-native'

class OnGrowlr extends Component {

    _ToggleShowMeOnGrowlr = (value)=>{
      this.props.updateSettings({showOnGrowlr:value})
    }

    render() {
        return (
                <View style={[styles.container, styles.radius]}>

                    {/* ----- Start Show On Growlr Option ----  */}

                    <View  style={[styles.default]}>
                        <Text>Show me on Growlr</Text>
                        <Switch
                          onValueChange={(value) => this._ToggleShowMeOnGrowlr(value)}
                          value={this.props.showOnGrowlr}
                          onTintColor = "#F16A6A"
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
