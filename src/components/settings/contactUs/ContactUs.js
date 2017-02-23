import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native'

class ContactUs extends Component {
    render() {
        return (
          <View style={{marginBottom: 5}}>
            <View>
              <Text style={[styles.fontTitle, styles.fontDefault]}>
                Contact Us
              </Text>
            </View>
            <TouchableHighlight style={[styles.radius, {height: 43}]}>
              <View style={[styles.container, styles.radius]}>

                  {/* ----- Start Show Me Option ----  */}

                  <View style={styles.innerContainer}>
                      <Text style={[styles.fontParagraph,styles.fontDefault, {flex:1}]}>
                        Help & Support
                      </Text>

                  </View>

              </View>
            </TouchableHighlight>
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
  test:{
    borderRadius: 5,
    borderWidth: 2,
  },
  rowWrap:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fontDefault:{
    fontSize: 13
  },
  fontSubTitle:{
    color: '#F16A6A',
    fontWeight: "600",
  },
  fontTitle:{
    fontWeight: "700",
    paddingBottom: 5,
    paddingTop: 5,
  },
  fontParagraph:{
    color: '#555',
    fontWeight: "600",
    textAlign: 'center',
    padding: 5
  },
  rowItem:{
    flex:9,
    height: 20
  },
  rowItem2:{
    flex:1,
    height: 20
  },
  rowItemArrow:{
    alignSelf: 'flex-end',
    fontWeight: '900',
    color: "#ccc"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  innerContainer: {
      margin: 10,
      height: 23,
      width: 300,
      backgroundColor: '#fff',
  },
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(ContactUs)
