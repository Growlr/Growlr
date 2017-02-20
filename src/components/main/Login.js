import React, { PropTypes, Component } from 'react'
import { updateLogin } from '../../actions/updateLogin'
import { connect } from 'react-redux'



const { FBLogin, FBLoginManager } = require('react-native-facebook-login');

class Login extends Component {

  render () {
    var _this = this


    return (
      <FBLogin
        style={{ marginBottom: 10 }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        logicd nBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.props.updateLogin({user: data})
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.props.updateLogin({ user: '' });
        }}
        // onLoginFound={function(data){
        //   console.log("Existing login found.");
        //   console.log(data);
        //   _this.props.updateLogin({ user : data.credentials });
        // }}
        // onLoginNotFound={function(){
        //   console.log("No user logged in.");
        //   _this.setState({ user : null });
        // }}
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
    )

  }
}

mapStateToProps = (state) => {
    console.log(state)
    return {user: state.login.user}
}

const mapDispatchToActionCreators = {
    updateLogin: updateLogin
};

export default connect(mapStateToProps, mapDispatchToActionCreators)(Login)
