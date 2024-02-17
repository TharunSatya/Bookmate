import React, { useEffect, useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { DashboardEmpty } from "./DashboardEmpty";
import { getUserOrders } from "../../../services";
import { useTitle } from "../../../hooks";
import { toast } from "react-toastify";
export const Dashboard = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    };
    getOrderDetails();
  }, []);

  return (
    <main>
      <section>
        {orders.length > 0 &&
          orders.map((product) => (
            <DashboardCard order={product} key={product.id} />
          ))}
      </section>

      <section>{orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};
