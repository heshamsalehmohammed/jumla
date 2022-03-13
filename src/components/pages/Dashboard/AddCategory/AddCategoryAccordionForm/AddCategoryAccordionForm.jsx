import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './AddCategoryAccordionForm.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../../../../common/form';
import {withTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';
import {Accordion, AccordionTab} from 'primereact/accordion';
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid';
import {removeNegativeValue, getCategoriesOptions} from '../../../../common';

class AddCategoryAccordionForm extends Form {
  constructor(props) {
    super(props);
  }

  state = {
    data: {
      name: '',
      description: '',
      parentCategoryId: 0,
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label('Category Name'),
    description: Joi.string().required().label('Category Description'),
    parentCategoryId: Joi.number().label('Parent Category'),
  };

  componentDidMount() {}

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
        <Accordion multiple activeIndex={[0]}>
          <AccordionTab header="Category Details">
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderInput(
                'name',
                'Category Name',
                'text',
                'form-group mb-1 col-md-6 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
              {this.renderTextAreaInput(
                'description',
                'Category Description',
                'form-group mb-1',
                'form-label',
                'form-control outfit'
              )}
            </div>
            <div className="row form-row justify-content-center justify-content-sm-start">
              {this.renderSelect(
                'parentCategoryId',
                'Category',
                getCategoriesOptions(this.props.categories),
                'form-group mb-1 col-md-8 col-sm-12',
                'form-label',
                'form-control outfit'
              )}
            </div>
          </AccordionTab>
        </Accordion>
        <div className="form-row d-flex p-3 justify-content-center">
          {this.renderButton(
            'Add Category',
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
    categories: state.productsState.categories,
  };
}

export default withRouter(
  withTranslation()(connect(mapStateToProps)(AddCategoryAccordionForm))
);
