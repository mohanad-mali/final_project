import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

function getToken() {
  return localStorage.getItem("token");
}

export function getWishlist() {
  return axios.get(`${BASE_URL}/wishlist`, {
    headers: { token: getToken() },
  });
}

export function addToWishlist(productId) {
  return axios.post(
    `${BASE_URL}/wishlist`,
    { productId },
    { headers: { token: getToken() } }
  );
}

export function removeFromWishlist(productId) {
  return axios.delete(`${BASE_URL}/wishlist/${productId}`, {
    headers: { token: getToken() },
  });
}