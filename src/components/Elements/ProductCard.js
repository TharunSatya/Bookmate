import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";
import { useEffect, useState } from "react";
export const ProductCard = (props) => {
  const [isInCart, setIsInCart] = useState(false);
  const { data } = props;
  const {
    id,
    name,
    overview,

    price,
    poster,

    rating,
    in_stock,

    best_seller,
  } = data;
  const { addToCart, removeItem, cartList } = useCart();

  useEffect(() => {
    const productInCart = cartList.find((product) => product.id === id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}

        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <Link to={`/products/${id}`}>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </Link>
        <div className="flex items-center my-2">
          <Rating eating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>

          {!isInCart ? (
            <button
              disabled={in_stock ? "" : "disabled"}
              onClick={() => addToCart(data)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                in_stock ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          ) : (
            <button
              disabled={in_stock ? "" : "disabled"}
              onClick={() => removeItem(data)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
