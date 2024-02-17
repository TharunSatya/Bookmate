export const getProductList = async (searchQuery) => {
  const response = await fetch(
    `http://localhost:8000/444/products?name_like=${
      searchQuery ? searchQuery : ""
    } `
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const url = `${process.env.REACT_APP_HOST}/444/products/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  return data;
};
