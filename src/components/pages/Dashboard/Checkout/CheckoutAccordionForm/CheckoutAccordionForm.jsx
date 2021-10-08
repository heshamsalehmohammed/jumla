import './CheckoutAccordionForm.scss';
import React from 'react';
import {Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../../common/form';

import {withTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

class CheckoutAccordionForm extends Form {
  state = {
    data: {
      billingDetails_firstName: '',
      billingDetails_lastName: '',
      billingDetails_email: '',
      billingDetails_phone: '',
      billingDetails_city: '',
      billingDetails_district: '',
      billingDetails_floor: '',
      billingDetails_appartment: '',
      billingDetails_address: '',
      billingDetails_specialNotes: '',
      shippingDetails_firstName: '',
      shippingDetails_lastName: '',
      shippingDetails_email: '',
      shippingDetails_phone: '',
      shippingDetails_city: '',
      shippingDetails_district: '',
      shippingDetails_floor: '',
      shippingDetails_appartment: '',
      shippingDetails_address: '',
      shippingDetails_specialNotes: '',
    },
    errors: {},
  };

  schema = {
    billingDetails_firstName: Joi.string().required().label('First Name'),
    billingDetails_lastName: Joi.string().required().label('Last Name'),
    billingDetails_email: Joi.string().email().label('Email Address'),
    billingDetails_phone: Joi.string().required().label('Phone Number'),
    billingDetails_city: Joi.string().required().label('City'),
    billingDetails_district: Joi.string().required().label('District'),
    billingDetails_floor: Joi.string().required().label('Floor'),
    billingDetails_appartment: Joi.string().required().label('Appartment'),
    billingDetails_address: Joi.string().required().label('Address'),
    billingDetails_specialNotes: Joi.string().label('Special Notes'),
    shippingDetails_firstName: Joi.string().required().label('First Name'),
    shippingDetails_lastName: Joi.string().required().label('Last Name'),
    shippingDetails_email: Joi.string().email().label('Email Address'),
    shippingDetails_phone: Joi.string().required().label('Phone Number'),
    shippingDetails_city: Joi.string().required().label('City'),
    shippingDetails_district: Joi.string().required().label('District'),
    shippingDetails_floor: Joi.string().required().label('Floor'),
    shippingDetails_appartment: Joi.string().required().label('Appartment'),
    shippingDetails_address: Joi.string().required().label('Address'),
    shippingDetails_specialNotes: Joi.string().label('Special Notes'),
  };

  doSubmit = async () => {
    try {
      debugger;

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
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Billing Details</Accordion.Header>
            <Accordion.Body>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'billingDetails_firstName',
                  'First Name',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'billingDetails_lastName',
                  'Last Name',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'billingDetails_email',
                  'Email Address',
                  'email',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'billingDetails_phone',
                  'Phone Number',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'billingDetails_city',
                  'City',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'billingDetails_district',
                  'Distinct',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'billingDetails_floor',
                  'Floor',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'billingDetails_appartment',
                  'Appartment',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderTextAreaInput(
                  'billingDetails_address',
                  'Address',
                  'form-group mb-1',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderTextAreaInput(
                  'billingDetails_specialNotes',
                  'Apecial Notes',
                  'form-group mb-1',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Shipping Address</Accordion.Header>
            <Accordion.Body>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_firstName',
                  'First Name',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'shippingDetails_lastName',
                  'Last Name',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_email',
                  'Email Address',
                  'email',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'shippingDetails_phone',
                  'Phone Number',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_city',
                  'City',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'shippingDetails_district',
                  'Distinct',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_floor',
                  'Floor',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
                {this.renderInput(
                  'shippingDetails_appartment',
                  'Appartment',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderTextAreaInput(
                  'shippingDetails_address',
                  'Address',
                  'form-group mb-1',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderTextAreaInput(
                  'shippingDetails_specialNotes',
                  'Apecial Notes',
                  'form-group mb-1',
                  'form-label billing-details-label',
                  'form-control outfit'
                )}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </form>
    );
  }
}

export default withRouter(withTranslation()(CheckoutAccordionForm));
