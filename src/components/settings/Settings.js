import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'

import ShowMe from './showMe/ShowMe';
import SearchDistance from './searchDistance/SearchDistance';
import SetAge from './setAge/SetAge';
import OnGrowlr from './onGrowlr/OnGrowlr';
import ContactUs from './contactUs/ContactUs';
import Logout from './logout/Logout';
import LegalLinks from './legalLinks/LegalLinks';
import DistanceUnit from './distanceUnit/DistanceUnit';
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
                    <DistanceUnit></DistanceUnit>
                    <ContactUs></ContactUs>
                    <LegalLinks></LegalLinks>
                    <Logout></Logout>

                    {/* ----- End Settings Components ----  */}
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

    container: {
        marginTop: 64,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
