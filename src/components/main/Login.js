import React, { PropTypes, Component } from 'react'
import { updateLogin } from '../../actions/updateLogin'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'


const { FBLogin, FBLoginManager } = require('react-native-facebook-login');

class Login extends Component {





  render () {
    var _this = this
    return (
      <View>
        {/* <InfoCarousel /> */}
        <Text>Welcome to Growlr</Text>
        <Text>please login to begin</Text>
        <FBLogin
        style={{ marginBottom: 10 }}
        ref={(fbLogin) => { this.fbLogin = fbLogin  }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.props.updateLogin({user: data})
          axios.post('http://138.197.144.223/api/login/', data)
            .then((res) => {
              console.log('you did it');
              console.log(res);
            })
        }}

        onLogout={function(){
          console.log("Logged out.");
          _this.props.updateLogin({ user: '' });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          axios.post('http://138.197.144.223/api/login/', data)
            .then((res) => {
              console.log('you did it');
              console.log(res);
              _this.props.updateLogin({ user: res.data[0]});
            })
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.props.updateLogin({ user: null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}

       />

      </View>
    )

  }
}

mapStateToProps = (state) => {
    return {user: state.login.user}
}

const mapDispatchToActionCreators = {
    updateLogin: updateLogin
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Login)
