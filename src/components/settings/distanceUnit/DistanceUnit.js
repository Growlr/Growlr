import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
} from 'react-native'

class DistanceUnit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.default,styles.row]}>
                    <TouchableHighlight style={styles.buttonLook}>
                      <Text  style={styles.centerText} >Kilomiters</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonLook}>
                      <Text style={styles.centerText} >Miles</Text>
                    </TouchableHighlight>
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
        justifyContent: 'center',
        backgroundColor: '#FDF7EB'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    centerText: {
        textAlign: 'center',
        color: '#fff'
    },
    buttonLook: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 5,
    },
    default: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: '#fff'
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(DistanceUnit)
