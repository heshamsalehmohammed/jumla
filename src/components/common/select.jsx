import React from 'react';

const Select = ({
  name,
  label,
  options,
  error,
  groupClasses,
  labelClasses,
  selectClasses,
  ...rest
}) => {
  return (
    <div className={groupClasses}>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <select name={name} id={name} {...rest} className={selectClasses}>
        <option value="" />
        {options.map((option, index) => (
          <option key={index} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
