import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './ProductDetails.scss';
import React, {useState, useEffect} from 'react';
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
  cart_UpdateProductProfit,
} from '../../../../redux/actionCreators/cartActionCreators';
import FancyRadio from '../../../common/fancyRadio/fancyRadio';
import NumericInput from 'react-numeric-input';
import {removeNegativeValue} from '../../../common';
import {getProductTotalPrice} from '../../../../services/cartService';

const ProductDetails = withRouter((props) => {
  let {
    match: {
      params: {
        productid: externalProductId,
        stockdetailid: externalStockDetailId,
      },
    },
  } = props;

  externalProductId = Number(externalProductId);
  externalStockDetailId = Number(externalStockDetailId);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) =>
    state.productsState.products.filter((p) => p.id === externalProductId)
  )[0];

  const productColors = [
    ...new Set(
      productDetails?.stock?.stockDetails?.map((sd) => sd.color) ?? []
    ),
  ];
  const productSizes = [
    ...new Set(productDetails?.stock?.stockDetails?.map((sd) => sd.size) ?? []),
  ];
  const [mainImage, setMainImage] = useState(productDetails.mainImage);

  const [stockDetailId, setStockDetailId] = useState(externalStockDetailId);

  const productStockDetails = productDetails?.stock?.stockDetails?.find(
    (sd) => sd.id === stockDetailId
  );

  const [selectedColor, setSelectedColor] = useState(
    productStockDetails ? productStockDetails.color : ''
  );
  const [selectedSize, setSelectedSize] = useState(
    productStockDetails ? productStockDetails.size : ''
  );

  useEffect(() => {
    if (selectedColor !== '' && selectedSize !== '') {
      const stockDetailId =
        productDetails?.stock?.stockDetails.find(
          (sd) => sd.color === selectedColor && sd.size === selectedSize
        ).id ?? 0;
      setStockDetailId(stockDetailId);
    }
  }, [selectedColor, selectedSize]);

  const orderedProduct = useSelector(
    (state) =>
      state.cartState.cartProducts.find(
        (cp) =>
          cp.productId === externalProductId &&
          cp.stockDetailId === stockDetailId
      ) ?? null
  );

  const isInCart = orderedProduct ? true : false;
  const [profit, setProfit] = useState(
    isInCart ? orderedProduct.profitAmountPerPiece : 0.0
  );

  const isInWishlist = useSelector(
    (state) =>
      state.cartState.wishlistProducts.find(
        (cp) => cp.productId === externalProductId
      ) ?? null
  )
    ? true
    : false;

  useEffect(() => {
    if (isInCart) {
      dispatch(
        cart_UpdateProductProfit(productDetails.id, stockDetailId, profit)
      );
    }
  }, [profit]);

  const toggleAddingProductToCartHandler = (product, inCart) => {
    if (inCart) {
      dispatch(cart_RemoveProduct(product.id, stockDetailId));
    } else {
      dispatch(cart_AddProduct(product.id, stockDetailId, 1, profit));
    }
  };

  const toggleAddingProductToWishlistHandler = (product, inWishlist) => {
    if (inWishlist) {
      dispatch(wishlist_RemoveProduct(product.id));
    } else {
      dispatch(wishlist_AddProduct(product.id));
    }
  };

  const addToCartButtonDisabled = () => {
    if (productDetails.inventoryStatus === 'OUTOFSTOCK') {
      return true;
    }
    if (productDetails?.stock?.stockDetails.length > 0 && stockDetailId === 0) {
      return true;
    }
    return false;
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
            {productDetails.subImages.map((imgSrc, index) => {
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
            <div
              className="product-details-content-sub-section"
              style={{
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
              }}>
              <div className="product-details-product-name p-2">
                {productDetails.name}
              </div>
              <div className="product-details-product-description p-2">
                {productDetails.description}
              </div>
            </div>
          </div>
          <div className="product-actions-content-section p-2 d-flex justify-content-center">
            <div className="d-flex">
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
            </div>
          </div>
        </div>
        <div className="product-details-content-wrapper mt-2 d-flex flex-column justify-content-between">
          <div className="product-details-content-section">
            <Table
              className="product-spec-table"
              striped
              bordered
              hover
              variant="dark"
              style={{marginBottom: '0px'}}>
              <tbody>
                <tr>
                  <td>Product Price</td>
                  <td>
                    {productDetails.oldPrice && (
                      <span
                        className="p-1"
                        style={{
                          textDecoration: 'line-through',
                          display: 'inline-block',
                        }}>
                        {productDetails.oldPrice +
                          ' ' +
                          productDetails.priceCurrency}
                      </span>
                    )}
                    <span className="p-1">
                      {productDetails.price +
                        ' ' +
                        productDetails.priceCurrency}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Shipping Price</td>
                  <td>
                    {productDetails.shippingPrice +
                      ' ' +
                      productDetails.priceCurrency}
                  </td>
                </tr>
                <tr>
                  <td>Service Price</td>
                  <td>
                    {Math.trunc(
                      productDetails.servicePriceRate *
                        productDetails.price *
                        100
                    ) /
                      100 +
                      ' ' +
                      productDetails.priceCurrency}
                  </td>
                </tr>
                <tr>
                  <td style={{lineHeight: '40px'}}>Profit Amount</td>
                  <td>
                    <NumericInput
                      className="form-control"
                      min={0}
                      precision={2}
                      value={
                        isInCart ? orderedProduct.profitAmountPerPiece : profit
                      }
                      format={(num) => {
                        return (
                          removeNegativeValue(num) +
                          ' ' +
                          productDetails.priceCurrency
                        );
                      }}
                      onChange={(value) => {
                        setProfit(removeNegativeValue(value));
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td>
                    {getProductTotalPrice(productDetails, {
                      profitAmountPerPiece: profit,
                    }) +
                      ' ' +
                      productDetails.priceCurrency}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="product-details-content-wrapper mt-2 d-flex flex-column justify-content-between">
          {productDetails?.stock?.stockDetails.length > 0 && (
            <>
              <FancyRadio
                optionsList={productColors}
                selectedOption={selectedColor}
                setSelectedOption={setSelectedColor}
                prefix="product-color"
              />
              <FancyRadio
                optionsList={productSizes}
                selectedOption={selectedSize}
                setSelectedOption={setSelectedSize}
                prefix="product-size"
              />
            </>
          )}
          <div className="product-actions-content-section p-2 d-flex justify-content-between">
            <div className="d-flex">
              <OverlayTrigger
                placement={'top'}
                overlay={
                  <Tooltip>
                    <strong>
                      {isInCart ? 'Added to cart' : 'Add to cart'}
                    </strong>
                  </Tooltip>
                }>
                <Button
                  className="product-details-button m-1 p-2"
                  variant="light"
                  disabled={addToCartButtonDisabled()}
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
            </div>
            {!addToCartButtonDisabled() && (
              <ProductValueDecreaseIncreaseButton
                productId={productDetails.id}
                stockDetailId={stockDetailId}
                productCount={orderedProduct?.count ?? 0}
                classNames="p-2"
                styles={{
                  display: 'inline-flex',
                  width: 'unset',
                }}
              />
            )}
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
