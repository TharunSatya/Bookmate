export const login = async (authDetails) => {
  const responseOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(authDetails),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    responseOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("jwtToken", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
};

export const register = async (authdetails) => {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authdetails),
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/register`,
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; // eslint-disable-line
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("jwtToken", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
};

export const logout = () => {
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem("cbid");
};
