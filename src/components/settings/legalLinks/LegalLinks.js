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
            <View style={[styles.container, {height: 102, marginBottom:5}, styles.radius]}>
                <View style={styles.default}>
                    <Text style={[{fontSize: 14, paddingBottom: 7},styles.fontSubTitle]}>Legal</Text>
                    <Text style={[styles.fontDefault,styles.fontParagraph]}>Licenses</Text>
                    <Text style={[styles.fontDefault,styles.fontParagraph]}>Privecy Policy</Text>
                    <Text style={[styles.fontDefault,styles.fontParagraph]}>Terms of Service</Text>
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

  radius:{
    borderRadius: 5,
    shadowColor: "#CBCBCB",
    shadowOffset:{
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 100
  },
  fontDefault:{
    fontSize: 13,
    paddingBottom:5
  },
  fontSubTitle:{
    color: '#F16A6A',
    fontWeight: "600",
  },
  fontParagraph:{
    color: '#555',
    fontWeight: "600",
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
