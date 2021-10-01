import './Auth.scss';
import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import NavBar from '../../common/navBar/navBar';

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
        return (
          <>
            <Login />
            <Register />
          </>
        );
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="container login-container pt-5 mt-5">
          <div className="row row justify-content-center">{this.getComponentToRender()}</div>
        </div>
      </>
    );
  }
}

export default Auth;
