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
                <View style={styles.container}>

                    {/* ----- Start Show On Growlr Option ----  */}

                    <View  style={[styles.default, {height: 70}]}>
                        <Text>Show me on Growlr</Text>
                        <Switch
                          onValueChange={(value) => this._ToggleShowMeOnGrowlr(value)}
                          value={this.props.showOnGrowlr}
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(OnGrowlr)
