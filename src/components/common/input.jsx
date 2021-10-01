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
  ...rest
}) => {
  const isCheckbox = type === 'checkbox';
  const isPassword = type === 'password';
  const {t, i18n} = useTranslation();
  return (
    <div className={groupClasses}>
      {!isCheckbox && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        {...rest}
        type={type}
        autoComplete={isPassword ? 'current-password' : ''}
        name={name}
        id={name}
        className={inputClasses}
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
