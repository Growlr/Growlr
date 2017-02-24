import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { updateView } from '../../actions/updateViewActions';
import Switch from 'react-native-material-switch-finale';
import NavStyles from './NavStyles';
import {Actions} from 'react-native-router-flux';

class NavBar extends Component {


  changePage(v) {
    if(v){
      Actions.ownerView()
    }
    else {
      Actions.mainView()
    }
  }



    render(){

      const switchProps = {
        inactiveButtonColor: '#ededed',
        activeButtonColor: '#F16A6A',
        activeBackgroundColor: '#FBD0D0',
        inactiveBackgroundColor: '#ccc',
        buttonRadius: 15,
        switchWidth: 60,
        switchHeight: 30,
        enableSlide: true,
        switchAnimationTime: 200,
      }

        let {width, height} = Dimensions.get('window')
        return (
          <View style={NavStyles.navbar}>

          <TouchableOpacity
          onPress={Actions.settingsView}
          style={NavStyles.profile}>
            <Image
            source={require('../../img/profile.png')} style={NavStyles.profile} />
          </TouchableOpacity>

          <Switch value={this.props.value}onValueChange={(value) => {
            this.props.updateView({value}, this.changePage(value))


          }}/>
            <TouchableOpacity
            onPress={Actions.matchView}
            style={NavStyles.matches}>
              <Image
              source={require('../../img/match.png')} style={NavStyles.matches} />
            </TouchableOpacity>

          </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
      changeView: state.view.changeView,
      value: state.view.value
    }
}

const mapDispatchToActionCreators = {
    updateView: updateView
};

// export default NavBar;
export default connect(mapStateToProps, mapDispatchToActionCreators)(NavBar)
