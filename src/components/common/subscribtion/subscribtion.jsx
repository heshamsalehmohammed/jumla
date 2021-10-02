import './subscribtion.scss';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../form';
import {withTranslation} from 'react-i18next';

class Subscribtion extends Form {
  state = {
    data: {email: ''},
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
    const {t, i18n} = this.props;
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <fieldset>
          {this.renderInput(
            'email',
            t('subscribtion.emailAddress'),
            'email',
            '',
            '',
            'email',
            false,
            {},
            t('subscribtion.emailAddress')
          )}
        </fieldset>
        <fieldset>
          {this.renderButton(
            t('subscribtion.subscribe'),
            'submit',
            'main-button',
            {
              left: i18n.language === 'en' ? 'unset' : '10px',
              right: i18n.language === 'en' ? '10px' : 'unset',
            }
          )}
        </fieldset>
      </form>
    );
  }
}

export default withTranslation()(Subscribtion);
