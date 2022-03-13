import React, {Component} from 'react';
import Joi from 'joi-browser';
import Input from './input';
import TextAreaInput from './textAreaInput';
import UploadFiles from './uploadFiles';
import Select from './select';
import _ from 'lodash';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = {abortEarly: false};
    const {error} = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({name, value}) => {
    const obj = {[name]: value};
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({errors: errors || {}});
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({currentTarget: input}, AdditionalHandleChange) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    if (AdditionalHandleChange) {
      const name = input.name;
      const value = input.value;
      AdditionalHandleChange(name, value, errors);
    } else {
      const data = _.cloneDeep(this.state.data);
      data[input.name] = input.value;
      this.setState({data, errors});
    }
  };

  renderButton(label, type, classes, styles = {}) {
    const btnClasses = classes ? classes : 'btn btn-primary';
    const btnDisabled = type === 'submit' ? this.validate() : false;
    return (
      <button
        type={type}
        disabled={btnDisabled}
        className={btnClasses}
        style={styles}>
        {label}
      </button>
    );
  }

  renderSelect(
    name,
    label,
    options,
    groupClasses = 'form-group',
    labelClasses = 'form-label',
    selectClasses = 'form-control'
  ) {
    const {data, errors} = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
        groupClasses={groupClasses}
        labelClasses={labelClasses}
        selectClasses={selectClasses}
      />
    );
  }

  renderInput(
    name,
    label,
    type = 'text',
    groupClasses = 'form-group',
    labelClasses = 'form-label',
    inputClasses = 'form-control',
    hasLabel = true,
    inputStyle = {},
    placeHolder = '',
    AdditionalHandleChange,
    value = null,
    error = null,
    disabled = false
  ) {
    const inputChange = (e) => {
      this.handleChange(e, AdditionalHandleChange);
    };

    const {data, errors} = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={value ? value : data[name]}
        label={label}
        onChange={inputChange}
        error={error ? error : errors[name]}
        groupClasses={groupClasses}
        labelClasses={labelClasses}
        inputClasses={inputClasses}
        hasLabel={hasLabel}
        inputStyle={inputStyle}
        placeHolder={placeHolder}
        disabled={disabled}
      />
    );
  }

  renderTextAreaInput(
    name,
    label,
    groupClasses = 'form-group',
    labelClasses = 'form-label',
    inputClasses = 'form-control',
    hasLabel = true,
    inputStyle = {},
    placeHolder = ''
  ) {
    const {data, errors} = this.state;

    return (
      <TextAreaInput
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        groupClasses={groupClasses}
        labelClasses={labelClasses}
        inputClasses={inputClasses}
        hasLabel={hasLabel}
        inputStyle={inputStyle}
        placeHolder={placeHolder}
      />
    );
  }

  renderFilesUpload(
    name,
    label,
    groupClasses = 'form-group',
    labelClasses = 'form-label',
    hasLabel = true,
    DropzoneStyles = {minWidth: '260px', minHeight: '150px'},
    DropzoneLabel = 'Drop your files here',
    DropzoneMaxFiles = 1,
    DropzoneMaxFileSize = 2998000,
    DropzoneAccept = '.png,image/*'
  ) {
    const {data, errors} = this.state;

    return (
      <UploadFiles
        name={name}
        label={label}
        error={errors[name]}
        groupClasses={groupClasses}
        labelClasses={labelClasses}
        hasLabel={hasLabel}
        value={data[name]}
        onChange={this.handleChange}
        DropzoneStyles={DropzoneStyles}
        DropzoneLabel={DropzoneLabel}
        DropzoneMaxFiles={DropzoneMaxFiles}
        DropzoneMaxFileSize={DropzoneMaxFileSize}
        DropzoneAccept={DropzoneAccept}
      />
    );
  }
}

export default Form;
