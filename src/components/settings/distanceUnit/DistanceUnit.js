import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../actions/updateSettingsPageActions';
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
                    <Button title="Kilomiters"></Button>
                    <Button title="Miles"></Button>
                    <Text>Km. / Mi.</Text>
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
