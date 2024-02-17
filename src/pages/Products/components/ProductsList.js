import { useEffect, useState } from "react";

import { ProductCard } from "../../../components";
import { FilterBar } from "./FilterBar";
import { useTitle } from "../../../hooks";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../../context";
import { getProductList } from "../../../services";
export const ProductsList = () => {
  const { products, initialProductList } = useFilter();
  const [errorMsg, setErrorMsg] = useState("");
  useTitle("Products List");
  const search = useLocation().search;
  const searchQuery = new URLSearchParams(search).get("q");

  useEffect(() => {
    const handleApi = async () => {
      try {
        const data = await getProductList(searchQuery);
        initialProductList(data);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Sorry, Server Error! Failed to load!😒");
      }
    };
    handleApi();
  }, [searchQuery]); // eslint-disable-line

  const [showContent, setShowContent] = useState(false);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              onClick={() => setShowContent(!showContent)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {errorMsg && (
            <h1 className="text-2xl dark:text-white my-20">{errorMsg}</h1>
          )}
          {products.map((eachProduct) => (
            <ProductCard data={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </section>

      {showContent && <FilterBar setShowContent={setShowContent} />}
    </main>
  );
};
