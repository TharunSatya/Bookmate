import React from "react";
import { OrderFailure } from "./OrderFailure";
import { OrderSuccess } from "./OrderSuccess";
import { useLocation } from "react-router-dom";
export const OrderPage = () => {
  const { state } = useLocation();

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFailure />}
    </main>
  );
};
