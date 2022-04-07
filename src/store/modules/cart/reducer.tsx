export default function cart(state = [], action: any) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];

    default:
      return state;
  }
}
