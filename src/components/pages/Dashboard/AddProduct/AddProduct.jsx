import './AddProduct.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddProductAccordionForm from './AddProductAccordionForm/AddProductAccordionForm';

const AddProduct = withRouter((props) => {
  const dispatch = useDispatch();

  const inventoryStatuses = useSelector(
    (state) => state.lookupState.InventoryStatuses
  );
  const priceCurrencies = useSelector(
    (state) => state.lookupState.PriceCurrencies
  );

  return (
    <Row className="justify-content-center p-2">
      <Col md={9} xs={12} className="">
        <AddProductAccordionForm
          inventoryStatuses={inventoryStatuses}
          priceCurrencies={priceCurrencies}
        />
      </Col>
    </Row>
  );
});

export default AddProduct;
