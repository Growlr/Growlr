import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import { Actions } from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native'

import PetTypes from './petTypes/PetTypes';


class ShowMe extends Component {

    _setModalVisible = (visible) => {
      this.props.updateSettings({modalVisible:visible})
    };

    _setAnimationType = (type) => {
        this.props.updateSettings({animationType: type})
    };

    _toggleTransparent = () => {
        this.props.updateSettings({transparent: !this.props.transparent});
    };

    render() {
        var modalBackgroundStyle = {
          backgroundColor: this.props.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.props.transparent
          ? {backgroundColor: '#fff', padding: 20}
          : null;
        var activeButtonStyle = {
          backgroundColor: '#ddd'
        };
        return (
          <View style={{marginBottom: 5}}>
            <View>
              <Text style={[styles.fontTitle, styles.fontDefault]}>
                Discovery Settings
              </Text>
            </View>
            <TouchableHighlight style={[styles.radius, {height: 60}]}>
              <View style={[styles.container, styles.radius]}>

                  {/* ----- Start Show Me Option ----  */}

                  <View style={styles.innerContainer}>
                      <Text style={[styles.fontSubTitle,styles.fontDefault, {flex:1}]}>Show Me</Text>

                      <TouchableWithoutFeedback style={{flex:1}} onPress={this._setModalVisible.bind(this, true)}>
                          <View >
                            <View style={styles.rowWrap}>
                                <View style={styles.rowItem}>
                                  <Text style={[styles.fontDefault, styles.fontParagraph]}>
                                    {(this.props.Dogs)? 'Dogs ' : ''}
                                    {(this.props.Cats)? 'Cats ' : ''}
                                    {(this.props.Hamsters)? 'Hamsters ' : ''}
                                    {(this.props.Bunnies)? 'Bunnies ' : ''}
                                    {(this.props.Exotic)? 'Exotic' : ''}
                                  </Text>
                                </View>
                                <View style={styles.rowItem2}>
                                  <Text style={[styles.rowItem2, styles.rowItemArrow]}>></Text>
                                </View>
                            </View>
                          </View>
                      </TouchableWithoutFeedback>
                  </View>

                    {/* ---- Show Me Modal -----  */}

                  <Modal
                    animationType={this.props.animationType}
                    transparent={this.props.transparent}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this._setModalVisible(false)}
                  >
                      <View style={[styles.modalContainer, modalBackgroundStyle]}>
                          <View style={styles.rowWrap}>
                            <View>
                              <Text
                                onPress={this._setModalVisible.bind(this,false)}
                                title="< Settings"
                                color="#000"
                                style={styles.modalButton}
                                >
                                  {"< Settings"}
                              </Text>
                            </View>
                            <View>
                              <Text style={styles.modalButton}> Show Me </Text>
                            </View>
                            <Text></Text>
                          </View>
                          <View style={{flex:9}}>
                            <View style={{flex:2}}>
                                <PetTypes></PetTypes>
                            </View>
                          </View>
                      </View>
                  </Modal>

                  {/* ----- End Show Me Option ----  */}
              </View>
            </TouchableHighlight>
          </View>

        )
    }
}



mapStateToProps = (state) => {
    return {
      animationType: state.settingsPage.animationType,
      modalVisible: state.settingsPage.modalVisible,
      transparent: state.settingsPage.transparent,
      selectedSupportedOrientation: state.settingsPage.selectedSupportedOrientation,
      currentOrientation: state.settingsPage.currentOrientation,
      Dogs: state.settingsPage.searchDogs,
      Cats: state.settingsPage.searchCats,
      Bunnies: state.settingsPage.searchBunnies,
      Hamsters: state.settingsPage.searchHamsters,
      Exotic: state.settingsPage.searchExotic
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
        hight: 1
      },
      shadowRadius: 1,
      shadowOpacity: 1000
      // borderWidth: .25,
      // borderColor: '#ccc'
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
    rowItem:{
      flex:9,
      height: 20
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
      color: '#555'
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(ShowMe)
