import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSettings} from '../../actions/updateSettingsPageActions';
import {Actions} from 'react-native-router-flux';
// import {updateMain} from '../actions/updateMainPageActions'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Modal,
    Button,
    Alert
} from 'react-native'

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class Settings extends Component {

    _setModalVisible = (visible) => {
      this.props.updateSettings({modalVisible:visible})
    };

    _setAnimationType = (type) => {
        this.props.updateSettings({animationType: type})
    };

    _toggleTransparent = () => {
        this.props.updateSettings({transparent: !this.props.transparent});
    };

    updateUserInput() {}

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
            <ScrollView>
                <View style={styles.container}>

                    <Modal
                      animationType={this.props.animationType}
                      transparent={this.props.transparent}
                      visible={this.props.modalVisible}
                      onRequestClose={() => this._setModalVisible(false)}
                // }} supportedOrientations={supportedOrientationsPickerValues[this.props.selectedSupportedOrientation]} // onOrientationChange={evt => this.setState({currentOrientation: evt.nativeEvent.orientation})
                // }}
                    >
                        <View style={[styles.modalContainer, modalBackgroundStyle]}>
                            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                                <Text>This modal was presented {this.props.animationType === 'none'
                                        ? 'without'
                                        : 'with'}
                                    animation.</Text>
                                <Text>It is currently displayed in {this.props.currentOrientation}
                                    mode.</Text>
                                <Button
                                  onPress={this._setModalVisible.bind(this,false)}
                                  title="Close"
                                  color="#000"
                                  style={styles.modalButton}
                                  >
                                    Close
                                </Button>
                            </View>
                        </View>
                    </Modal>

                    <View style={styles.showMe}>
                        <Button onPress={this._setModalVisible.bind(this, true)} title="modalButton" color = "#000"></Button>
                        {/* <Button  ---- testing button feature ----
                          onPress={onButtonPress}
                          title="Button Title"
                          color="#841584"
                          accessibilityLabel="this is a test button"
                          ></Button> */}
                    </View>
                    <View style={styles.showMe}>
                        <Text>Search Distance</Text>
                    </View>
                    <View style={styles.showMe}>
                        <Text>Age</Text>
                    </View>
                    <View style={styles.showMe}>
                        <Text>Show me on Growlr</Text>
                    </View>
                    <View style={styles.showMe}>
                        <Text>App Settings</Text>
                    </View>
                    <View style={styles.showMe}>
                        <Text>Km. / Mi.</Text>
                    </View>
                    <View style={styles.showMe}>
                        <Text>Contact Us</Text>
                        <Text>Help & Support</Text>
                    </View>
                    <View style={styles.showMe}>
                        <Text>Legal</Text>
                        <Text>Licenses</Text>
                        <Text>Privecy Policy</Text>
                        <Text>Terms of Service</Text>
                    </View>
                    <View style={styles.showMe}>
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
  console.log(state);
    return {
      animationType: state.settingsPage.animationType,
      modalVisible: state.settingsPage.modalVisible,
      transparent: state.settingsPage.transparent,
      selectedSupportedOrientation: state.settingsPage.selectedSupportedOrientation,
      currentOrientation: state.settingsPage.currentOrientation}
}

const mapDispatchToActionCreators = {
    updateSettings: updateSettings
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flexGrow: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
  pickerItem: {
    fontSize: 16,
  },
    container: {
        marginTop: 64,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FDF7EB'
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    showMe: {
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: '#fff'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default connect(mapStateToProps, mapDispatchToActionCreators)(Settings)
