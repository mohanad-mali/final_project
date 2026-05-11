"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaHeart, FaEye, FaSync, FaPlus } from "react-icons/fa";
import { addToCart } from "@/api/cartApi";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loadingProductId, setLoadingProductId] = useState(null);

  async function getProducts() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
      );
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddToCart(productId) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      setLoadingProductId(productId);

      await addToCart(productId);

      alert("Product added to cart ✅");
    } catch (error) {
      console.log(error);
      alert("Failed to add product ❌");
    } finally {
      setLoadingProductId(null);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-14">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        <span className="text-green-600 mr-2">|</span>
        Featured <span className="text-green-600">Products</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.slice(0, 15).map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <div className="bg-white border rounded-xl p-4 relative hover:shadow-lg transition cursor-pointer">
              <div className="absolute right-3 top-3 flex flex-col gap-3 text-gray-400 z-10">
                <FaHeart className="hover:text-red-500" />
                <FaEye className="hover:text-green-600" />
                <FaSync className="hover:text-blue-500" />
              </div>

              <img
                src={product.imageCover}
                alt={product.title}
                className="w-full h-40 object-contain mb-3"
              />

              <p className="text-xs text-gray-400">{product.category?.name}</p>

              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h3>

              <div className="text-yellow-400 text-sm mb-2">
                ⭐ {product.ratingsAverage}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">
                  {product.price} EGP
                </span>

                <button
                  disabled={loadingProductId === product._id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product._id);
                  }}
                  className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-700 disabled:bg-gray-400"
                >
                  {loadingProductId === product._id ? "..." : <FaPlus />}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
