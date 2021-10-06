import './shoppingSearchInput.scss';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {useTranslation} from 'react-i18next';

const ShoppingSearchInput = () => {
  const {t, i18n} = useTranslation();

  return (
    <InputGroup>
      <InputGroup.Text
        id="basic-addon1"
        className="shopping-search-icon"
        style={{
          right: i18n.language === 'ar' ? '0px' : 'unset',
          left: i18n.language === 'ar' ? 'unset' : '0px',
        }}>
        <i className="fa fa-search"></i>
      </InputGroup.Text>
      <FormControl
        className="shopping-search-input"
        placeholder="انت بتدور علي ايه ؟"
        style={{
          paddingRight: i18n.language === 'ar' ? '50px' : '0px',
          paddingLeft: i18n.language === 'ar' ? '0px' : '50px',
        }}
      />
    </InputGroup>
  );
};

export default ShoppingSearchInput;
