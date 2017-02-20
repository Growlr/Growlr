import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateSettings } from '../../../actions/updateSettingsPageActions';
import  { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Slider,
    Switch
} from 'react-native'


class SearchDistance  extends Component {

    _setSearchDistance = (value) => {
      this.props.updateSettings({searchDistance:value})
    }


    updateUserInput() {}

    render() {

        return (

            <View style={styles.container}>

                {/* ----- Start Search Distance Option ----  */}

                <View style={[styles.default, {height: 70}]}>
                    <Text>Search Distance</Text>
                    <Text> {this.props.searchDistance} </Text>

                    <Slider
                      step= {1}
                      value= {this.props.searchDistance}
                      minimumValue={this.props.searchDistanceMin}
                      maximumValue={this.props.searchDistanceMax}
                      onValueChange={(value) => this._setSearchDistance(value)}
                    ></Slider>
                </View>

                {/* ----- End Search Distance Option ----  */}

            </View>
        )
    }
}

mapStateToProps = (state) => {
  console.log(state);
    return {
      searchDistance: state.settingsPage.searchDistance,
      searchDistanceMin: state.settingsPage.searchDistanceMin,
      searchDistanceMax: state.settingsPage.searchDistanceMax,
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

export default connect(mapStateToProps, mapDispatchToActionCreators)(SearchDistance)
