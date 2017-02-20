import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'

import ShowMe from './showMe/ShowMe';
import SearchDistance from './searchDistance/SearchDistance';
import SetAge from './setAge/SetAge';
import OnGrowlr from './onGrowlr/OnGrowlr';
import Notifications from './notifications/Notifications';

class Settings extends Component {
    render() {

        return (
            <ScrollView>
                <View style={styles.container}>

                    {/* ----- Start Settings Components ----  */}
                    <ShowMe></ShowMe>
                    <SearchDistance></SearchDistance>
                    <SetAge></SetAge>
                    <OnGrowlr></OnGrowlr>
                    <Notifications></Notifications>

                    {/* ----- End Settings Components ----  */}

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
    return {
      // ------ example of what do to put items on state -----
      // notificationNewMatch: state.settingsPage.notificationNewMatch,
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
