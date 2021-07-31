import CartTypes from '../type/CartType';

export const addProduct = (nextCartItem) => ({
  type: CartTypes.ADD_TO_CART,
  payload: nextCartItem
});

export const removeCartItem = (cartItem) => ({
  type: CartTypes.REMOVE_CART_ITEM,
  payload: cartItem
});

export const reduceCartItem = (cartItem) => ({
  type: CartTypes.REDUCE_CART_ITEM,
  payload: cartItem
});

export const clearCart = () => ({
  type: CartTypes.CLEAR_CART
})