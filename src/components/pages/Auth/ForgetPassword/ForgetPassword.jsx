import './ForgetPassword.scss';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../common/form';
import auth from '../../../../services/authService';

class ForgetPassword extends Form {
  state = {
    data: {email: '', password: ''},
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label('Email'),
  };

  doSubmit = async () => {
    try {
    } catch (ex) {}
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <form className="col-md-8 col-sm-12" onSubmit={this.handleSubmit}>
        <div className="form-row justify-content-center justify-content-sm-start">
          <h3>Forget Password</h3>
        </div>
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
          {this.renderButton(
            'Reset Password',
            'submit',
            'btn btn-primary btn-block login-btn outfit login-submit-btn'
          )}
        </div>
        <div className="form-row login-utils justify-content-center align-content-center ">
          <div className="login-utils-div d-flex justify-content-end">
            <Link to="/auth" className="ml-2">
              Register/Login
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default ForgetPassword;
