export const getProductTotalPrice = (product, cartProduct) => {
  return (
    product.price +
    product.shippingPrice +
    product.servicePriceRate * product.price +
    cartProduct.profitAmountPerPiece
  );
};

export const getSubtotalPrice = (cartProducts, cartProductsDetails) => {
  let tPrice = 0;

  cartProducts.forEach((cProduct) => {
    const productDetails = cartProductsDetails.find(
      (pd) => pd.id === cProduct.productId
    );
    tPrice += cProduct.count * getProductTotalPrice(productDetails, cProduct);
  });

  return tPrice;
};
