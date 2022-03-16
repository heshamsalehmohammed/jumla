import './EditUserProfileForm.scss';
import React from 'react';
import {Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../../common/form';
import * as userService from '../../../../../services/userService';
import auth from '../../../../../services/authService';
import {withTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class EditUserProfileForm extends Form {
  state = {
    data: {email: '', password: '', name: '', accountType: ''},
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
    accountType: Joi.string().required().label('Account Type'),
  };

  doSubmit = async () => {
    try {
      debugger;
      const response = await userService.editUser(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      this.props.history.replace('/dashboard');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.email = ex.response.data;
        this.setState({errors});
      }
    }
  };
  render() {
    const {t, i18n} = this.props;
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <div className="form-row justify-content-center justify-content-sm-start">
          <h3>{t('auth.EditUserProfileForm')}</h3>
        </div>
        <div className="form-row justify-content-center justify-content-sm-start">
          {this.renderInput(
            'email',
            t('auth.emailAddress'),
            'email',
            'form-group mb-1',
            'form-label EditUserProfileForm-label',
            'form-control outfit'
          )}
        </div>
        <div className="form-row justify-content-center justify-content-sm-start">
          {this.renderInput(
            'password',
            t('auth.password'),
            'password',
            'form-group mb-1',
            'form-label EditUserProfileForm-label',
            'form-control outfit'
          )}
        </div>
        <div className="form-row justify-content-center justify-content-sm-start">
          {this.renderInput(
            'name',
            t('auth.name'),
            'text',
            'form-group mb-2',
            'form-label EditUserProfileForm-label',
            'form-control outfit'
          )}
        </div>
        <div className="form-row justify-content-center justify-content-sm-start">
          {this.renderSelect(
            'accountType',
            t('auth.accountType'),
            this.props.accountTypes,
            'form-group mb-2',
            'form-label EditUserProfileForm-label',
            'form-control outfit'
          )}
        </div>
        <div className="form-row justify-content-center justify-content-sm-start">
          {this.renderButton(
            t('auth.EditUserProfileForm'),
            'submit',
            'btn btn-primary btn-block login-btn outfit login-submit-btn'
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    accountTypes: state.lookupState.AccountTypes,
  };
}

export default withRouter(
  withTranslation()(connect(mapStateToProps)(EditUserProfileForm))
);
