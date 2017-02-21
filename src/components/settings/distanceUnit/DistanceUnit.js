import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.default, {height: 100}]}>
                    <Button style={styles.row} title="Kilomiters"></Button>
                    <Button style={styles.row} title="Miles"></Button>
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
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    default: {
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: '#fff'
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
