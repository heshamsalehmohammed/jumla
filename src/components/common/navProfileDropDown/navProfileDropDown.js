import './navProfileDropDown.scss';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import DPP from '../../../assets/images/DPP.png';
import {useTranslation} from 'react-i18next';

const NavProfileDropDown = (props) => {
  const {user} = props;

  let itemsCustomClassNames = 'nav-item nav-link pl-3';
  const {t, i18n} = useTranslation();

  if (i18n.language === 'ar') {
    itemsCustomClassNames += ' text-align-right'
  }

  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        bsPrefix="nav-custom-profile-dropdown">
        <img className={'nav-profile-pic'} src={DPP} alt="profile" />
        {user.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          as={Link}
          className={itemsCustomClassNames}
          to={`/dashboard`}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          className={itemsCustomClassNames}
          to={`/dashboard/userprofile/${user.id}`}>
          My Account
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} className={itemsCustomClassNames} to="/logout">
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavProfileDropDown;
