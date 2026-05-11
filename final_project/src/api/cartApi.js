import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

function getToken() {
  return localStorage.getItem("token");
}

export async function addToCart(productId) {
  return axios.post(
    `${BASE_URL}/cart`,
    {
      productId,
    },
    {
      headers: {
        token: getToken(),
      },
    },
  );
}

export async function getCart() {
  return axios.get(`${BASE_URL}/cart`, {
    headers: {
      token: getToken(),
    },
  });
}

export async function updateCartItem(productId, count) {
  return axios.put(
    `${BASE_URL}/cart/${productId}`,
    {
      count,
    },
    {
      headers: {
        token: getToken(),
      },
    },
  );
}

export async function removeCartItem(productId) {
  return axios.delete(`${BASE_URL}/cart/${productId}`, {
    headers: {
      token: getToken(),
    },
  });
}