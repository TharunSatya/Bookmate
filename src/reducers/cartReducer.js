export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.cartList };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.cartList };

    case "CLEAR_CART":
      return { ...state, cartList: payload.cartList, total: payload.total };

    case "UPDATE_PRICE":
      return { ...state, total: payload.total };

    default:
      throw new Error("No Case Found!");
  }
};
