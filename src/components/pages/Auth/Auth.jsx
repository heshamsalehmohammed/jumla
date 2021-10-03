import './Auth.scss';
import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import NavBar from '../../common/navBar/navBar';
import Footer from '../../common/footer/footer';
import ScrollHandler from '../../common/ScrollHandler';

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
        <ScrollHandler>
          <div className="auth pt-5 mt-5">
            <div className="container login-container ">
              <div className="row row justify-content-center pt-5 mt-5">
                {this.getComponentToRender()}
              </div>
            </div>
          </div>
        </ScrollHandler>
        <Footer />
      </>
    );
  }
}

export default Auth;
