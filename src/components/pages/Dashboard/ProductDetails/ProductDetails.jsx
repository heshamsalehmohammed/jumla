import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './ProductDetails.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {withRouter} from 'react-router-dom';
import {Magnifier} from 'react-image-magnifiers';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ProductValueDecreaseIncreaseButton from './../../../common/productValueDecreaseIncreaseButton/productValueDecreaseIncreaseButton';
import {
  cart_RemoveProduct,
  cart_AddProduct,
  wishlist_AddProduct,
  wishlist_RemoveProduct,
} from '../../../../redux/actionCreators/cartActionCreators';

const ProductDetails = withRouter((props) => {
  let {
    match: {
      params: {id: productId},
    },
  } = props;

  productId = Number(productId);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) =>
    state.productsState.products.filter((p) => p.id === productId)
  )[0];

  const [mainImage, setMainImage] = useState(productDetails.mainImage);

  const orderedProduct = useSelector(
    (state) =>
      state.cartState.cartProducts.find((cp) => cp.productId === productId) ??
      null
  );

  const isInCart = orderedProduct ? true : false;

  const isInWishlist = useSelector(
    (state) =>
      state.cartState.wishlistProducts.find(
        (cp) => cp.productId === productId
      ) ?? null
  )
    ? true
    : false;

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

  return (
    <Row className="justify-content-center p-2">
      <Col md={5} xs={12} className="product-images-col">
        <div className="main-image-container">
          <Magnifier
            className="main-image-magifier-container"
            imageSrc={mainImage}
            imageAlt="product image"
          />
        </div>
        <div className="sub-images-container p-2">
          <ListGroup bsPrefix="list-group-product-sub-images" horizontal>
            {productDetails.images.map((imgSrc, index) => {
              return (
                <ListGroup.Item
                  className="m-1"
                  bsPrefix="list-group-product-sub-images-item"
                  key={index}>
                  <img
                    src={imgSrc}
                    alt="product"
                    onClick={() => setMainImage(imgSrc)}
                  />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Col>
      <Col md={6} xs={12} className="">
        <div className="product-details-content-wrapper d-flex flex-column justify-content-between">
          <div className="product-details-content-section p-2">
            <div className="product-details-content-sub-section p-2">
              <span
                className={`product-badge status-${productDetails.inventoryStatus.toLowerCase()}`}>
                {productDetails.inventoryStatus}
              </span>
            </div>
            <div className="product-details-content-sub-section p-2">
              <span>
                <i className="m-2 fa fa-tags"></i>
                {productDetails.categoryName}
              </span>
            </div>
            <div className="product-details-content-sub-section p-2">
              <div className="product-details-product-name">
                {productDetails.name}
              </div>
              <div className="product-details-product-description">
                {productDetails.description}
              </div>
              <span className="product-details-product-price">
                ${productDetails.price}
              </span>
            </div>
          </div>
          <div className="product-actions-content-section p-2">
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  <strong>{isInCart ? 'Added to cart' : 'Add to cart'}</strong>
                </Tooltip>
              }>
              <Button
                className="product-details-button m-1 p-1"
                variant="light"
                disabled={productDetails.inventoryStatus === 'OUTOFSTOCK'}
                onClick={() =>
                  toggleAddingProductToCartHandler(productDetails, isInCart)
                }>
                {!isInCart && (
                  <>
                    <i className="product-details-button-icon fa fa-cart-plus m-1"></i>{' '}
                    Add to cart
                  </>
                )}
                {isInCart && (
                  <>
                    <i className="product-details-button-icon fa fa-cart-arrow-down fa-active m-1"></i>{' '}
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
                    {isInWishlist ? 'Added to wishlist' : 'Add to wishlist'}
                  </strong>
                </Tooltip>
              }>
              <Button
                label=""
                className="product-details-button m-1 p-1"
                variant="light"
                onClick={() =>
                  toggleAddingProductToWishlistHandler(
                    productDetails,
                    isInWishlist
                  )
                }>
                {!isInWishlist && (
                  <>
                    <i className="product-details-button-icon fa fa-heart m-1"></i>{' '}
                    Add to wishlist
                  </>
                )}
                {isInWishlist && (
                  <>
                    <i className="product-details-button-icon fa fa-heart fa-active m-1"></i>{' '}
                    Added to wishlist
                  </>
                )}
              </Button>
            </OverlayTrigger>
            <ProductValueDecreaseIncreaseButton
              productId={productDetails.id}
              productCount={orderedProduct?.count ?? 0}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} className="p-4">
        <Row>
          <h4 className="m-3 text-right">Specification</h4>
          <Col xs={12} md={6}>
            <Table
              className="product-spec-table"
              striped
              bordered
              hover
              variant="light">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{'subtotalPrice'}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>{'tax'}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td>{'discount'}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{'totalPrice'}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={6}>
            <Table
              className="product-spec-table"
              striped
              bordered
              hover
              variant="light">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{'subtotalPrice'}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>{'tax'}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td>{'discount'}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{'totalPrice'}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
});

export default ProductDetails;
