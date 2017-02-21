import React, { PropTypes, Component } from 'react'
import { updateLogin } from '../../actions/updateLogin'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'

const { FBLogin, FBLoginManager } = require('react-native-facebook-login');

class Login extends Component {

  componentDidUpdate(){


  }


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
          // console.log('here, yo');
          // let user = data.credentials
          // console.log(user);
          // let api = `https://graph.facebook.com/v2.4/${user.userId}&access_token=${user.token}`
          // axios.get(api)
          //   .then((res) => {
          //     console.log(res)
          //
          //   })
          console.log("Logged in!");
          console.log(data);
          _this.props.updateLogin({user: data})
        }}

        onLogout={function(){
          console.log("Logged out.");
          _this.props.updateLogin({ user: '' });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.props.updateLogin({ user: data });
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
