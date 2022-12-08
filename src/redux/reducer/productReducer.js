import { ADD_TO_CART, REMOVE_TO_CART } from '../actionsType/productActions';

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  let selectProduct = state.cart.find(
    (item) => item._id === action.payload._id
  );

  switch (action.type) {
    case ADD_TO_CART:
      if (selectProduct) {
        const newCart = state.cart.filter(
          (item) => item._id !== selectProduct._id
        );

        selectProduct.quantity = selectProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectProduct],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_TO_CART:
      if (selectProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (item) => item._id !== selectProduct._id
        );

        selectProduct.quantity = selectProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default productReducer;
