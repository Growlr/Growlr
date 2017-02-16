import React, { PropTypes, Component } from 'react'

const { FBLogin, FBLoginManager } = require('react-native-facebook-login');

class Login extends Component {
  render () {
    return (
      <FBLogin />
    )
  }
}

export default Login
