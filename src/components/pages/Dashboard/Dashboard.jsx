import React, {Component} from 'react';
import {Sidebar} from './sidebar';
import './style.scss';
import auth from '../../../services/authService';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Default from './Default/Default';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';
import Wishlist from './Wishlist/Wishlist';
import Products from './Products/Products';
import UserProfile from './UserProfile/UserProfile';
import MainNav from './MainNav/MainNav';
import SecondaryNav from './SecondaryNav/SecondaryNav';

export default withRouter(
  class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      if (!auth.getCurrentUser()) return <Redirect to="/auth" />;
      const {
        match: {path},
      } = this.props;
      return (
        <div
          className="min-vh-100 container-fluid p-0 m-0 d-flex flex-column"
          style={{background: '#fff'}}>
          <div className="container-fluid p-0 m-0">
            <div className="page-wrapper chiller-theme ">
              <MainNav />
              <SecondaryNav/>
              <Sidebar />
              <main className="page-content">
                <div className="container-fluid" style={{overflow: 'hidden'}}>
                  <Switch>
                    <Route
                      path={[path + '/', path + '/default']}
                      exact
                      component={Default}
                    />
                    <Route
                      path={path + '/checkout'}
                      exact
                      component={Checkout}
                    />
                    <Route path={path + '/cart'} exact component={Cart} />
                    <Route path={path + '/wishlist'} component={Wishlist} />
                    <Route path={path + '/products'} component={Products} />
                    <Route
                      path={path + '/userprofile/:id'}
                      component={UserProfile}
                    />
                    <Redirect exact from={path + '/*'} to={path} />
                  </Switch>
                </div>
              </main>
            </div>
          </div>
        </div>
      );
    }
  }
);
