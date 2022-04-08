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
