import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleApi = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw { message: response.statusText, status: response.status }; // eslint-disable-line
      }
      const data = await response.json();

      setProducts(data);
    };
    handleApi();
  }, [url]);
  return products;
};
