import './Auth.scss';
import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import ForgetPassword from './ForgetPassword/ForgetPassword';

class Auth extends React.Component {
  getComponentToRender() {
    switch (this.props.page) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'forgetpassword':
        return <ForgetPassword />;
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        {this.getComponentToRender()}
      </>
    );
  }
}

export default Auth;
