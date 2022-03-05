import './UserProfile.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DPP from '../../../../assets/images/DPP.png';
import auth from '../../../../services/authService';
import EditUserProfileForm from './EditUserProfileForm/EditUserProfileForm';

import {Divider} from 'primereact/divider';

const UserProfile = (props) => {
  const user = auth.getCurrentUser();debugger
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={4} lg={3}>
        <div className="profile-card-wrapper">
          <div className="profile-card-image-container p-2 d-flex justify-content-center">
            <img className="profile-card-image" src={DPP} alt="profile" />
          </div>
          <div className="profile-card-details text-center">
            <span className="user-name">{user.name}</span>
            <span className="user-role">Admin</span>
            <span className="user-status">
              <i className="p-1 fa fa-circle"></i> <span>Online</span>
            </span>
            <span className="user-address">
              <i className="p-1 fa fa-map-marker"></i>
              <span className="">21 st number 13 helwan cairo</span>
            </span>
            <Divider align="left">
              <div className="p-d-inline-flex p-ai-center">
                <i className="pi pi-user p-mr-2"></i>
                {/* <b>Icon</b> */}
              </div>
            </Divider>
          </div>
        </div>
      </Col>
      <Col xs={12} md={8} lg={9} xl={6}>
        <div className="profile-edit-wrapper p-5">
          <EditUserProfileForm />
        </div>
      </Col>
    </Row>
  );
};

export default UserProfile;
