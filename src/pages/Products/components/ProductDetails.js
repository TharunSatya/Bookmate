import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../../../components/Elements/Rating";
import { useTitle } from "../../../hooks";
import { useCart } from "../../../context";
import { getProduct } from "../../../services";
export const ProductDetails = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [inCart, setInCart] = useState();
  const { addToCart, removeItem, cartList } = useCart();
  const [productItem, setProductItem] = useState({});

  const itemDetails = useParams();
  const { id } = itemDetails;
  useTitle(productItem.name);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const data = await getProduct(id);
        setProductItem(data);
      } catch (error) {
        setErrorMsg("Sorry, Server Error! Failed to load!😒");
      }
    };
    fetchFunction();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find(
      (product) => product.id === productItem.id
    );
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [productItem.id, cartList]);

  return (
    <main>
      {errorMsg ? (
        <h1 className="text-2xl dark:text-white my-20 text-center">
          {errorMsg}
        </h1>
      ) : (
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
            {productItem.name}
          </h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
            quisquam magni vel eligendi nam.
          </p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img
                className="rounded"
                src={productItem.poster}
                alt={productItem.name}
              />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">29</span>
              </p>
              <p className="my-3">
                <span>
                  <Rating eating={productItem.rating} />
                </span>
              </p>
              <p className="my-4 select-none">
                {productItem.best_seller && (
                  <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                    BEST SELLER
                  </span>
                )}
                {productItem.in_stock ? (
                  <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    INSTOCK
                  </span>
                ) : (
                  <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    OUT OF STOCK
                  </span>
                )}

                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  {productItem.size} MB
                </span>
              </p>
              <p className="my-3">
                {!inCart ? (
                  <button
                    disabled={productItem.in_stock ? "" : "disabled"}
                    onClick={() => addToCart(productItem)}
                    className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                      productItem.in_stock
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    }`}
                  >
                    Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                  </button>
                ) : (
                  <button
                    onClick={() => removeItem(productItem)}
                    className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                    disabled={productItem.in_stock ? "" : "disabled"}
                  >
                    Remove Item <i className="ml-1 bi bi-trash3"></i>
                  </button>
                )}
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                aut, vel ipsum maxime quam quia, quaerat tempore minus odio
                exercitationem illum et eos, quas ipsa aperiam magnam officiis
                libero expedita quo voluptas deleniti sit dolore? Praesentium
                tempora cumque facere consectetur quia, molestiae quam,
                accusamus eius corrupti laudantium aliquid! Tempore laudantium
                unde labore voluptates repellat, dignissimos aperiam ad ipsum
                laborum recusandae voluptatem non dolore. Reiciendis cum quo
                illum. Dolorem, molestiae corporis.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
