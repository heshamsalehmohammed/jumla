import './OrderDetails.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {withRouter} from 'react-router-dom';


const OrderDetails = withRouter((props) => {
  let {
    match: {
      params: {id: orderId},
    },
  } = props;

  orderId = Number(orderId);

  const dispatch = useDispatch();


  return (
    null
  );
});

export default OrderDetails;
