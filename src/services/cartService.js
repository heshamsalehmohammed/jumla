export const getSubtotalPrice = (cartProducts, cartProductsDetails) => {
  let tPrice = 0;

  cartProducts.forEach((cProduct) => {
    const productDetails = cartProductsDetails.find(
      (pd) => pd.id === cProduct.productId
    );
    tPrice += cProduct.count * productDetails.price;
  });

  return tPrice;
};
