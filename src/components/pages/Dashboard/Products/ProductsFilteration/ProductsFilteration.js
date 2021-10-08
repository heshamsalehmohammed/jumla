import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import {Tree} from 'primereact/tree';
import './ProductsFilteration.scss';

const ProductsFilteration = withRouter((props) => {
  const {history} = props;

  return <div />;
});

export default ProductsFilteration;
