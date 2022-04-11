export function addCart(product) {
  return {
    type: '@cart/add',
    product,
  };
}

export function removeCart(productId) {
  return {
    type: '@cart/delete',
    productId,
  };
}

export function addAmountProduct(productId) {
  return {
    type: '@cart/addAmountProducts',
    productId,
  };
}

export function outAmountProduct(productId) {
  return {
    type: '@cart/outAmountProducts',
    productId,
  };
}
