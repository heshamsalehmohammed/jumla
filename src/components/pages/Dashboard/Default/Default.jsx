import './Default.scss';
import React, {Component} from 'react';
import Products from '../Products/Products';

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Products />
      </>
    );
  }
}
