import './ProductsNavBar.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ProductsNavBar = withRouter((props) => {
  const {history} = props;

  const categories = useSelector((state) => state.productsState.categories);

  return (
    <Container>
      <ListGroup bsPrefix="list-group-categories" horizontal>
        {categories.map((category, index) => {
          return (
            <ListGroup.Item
              className="m-1"
              bsPrefix="list-group-categories-item"
              key={index}>
              <Nav.Link
                as={Link}
                className="nav-item nav-link"
                to={`/dashboard/products?cat=${category.id}`}>
                {category.name}
              </Nav.Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
});

export default ProductsNavBar;
