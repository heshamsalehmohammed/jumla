import React from 'react';

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
  const isCheckbox = type === "checkbox";
  const isPassword = type === "password";
  return (
    <div className={groupClasses}>
      {!isCheckbox && <label htmlFor={name}  className={labelClasses} >{label}</label>}
      <input {...rest} type={type} autoComplete={isPassword?"current-password":""} name={name} id={name} className={inputClasses} />
      {isCheckbox && <label htmlFor={name}  className={labelClasses} >{label}</label>}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
