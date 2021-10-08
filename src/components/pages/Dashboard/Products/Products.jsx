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

const Products = withRouter((props) => {
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
    return (
      <div className="p-col-12">
        <div className="product-list-item">
          <img
            src={data.mainImage}
            onError={(e) =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            alt={data.name}
          />
          <div className="product-list-detail">
            <div className="product-name">{data.name}</div>
            <div className="product-description">{data.description}</div>
            <Rating value={data.rating} readOnly cancel={false}></Rating>
            <i className="pi pi-tag product-category-icon"></i>
            <span className="product-category">{data.categoryName}</span>
          </div>
          <div className="product-list-action">
            <span className="product-price">${data.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              label="Add to Cart"
              disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
            <span
              className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>
              {data.inventoryStatus}
            </span>
          </div>
        </div>
      </div>
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

    return (
      <Card className="product-card m-2 p-2">
        <img
          className="card-img-background"
          src={data.mainImage}
          alt={data.name}
        />
        <div className="product-card-content-wrapper">
          <div className="product-card-content-section p-2">
            {/*             <div className="product-card-category-name">
              <i className="p-1 m-1 pi pi-tag product-category-icon"></i>
              <span
                className={`product-badge`}>
                {data.categoryName}
              </span>
            </div> */}
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
              {/* <Rating className='' value={data.rating} readOnly cancel={false}></Rating> */}
              <span className="product-card-product-price">${data.price}</span>
            </div>
            <div className=" d-flex justify-content-center p-2 pt-0">
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
                  onClick={() =>
                    toggleAddingProductToCartHandler(data, inCart)
                  }>
                  {!inCart && <i className="fa fa-cart-plus m-1"></i>}
                  {inCart && (
                    <i className="fa fa-cart-arrow-down fa-active m-1"></i>
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
                  {!inWishlist && <i className="fa fa-heart m-1"></i>}
                  {inWishlist && <i className="fa fa-heart fa-active m-1"></i>}
                </Button>
              </OverlayTrigger>
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

    if (layout === 'list') return renderListItem(product);
    else if (layout === 'grid') return renderGridItem(product);
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
          {/*           <DataViewLayoutOptions
            layout={layout}
            onChange={(e) => setLayout(e.value)}
          /> */}
        </Col>
      </Row>
    );
  };

  const header = renderHeader();

  return (
    <Row className='justify-content-center'>
      <Col md={3} className='categories-filter-col'>
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
