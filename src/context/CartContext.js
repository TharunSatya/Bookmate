import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";
const cartInitialState = {
  cartList: [],
  total: 0,
};

export const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartList: updatedList,
      },
    });
    totalPrice(updatedList);
  }

  function removeItem(product) {
    const updatedList = state.cartList.filter(
      (eachItem) => eachItem.id !== product.id
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        cartList: updatedList,
      },
    });
    totalPrice(updatedList);
  }

  async function totalPrice(updatedList) {
    let finalPrice = 0;
    updatedList.forEach((element) => {
      finalPrice = finalPrice + element.price;
    });
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total: finalPrice,
      },
    });
  }

  function ClearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        cartList: [],
        total: 0,
      },
    });
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeItem,
    ClearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
