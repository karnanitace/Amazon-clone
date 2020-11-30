import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER, CLEAR_USER } from "./types";

export const addToBasket = (id, title, image, price, rating) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id,
      title,
      image,
      price,
      rating,
    },
  });
};

export const removeFromBasket = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};

export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};
export const clearUser = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER,
    payload: null,
  });
};
