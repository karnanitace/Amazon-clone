import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_USER,
  CLEAR_USER,
} from "../actions/types";

const initialState = {
  basket: [],
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case REMOVE_FROM_CART:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );

      if (index >= 0) {
        //item exist and remove it
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
