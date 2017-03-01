import React, { PropTypes, Component } from 'react'
import { updateLogin } from '../../actions/updateLogin'
import { updateMain, updateSwiperId } from '../../actions/updateMainPageActions'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'


const { FBLogin, FBLoginManager } = require('react-native-facebook-login');

class Login extends Component {


 // componentDidUpdate(){
 //     console.log(this.props.user.fid)
 //     axios.post('http://138.197.144.223/api/unSeen', {fid: this.props.user.fid})
 //         .then((res) => {
 //         console.log(res, 'we did it')
 //         })
 // }


  render () {
    var _this = this
    return (
      <View>
        {/* <InfoCarousel /> */}
        <Text style={{textAlign: 'center', fontWeight: 'bold', }}>Welcome to Growlr</Text>
        <Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 20,  }}>Please login to begin.</Text>
        <FBLogin
        style={{ marginBottom: 10 }}
        ref={(fbLogin) => { this.fbLogin = fbLogin  }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          axios.post('http://localhost:3000/api/login/', data)
            .then((res) => {
              console.log('you did it');
              console.log(res);
              _this.props.updateLogin({user: res.data[0]})
            })
        }}

        onLogout={function(){
          console.log("Logged out.");
          _this.props.updateLogin({ user: '' });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          axios.post('http://localhost:3000/api/login/', data)
            .then((res) => {
              console.log('you did it');
              console.log(res);
              console.log(res.data.trimmedList)
              _this.props.updateMain(res.data.trimmedList)
              _this.props.updateSwiperId({id: res.data.user[0].fid })
              _this.props.updateLogin({ user: res.data.user[0]});

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
    updateLogin: updateLogin,
    updateMain: updateMain
    , updateSwiperId: updateSwiperId
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Login)
