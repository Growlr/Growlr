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
            <View style={[styles.container, styles.radius, {marginBottom: 5}]}>
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
  centerText: {
      textAlign: 'center',
      color: '#fff'
  },
  buttonLook: {
      backgroundColor: '#F16A6A',
      borderRadius: 5,
      padding: 5,
  },
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(DistanceUnit)
