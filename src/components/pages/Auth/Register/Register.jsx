import './Register.scss';
import React from 'react';
import {Link ,Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../common/form';
import * as userService from '../../../../services/userService';
import auth from '../../../../services/authService';

class Register extends Form {
  state = {
    data: {email: '', password: '', name: ''},
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
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
                'name',
                'Name',
                'text',
                'form-group mb-2',
                'form-label login-label',
                'form-control outfit'
              )}
            </div>
            <div className="form-row justify-content-center justify-content-sm-start">
              {this.renderButton(
                'SignUp',
                'submit',
                'btn btn-primary btn-block login-btn outfit login-submit-btn'
              )}
            </div>
            <div className="form-row login-utils justify-content-center align-content-center justify-content-sm-start align-content-sm-start">
              <div className="login-utils-div  d-flex justify-content-between">
                Already a user?{' '}
                <Link to="/login" className="ml-2">
                  Login
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

export default Register;
