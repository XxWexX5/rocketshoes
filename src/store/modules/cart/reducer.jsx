import produce from 'immer';

import { formatPrice } from '../../../utils/format';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/add':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.product.id,
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
          draft[productIndex].subtotal = formatPrice(
            draft[productIndex].price * (draft[productIndex].amount || 1),
          );
        } else {
          draft.push({
            ...action.product,
            amount: 1,
            subtotal: formatPrice(
              action.product.price * (action.product.amount || 1),
            ),
          });
        }
      });

    case '@cart/addAmountProducts':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.productId,
        );
        draft[productIndex].amount += 1;
        draft[productIndex].subtotal = formatPrice(
          draft[productIndex].price * draft[productIndex].amount,
        );
      });

    case '@cart/outAmountProducts':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.productId,
        );
        if (draft[productIndex].amount > 1) {
          draft[productIndex].amount -= 1;
        }
        draft[productIndex].subtotal = formatPrice(
          draft[productIndex].price * draft[productIndex].amount,
        );
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
