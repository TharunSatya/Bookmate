import React from "react";
import { CartEmpty } from "./CartEmpty";
import { CartList } from "./CartList";
import { useCart } from "../../../context";
import { useTitle } from "../../../hooks";
export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart(${cartList.length})`);
  return <main>{cartList.length > 0 ? <CartList /> : <CartEmpty />}</main>;
};
