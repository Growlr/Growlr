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
    TouchableWithoutFeedback
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

            <View style={styles.container}>

                {/* ----- Start Show Me Option ----  */}

                <View style={styles.default}>
                    <Text>Show Me</Text>

                    <TouchableWithoutFeedback onPress={this._setModalVisible.bind(this, true)}>
                        <View >
                          <View style={styles.rowWrap}>
                              <View style={styles.rowItem}>
                                <Text>
                                  {(this.props.Dogs)? 'Dogs ' : ''}
                                  {(this.props.Cats)? 'Cats ' : ''}
                                  {(this.props.Hamsters)? 'Hamsters ' : ''}
                                  {(this.props.Bunnies)? 'Bunnies ' : ''}
                                  {(this.props.Exotic)? 'Exotic' : ''}
                                </Text>
                              </View>
                          <View style={styles.rowItem}><Text style={styles.rowItem, styles.rowItemArrow}>></Text></View>
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
            // }} supportedOrientations={supportedOrientationsPickerValues[this.props.selectedSupportedOrientation]} // onOrientationChange={evt => this.setState({currentOrientation: evt.nativeEvent.orientation})
            // }}
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
                          <View style={styles.test}>
                              <PetTypes></PetTypes>

                          </View>

                        </View>
                    </View>
                </Modal>

                {/* ----- End Show Me Option ----  */}
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
    test:{
      flex:2
    },
    rowWrap:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    rowItem:{
      flex:1,
      height: 20
    },
    rowItemArrow:{
      alignSelf: 'flex-end'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(ShowMe)
