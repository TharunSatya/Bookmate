import { Link } from "react-router-dom";
export const DashboardCard = ({ order }) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
      <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
        <span>Order Id:{order.id}</span>
        <span>Total: ${order.amount_paid}</span>
      </div>
      {order.cartList.map((orderDetails) => (
        <div
          className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 "
          key={orderDetails.id}
        >
          <div className="flex">
            <Link to={`/products/${orderDetails.id}`}>
              <img
                className="w-32 rounded"
                src={orderDetails.poster}
                alt={orderDetails.name}
              />
            </Link>
            <div className="">
              <Link to={`/products/${orderDetails.id}`}>
                <p className="text-lg ml-2 dark:text-slate-200">
                  {orderDetails.name}
                </p>
              </Link>
              <div className="text-lg m-2 dark:text-slate-200">
                <span>${orderDetails.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
