import { ProductCard } from "./Elements/ProductCard";
import { useFetch } from "../hooks/useFetch";

export const FeaturedProduct = () => {
  const productsData = useFetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );

  return (
    <div>
      <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
          Featured eBooks
        </h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {productsData.map((eachProduct) => (
            <ProductCard data={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </section>
    </div>
  );
};
