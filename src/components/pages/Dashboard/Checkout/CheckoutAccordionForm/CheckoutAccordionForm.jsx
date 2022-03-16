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
    viewMode: false,
  };

  componentDidMount() {
    const {orderShippingDetails} = this.props;
    if (orderShippingDetails) {
      this.setState({
        ...this.state,
        data: {
          shippingDetails_firstName: orderShippingDetails.firstName,
          shippingDetails_lastName: orderShippingDetails.lastName,
          shippingDetails_email: orderShippingDetails.email,
          shippingDetails_phone: orderShippingDetails.phone,
          shippingDetails_city: orderShippingDetails.city,
          shippingDetails_district: orderShippingDetails.district,
          shippingDetails_floor: orderShippingDetails.floor,
          shippingDetails_appartment: orderShippingDetails.appartment,
          shippingDetails_address: orderShippingDetails.address,
          shippingDetails_specialNotes: orderShippingDetails.specialNotes,
        },
        viewMode: true,
      });
    }
  }

  schema = {
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
            <Accordion.Header>Shipping Address</Accordion.Header>
            <Accordion.Body>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_firstName',
                  'First Name',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
                {this.renderInput(
                  'shippingDetails_lastName',
                  'Last Name',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_email',
                  'Email Address',
                  'email',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
                {this.renderInput(
                  'shippingDetails_phone',
                  'Phone Number',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_city',
                  'City',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
                {this.renderInput(
                  'shippingDetails_district',
                  'Distinct',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderInput(
                  'shippingDetails_floor',
                  'Floor',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
                {this.renderInput(
                  'shippingDetails_appartment',
                  'Appartment',
                  'text',
                  'form-group mb-1 col-md-6 col-sm-12',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  null,
                  null,
                  null,
                  this.state.viewMode
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderTextAreaInput(
                  'shippingDetails_address',
                  'Address',
                  'form-group mb-1',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  this.state.viewMode
                )}
              </div>
              <div className="row form-row justify-content-center justify-content-sm-start">
                {this.renderTextAreaInput(
                  'shippingDetails_specialNotes',
                  'Apecial Notes',
                  'form-group mb-1',
                  'form-label billing-details-label',
                  'form-control outfit',
                  true,
                  {},
                  '',
                  this.state.viewMode
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
