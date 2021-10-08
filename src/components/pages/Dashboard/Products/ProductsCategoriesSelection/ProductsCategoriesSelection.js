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
import './ProductsCategoriesSelection.scss';

const ProductsCategoriesSelection = withRouter((props) => {
  const {history} = props;
  const [selectedKeys, setSelectedKeys] = useState(null);

  const categories = useSelector((state) => state.productsState.categories);

  const createNode = (category, key) => {
    let node = {
      key: key,
      label: category.name,
      data: category.name,
    };

    if (category.subCategories && category.subCategories.length > 0) {
      node.children = category.subCategories.map((scat, index) => {
        return createNode(scat, `${key}-${index}`);
      });
    }

    return node;
  };

  const createNodes = () => {
    let nodes = categories.map((cat, index) => {
      return createNode(cat, `${index}`);
    });

    return nodes;
  };

  return (
    <Tree
      filter
      value={createNodes()}
      selectionMode="checkbox"
      selectionKeys={selectedKeys}
      onSelectionChange={(e) => setSelectedKeys(e.value)}
    />
  );
});

export default ProductsCategoriesSelection;
