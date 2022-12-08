import { ADD_TO_CART, REMOVE_TO_CART } from '../actionsType/productActions';

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default productReducer;
