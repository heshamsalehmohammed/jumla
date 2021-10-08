import React from 'react';
import {useTranslation} from 'react-i18next';
import {languages} from './enums';

const TextAreaInput = ({
  name,
  label,
  error,
  groupClasses,
  labelClasses,
  inputClasses,
  hasLabel,
  inputStyle,
  placeHolder,
  ...rest
}) => {
  const {t, i18n} = useTranslation();
  return (
    <div className={groupClasses}>
      {hasLabel && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}
      <textarea
        {...rest}
        name={name}
        id={name}
        className={inputClasses}
        style={inputStyle}
        placeholder={placeHolder}
        rows="3"
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextAreaInput;
