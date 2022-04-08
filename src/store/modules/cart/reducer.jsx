import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/add':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.product.id,
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });

    case '@cart/delete':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.productId,
        );

        draft.splice(productIndex, 1);
      });

    default:
      return state;
  }
}
