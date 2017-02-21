import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

class Settings extends Component {
    render() {

        return (
            <View style={[styles.container, {height: 80}]}>
                <View style={styles.default}>
                    <Text>Legal</Text>
                    <Text>Licenses</Text>
                    <Text>Privecy Policy</Text>
                    <Text>Terms of Service</Text>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
      // ------ example of what do to put items on state -----
      // notificationNewMatch: state.settingsPage.notificationNewMatch,
    }
}

const mapDispatchToActionCreators = {
    updateSettings: updateSettings
};

const styles = StyleSheet.create({

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

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
