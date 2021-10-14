import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
import './Products.scss';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import Button from 'react-bootstrap/Button';
import {Dropdown} from 'primereact/dropdown';
import {Rating} from 'primereact/rating';
import {withRouter} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import {
  cart_RemoveProduct,
  cart_AddProduct,
  wishlist_AddProduct,
  wishlist_RemoveProduct,
} from '../../../../redux/actionCreators/cartActionCreators';
import ProductsCategoriesSelection from './ProductsCategoriesSelection/ProductsCategoriesSelection';
import {useMediaQuery} from 'react-responsive';

const Products = withRouter((props) => {
  const {history} = props;

  const [layout, setLayout] = useState('grid');
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const sortOptions = [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
  ];

  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsState.products);
  const cartProducts = useSelector((state) => state.cartState.cartProducts);
  const wishlistProducts = useSelector(
    (state) => state.cartState.wishlistProducts
  );

  const isMobile = useMediaQuery({query: '(max-width: 575.98px)'});

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const renderListItem = (data) => {
    let inCart =
      (cartProducts?.findIndex((p) => p.productId === data.id) ?? -1) !== -1;
    let inWishlist =
      (wishlistProducts?.findIndex((p) => p.productId === data.id) ?? -1) !==
      -1;

    const productCardClickHandler = (e) => {
      if (
        !e.target.classList.contains('product-card-button') &&
        !e.target.classList.contains('product-card-button-icon')
      ) {
        document.body.classList.add('moving');
        document.getElementById('moving-overlay').classList.add('show');
        setTimeout(() => {
          document.body.classList.remove('moving');
        }, 800);
        setTimeout(() => {
          document.getElementById('moving-overlay').classList.remove('show');
          history.push(`/dashboard/productdetails/${data.id}`);
        }, 1200);
      }
    };

    return (
      <Col lg={9} md={10} xs={12} className=" p-2 mb-1" >
        <Row onClick={productCardClickHandler}  className="product-list-item">
          <Col xs={3}>
            <img
              className="product-list-item-img"
              src={data.mainImage}
              alt={data.name}
            />
          </Col>
          <Col
            xs={5}
            className="p-3 d-flex flex-column justify-content-between">
            <div className="">
              <span
                className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>
                {data.inventoryStatus}
              </span>
            </div>
            <div className=" p-2">
              <div className=" text-right">{data.name}</div>
              <div className=" text-right">{data.description}</div>
            </div>
            <div className=" text-center p-2">
              {data.oldPrice && (
                <span
                  className="p-1"
                  style={{textDecoration: 'line-through', color: 'red'}}>
                  {data.oldPrice + data.priceCurrency}
                </span>
              )}
              <span style={{color: 'blue'}} className="p-1">
                {data.price + data.priceCurrency}
              </span>
            </div>
          </Col>
          <Col
            xs={4}
            className=" d-flex justify-content-center flex-column p-2">
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  <strong>{inCart ? 'Added to cart' : 'Add to cart'}</strong>
                </Tooltip>
              }>
              <Button
                className="product-card-button m-1 p-1"
                variant="light"
                disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                onClick={() => toggleAddingProductToCartHandler(data, inCart)}>
                {!inCart && (
                  <>
                    <i className="product-card-button-icon fa fa-cart-plus m-1"></i>
                    Add to cart
                  </>
                )}
                {inCart && (
                  <>
                    <i className="product-card-button-icon fa fa-cart-arrow-down fa-active m-1"></i>
                    Added to cart
                  </>
                )}
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  <strong>
                    {inWishlist ? 'Added to wishlist' : 'Add to wishlist'}
                  </strong>
                </Tooltip>
              }>
              <Button
                label=""
                className="product-card-button m-1 p-1"
                variant="light"
                onClick={() =>
                  toggleAddingProductToWishlistHandler(data, inWishlist)
                }>
                {!inWishlist && (
                  <>
                    <i className="product-card-button-icon fa fa-heart m-1"></i>
                    Add to wishlist
                  </>
                )}
                {inWishlist && (
                  <>
                    <i className="product-card-button-icon fa fa-heart fa-active m-1"></i>
                    Added to wishlist
                  </>
                )}
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Col>
    );
  };

  const toggleAddingProductToCartHandler = (product, inCart) => {
    if (inCart) {
      dispatch(cart_RemoveProduct(product.id));
    } else {
      dispatch(cart_AddProduct(product.id, 1));
    }
  };

  const toggleAddingProductToWishlistHandler = (product, inWishlist) => {
    if (inWishlist) {
      dispatch(wishlist_RemoveProduct(product.id));
    } else {
      dispatch(wishlist_AddProduct(product.id));
    }
  };

  const renderGridItem = (data) => {
    let inCart =
      (cartProducts?.findIndex((p) => p.productId === data.id) ?? -1) !== -1;
    let inWishlist =
      (wishlistProducts?.findIndex((p) => p.productId === data.id) ?? -1) !==
      -1;

    const productCardClickHandler = (e) => {
      if (
        !e.target.classList.contains('product-card-button') &&
        !e.target.classList.contains('product-card-button-icon')
      ) {
        document.body.classList.add('moving');
        document.getElementById('moving-overlay').classList.add('show');
        setTimeout(() => {
          document.body.classList.remove('moving');
        }, 800);
        setTimeout(() => {
          document.getElementById('moving-overlay').classList.remove('show');
          history.push(`/dashboard/productdetails/${data.id}`);
        }, 1200);
      }
    };

    return (
      <Card className="product-card m-2 p-2" onClick={productCardClickHandler}>
        <img
          className="card-img-background"
          src={data.mainImage}
          alt={data.name}
        />
        <div className="product-card-content-wrapper">
          <div className="product-card-content-section p-2">
            <span
              className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>
              {data.inventoryStatus}
            </span>
          </div>
          <div className="product-card-content-section product-card-details-section">
            <div className=" p-2 product-card-product-details text-center">
              <div className="product-card-product-name text-right">
                {data.name}
              </div>
              <div className="product-card-product-description text-right">
                {data.description}
              </div>
            </div>
            <div className=" d-flex justify-content-center flex-column p-2 pt-0">
              <div className="product-card-product-price text-center p-2">
                {data.oldPrice && (
                  <span
                    className="p-1"
                    style={{textDecoration: 'line-through', color: 'red'}}>
                    {data.oldPrice + data.priceCurrency}
                  </span>
                )}
                <span style={{color: 'blue'}} className="p-1">
                  {data.price + data.priceCurrency}
                </span>
              </div>
              <div className=" d-flex justify-content-center p-2">
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>
                      <strong>
                        {inCart ? 'Added to cart' : 'Add to cart'}
                      </strong>
                    </Tooltip>
                  }>
                  <Button
                    className="product-card-button m-1 p-1"
                    variant="light"
                    disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                    onClick={() =>
                      toggleAddingProductToCartHandler(data, inCart)
                    }>
                    {!inCart && (
                      <>
                        <i className="product-card-button-icon fa fa-cart-plus m-1"></i>{' '}
                        Add to cart
                      </>
                    )}
                    {inCart && (
                      <>
                        <i className="product-card-button-icon fa fa-cart-arrow-down fa-active m-1"></i>{' '}
                        Added to cart
                      </>
                    )}
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>
                      <strong>
                        {inWishlist ? 'Added to wishlist' : 'Add to wishlist'}
                      </strong>
                    </Tooltip>
                  }>
                  <Button
                    label=""
                    className="product-card-button m-1 p-1"
                    variant="light"
                    onClick={() =>
                      toggleAddingProductToWishlistHandler(data, inWishlist)
                    }>
                    {!inWishlist && (
                      <i className="product-card-button-icon fa fa-heart m-1"></i>
                    )}
                    {inWishlist && (
                      <i className="product-card-button-icon fa fa-heart fa-active m-1"></i>
                    )}
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }

    if (layout === 'grid' || isMobile) return renderGridItem(product);
    else if (layout === 'list') return renderListItem(product);
  };

  const renderHeader = () => {
    return (
      <Row>
        <Col xs={6} className="">
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder="Sort By Price"
            onChange={onSortChange}
          />
        </Col>
        <Col xs={6} className="d-flex justify-content-end">
          {!isMobile && (
            <DataViewLayoutOptions
              layout={layout}
              onChange={(e) => setLayout(e.value)}
            />
          )}
        </Col>
      </Row>
    );
  };

  const header = renderHeader();

  return (
    <Row className="justify-content-center">
      <Col md={3} className="categories-filter-col">
        <ProductsCategoriesSelection />
      </Col>
      <Col md={9}>
        <DataView
          value={products}
          layout={layout}
          header={header}
          itemTemplate={itemTemplate}
          paginator
          rows={9}
          sortOrder={sortOrder}
          sortField={sortField}
        />
      </Col>
    </Row>
  );
});

export default Products;
