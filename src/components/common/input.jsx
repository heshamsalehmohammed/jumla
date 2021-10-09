import React from 'react';
import {useTranslation} from 'react-i18next';
import {languages} from './enums';

const Input = ({
  name,
  label,
  error,
  type,
  groupClasses,
  labelClasses,
  inputClasses,
  hasLabel,
  inputStyle,
  placeHolder,
  onChange,
  ...rest
}) => {
  const isCheckbox = type === 'checkbox';
  const isPassword = type === 'password';
  const {t, i18n} = useTranslation();

  const inputChangeHandler = (e) => {
    if (isCheckbox) {
      e.currentTarget.value = Boolean(e.currentTarget.value);
    }
    onChange(e);
  };

  return (
    <div className={groupClasses}>
      {!isCheckbox && hasLabel && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        {...rest}
        onChange={inputChangeHandler}
        type={type}
        autoComplete={isPassword ? 'current-password' : ''}
        name={name}
        id={name}
        className={inputClasses}
        style={inputStyle}
        placeholder={placeHolder}
      />
      {isCheckbox && (
        <label
          htmlFor={name}
          className={labelClasses}
          style={{
            paddingRight: i18n.language === languages.ar ? '30px' : 'none',
          }}>
          {label}
        </label>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
