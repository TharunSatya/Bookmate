export const getUser = async () => {
  const userId = JSON.parse(sessionStorage.getItem("cbid"));
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${userId}`,
    options
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  return data;
};

export const getUserOrders = async () => {
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
  const userId = JSON.parse(sessionStorage.getItem("cbid"));
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();
  return data;
};

export const createOrders = async (order) => {
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();

  return data;
};
