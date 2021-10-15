import './AddProduct.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Dropzone, FileItem, FullScreenPreview} from '@dropzone-ui/react';
import AddProductAccordionForm from './AddProductAccordionForm/AddProductAccordionForm';

const AddProduct = withRouter((props) => {
  const dispatch = useDispatch();

  return (
    <Row className="justify-content-center p-2">
      <Col md={9} xs={12} className="">
        <AddProductAccordionForm />
      </Col>
    </Row>
  );
});

export default AddProduct;
