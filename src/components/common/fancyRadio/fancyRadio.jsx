import React from 'react';
import './fancyRadio.scss';

const FancyRadio = ({
  optionsList,
  selectedOption,
  setSelectedOption,
  prefix,
}) => {
  const onCheckOption = (e, value) => {
    if (e.target.checked) {
      setSelectedOption(value);
    }
  };

  return (
    <div class="wrapper">
      {optionsList.map((o, index) => {
        const isChecked = o === selectedOption;
        return (
          <div key={index}>
            <input
              type="radio"
              name="select"
              id={`${prefix}-${index}-option`}
              checked={isChecked}
              onChange={(e) => onCheckOption(e, o)}
            />
            <label
              for={`${prefix}-${index}-option`}
              class={`option ${isChecked ? 'active' : ''}`}>
              <div class="dot"></div>
              <span>{o}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FancyRadio;
