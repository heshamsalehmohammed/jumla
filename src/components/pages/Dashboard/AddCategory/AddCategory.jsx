import './AddCategory.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddCategoryAccordionForm from './AddCategoryAccordionForm/AddCategoryAccordionForm';

const AddCategory = withRouter((props) => {
  const dispatch = useDispatch();

  return (
    <Row className="justify-content-center p-2">
      <Col md={9} xs={12} className="">
        <AddCategoryAccordionForm />
      </Col>
    </Row>
  );
});

export default AddCategory;
