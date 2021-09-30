import './Login.scss';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../common/form';
import auth from '../../../../services/authService';

class Login extends Form {
  state = {
    data: {email: '', password: '', rememberme: false},
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
    rememberme: Joi.boolean(),
  };

  doSubmit = async () => {
    try {
      const {data} = this.state;
      await auth.login(data.email, data.password);
      const {state} = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.email = ex.response.data;
        this.setState({errors});
      }
    }
  };
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container login-container vh-100">
        <div className="row mb-5 pb-2">
          <form className="col" onSubmit={this.handleSubmit}>
            <div className="form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'email',
                'Email address',
                'email',
                'form-group mb-1',
                'form-label login-label',
                'form-control outfit'
              )}
            </div>
            <div className="form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'password',
                'Password',
                'password',
                'form-group mb-1',
                'form-label login-label',
                'form-control outfit'
              )}
            </div>
            <div className="form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'rememberme',
                'Remember me!',
                'checkbox',
                'form-check mb-2',
                'form-check-label login-label',
                'form-check-input'
              )}
            </div>

            <div className="form-row justify-content-center justify-content-sm-start">
              {this.renderButton(
                'Login',
                'submit',
                'btn btn-primary btn-block login-btn outfit login-submit-btn'
              )}
            </div>
            <div className="form-row login-utils justify-content-center align-content-center justify-content-sm-start align-content-sm-start">
              <div className="login-utils-div  d-flex justify-content-between">
                Don't have an account?{' '}
                <Link to="/register" className="ml-2">
                  Sign Up
                </Link>
              </div>
              <div className="login-utils-div">
                <Link to="/forgetpassword">Forgot your password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
