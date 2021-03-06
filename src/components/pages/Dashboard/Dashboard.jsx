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
import ProductDetails from './ProductDetails/ProductDetails';
import Orders from './Orders/Orders';
import OrderDetails from './OrderDetails/OrderDetails';
import UserProfile from './UserProfile/UserProfile';
import MainNav from './MainNav/MainNav';
import SecondaryNav from './SecondaryNav/SecondaryNav';
import ProductsNavBar from './Products/ProductsNavBar/ProductsNavBar';
import AdCarousel from './AdCarousel/AdCarousel';
import AddProduct from './AddProduct/AddProduct';
import Footer from './Footer/Footer';
import AddCategory from './AddCategory/AddCategory';
import Categories from './Categories/Categories';

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
          style={{background: '#f0f2f5'}}>
          <div className="container-fluid p-0 m-0">
            <div className="page-wrapper chiller-theme ">
              <MainNav />
              <SecondaryNav />
              <Route
                path={[path + '/', path + '/default']}
                exact
                render={(props) => (
                  <>
                    <ProductsNavBar />
                    <AdCarousel />
                  </>
                )}
              />
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
                      path={path + '/productdetails/:productid/:stockdetailid/:profit'}
                      component={ProductDetails}
                    />
                    <Route
                      path={path + '/productdetails/:productid/:stockdetailid'}
                      component={ProductDetails}
                    />
                    <Route
                      path={path + '/productdetails/:productid'}
                      component={ProductDetails}
                    />
                    <Route path={path + '/addproduct'} component={AddProduct} />
                    <Route
                      path={path + '/addcategory'}
                      component={AddCategory}
                    />
                    <Route path={path + '/categories'} component={Categories} />
                    <Route path={path + '/orders'} component={Orders} />
                    <Route
                      path={path + '/orderdetails/:id'}
                      component={OrderDetails}
                    />
                    <Route
                      path={path + '/userprofile/:id'}
                      component={UserProfile}
                    />
                    <Redirect exact from={path + '/*'} to={path} />
                  </Switch>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      );
    }
  }
);
